import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { Counter } from "./components/counter";
import { Users } from "./components/users";
import { Context } from "./stores/context";
import { store } from "./stores/redux";
import { queryClient } from "./stores/rq";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Context.Provider value={{ count, setCount }}>
          <section id="center">
            <div className="hero">
              <img
                src={heroImg}
                className="base"
                width="170"
                height="179"
                alt=""
              />
              <img src={reactLogo} className="framework" alt="React logo" />
              <img src={viteLogo} className="vite" alt="Vite logo" />
            </div>
            <div>
              <h1>Get started</h1>
              <p>
                Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
              </p>
            </div>
          </section>

          <div className="ticks">
            <Counter />
            <Users />
          </div>

          <div className="ticks"></div>
          <section id="spacer"></section>
        </Context.Provider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
