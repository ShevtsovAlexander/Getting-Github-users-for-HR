import { useEffect, useState } from 'react';

export type ActualSearchType = (temp: string) => void;
export const TempSearch = ({ actualSearchClick, value }: { actualSearchClick: ActualSearchType; value: string }) => {
  const [tempSearch, setTempSearch] = useState(value);

  useEffect(() => {
    setTempSearch(value);
  }, [value]);
  return (
    <>
      <input placeholder="search" value={tempSearch} onChange={(e) => setTempSearch(e.currentTarget.value)} />
      <button onClick={() => actualSearchClick(tempSearch)}>Find</button>
    </>
  );
};
