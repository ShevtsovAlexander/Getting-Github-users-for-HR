import { MouseEventHandler, useState } from 'react';

export type ActualSearchType = (temp: string) => MouseEventHandler<HTMLButtonElement> | undefined;
export const TempSearch = ({ actualSearchClick }: { actualSearchClick: ActualSearchType }) => {
  const [tempSearch, setTempSearch] = useState('kamasutra');
  return (
    <>
      <input placeholder="search" value={tempSearch} onChange={(e) => setTempSearch(e.currentTarget.value)} />
      <button onClick={actualSearchClick(tempSearch)}>Find</button>
    </>
  );
};
