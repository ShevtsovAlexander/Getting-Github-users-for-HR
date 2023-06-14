import { MouseEventHandler, useEffect, useState } from 'react';
import s from '../App.module.css';
import { SearchUserType } from '../App.tsx';
import axios from 'axios';

export type SearchResult = {
  items: SearchUserType[];
};

export type UsersType = {
  selectedUser: SearchUserType | null;
  setselecteduser: (user: SearchUserType | null) => MouseEventHandler<HTMLButtonElement> | undefined;
  actualSearch: string;
};
export const Users = ({ selectedUser, setselecteduser, actualSearch }: UsersType) => {
  const [users, setUsers] = useState<SearchUserType[]>([]);

  useEffect(() => {
    axios.get<SearchResult>(`https://api.github.com/search/users?q=${actualSearch}`).then((res) => {
      setUsers(res.data.items);
    });
  }, [actualSearch]);
  return (
    <>
      <ul>
        {users.map((u) => (
          <li
            key={u.id}
            className={u === selectedUser ? s.selected : ''}
            onClick={() => {
              setselecteduser(u);
            }}
          >
            {u.login}
          </li>
        ))}
      </ul>
    </>
  );
};
