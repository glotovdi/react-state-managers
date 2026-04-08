import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../stores/context";
import type { RootState } from "../stores/redux";
import { increment } from "../stores/redux/slices/likes";
import { useZustandStore } from "../stores/zustand";

export function Counter() {
  const { count, setCount } = useContext(Context);

  const countRedux = useSelector((state: RootState) => state.likes.value);
  const dispatch = useDispatch();
  const { count: countZustand, increment: incrementZustand } =
    useZustandStore();

  return (
    <div className="flex gap-1 justify-center">
      <button
        className="counter font-bold"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
      <button
        className="counter font-bold"
        onClick={() => dispatch(increment())}
      >
        Count in Redux {countRedux}
      </button>
      <button className="counter font-bold" onClick={incrementZustand}>
        Count in Zustand {countZustand}
      </button>
    </div>
  );
}
