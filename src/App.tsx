import './App.css';
import s from './App.module.css';
import { useEffect, useState } from 'react';
import { TempSearch } from './Components/tempSearch.tsx';
import { Users } from './Components/users.tsx';
import { UserDetails } from './Components/userDeatails.tsx';

export type SearchUserType = {
  login: string;
  id: number;
};

export type actualSearch = (temp: string) => void;
function App() {
  const [actualSearch, setActualSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null);

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login;
    }
  }, [selectedUser]);

  const actualsearch: actualSearch = (temp: string) => setActualSearch(temp);
  const setselecteduser = (user: SearchUserType | null) => setSelectedUser(user);

  return (
    <div className={s.container}>
      <div>
        <TempSearch actualSearchClick={actualsearch} />
        <Users setselecteduser={setselecteduser} selectedUser={selectedUser} actualSearch={actualSearch} />
      </div>
      <UserDetails selectedUser={selectedUser} />
    </div>
  );
}

export default App;
