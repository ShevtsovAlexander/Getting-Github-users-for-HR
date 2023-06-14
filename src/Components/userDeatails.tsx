import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchUserType } from '../App.tsx';

export type SearchUserDetailsType = {
  login: string;
  id: number;
  avatar_url: string;
  location: string;
};
export const UserDetails: React.FC<{ selectedUser: SearchUserType | null }> = ({ selectedUser }) => {
  const [userDetails, setUserDetails] = useState<SearchUserDetailsType | null>(null);

  useEffect(() => {
    axios.get<SearchUserDetailsType>(`https://api.github.com/users/${selectedUser?.login}`).then((res) => {
      setUserDetails(res.data);
    });
  }, [selectedUser]);

  return (
    <div>
      <img alt={'Avatar'} src={userDetails?.avatar_url} />
      <br />
      <div>Details: {!!userDetails || 'NOT FOUND'}</div>
      <h2>{userDetails?.login}</h2>
      <h2>{userDetails?.location}</h2>
    </div>
  );
};
