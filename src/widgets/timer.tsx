import { memo } from "react";
import { useTimer } from "../shared/hooks/useTimer";

export const Timer = memo(() => {
  const { formattedTime, status, resetTimer, startTimer, stopTimer } =
    useTimer();

  return (
    <>
      <div>{formattedTime}</div>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resetTimer}>reset</button>
      {status ? "Таймер запущен" : "Таймер остановлен"}
    </>
  );
});
