import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import ruRU from "antd/locale/ru_RU";
import "./App.scss";
import { CustomRoutes } from "./app/route/route";

function App() {
  // const [count, setCount] = useState(0);

  // redux
  // view -> action -> dispatch -> reducer -> state -> view ->  action -> dispatch -> reducer -> state

  // context
  //

  // useState + zustand + react query FOR SMALL PROJECTS
  // useState + redux + redux toolkit query

  // const foo = "bar";

  return (
    // <Provider store={store}>
    //   <QueryClientProvider client={queryClient}>
    //     <Context.Provider value={{ count, setCount, foo }}>
    //       <section id="center">
    //         <div className="hero">
    //           <img
    //             src={heroImg}
    //             className="base"
    //             width="170"
    //             height="179"
    //             alt=""
    //           />
    //           <img src={reactLogo} className="framework" alt="React logo" />
    //           <img src={viteLogo} className="vite" alt="Vite logo" />
    //         </div>
    //         <div>
    //           <h1>Get started</h1>
    //           <p>
    //             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
    //           </p>
    //         </div>
    //       </section>

    //       <div className="ticks">
    //         <Counter />
    //         <Users />
    //       </div>

    //       <div className="ticks"></div>
    //       <section id="spacer"></section>
    //     </Context.Provider>
    //   </QueryClientProvider>
    // </Provider>

    <ConfigProvider locale={ruRU}>
      <CustomRoutes />
    </ConfigProvider>
  );
}
export default App;
