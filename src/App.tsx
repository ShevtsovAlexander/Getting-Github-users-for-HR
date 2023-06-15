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

function App() {
  const [actualSearch, setActualSearch] = useState('alexander-shevtsov');
  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null);

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login;
    }
  }, [selectedUser]);

  return (
    <div className={s.container}>
      <div>
        <TempSearch actualSearchClick={setActualSearch} value={actualSearch} />
        <button onClick={() => setActualSearch('alexander-shevtsov')}>Reset</button>
        <Users setselecteduser={setSelectedUser} selectedUser={selectedUser} actualSearch={actualSearch} />
      </div>
      <UserDetails selectedUser={selectedUser} />
    </div>
  );
}

export default App;
