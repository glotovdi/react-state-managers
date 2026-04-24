import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { formatTime } from "../timerHelper";

export const useTimer = () => {
  const [timer, setTimer] = useState<number>(0);
  const [status, setStatus] = useState<boolean>(false);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startTimer = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => setTimer((prev) => prev + 1), 1000);

    setStatus(true);
  }, []);

  const stopTimer = useCallback(() => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setStatus(false);
  }, []);

  const resetTimer = useCallback(() => setTimer(0), []);

  const formattedTime = useMemo(() => formatTime(timer), [timer]);

  return { startTimer, stopTimer, resetTimer, formattedTime, status };
};
