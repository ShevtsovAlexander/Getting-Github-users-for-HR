import { useEffect, useState } from 'react';

export const Timer = ({
  seconds,
  setSeconds,
  timerKey,
}: {
  seconds: number;
  setSeconds: (seconds: number) => void;
  timerKey: number;
}) => {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    setCount(seconds);
  }, [seconds]);
  useEffect(() => {
    setSeconds(count);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => setCount((count) => count - 1), 1000);
    return () => clearInterval(interval);
  }, [timerKey]);

  return <div>{count}</div>;
};
