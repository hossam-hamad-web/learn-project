import { createContext, useState } from "react";

export let CounterContext = createContext(0);

function CounterContextProvider(props) {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {
        props.childern /*props.childern this is my App -> children this our Comonent like Mboile or any Component */
      }
    </CounterContext.Provider>
  );
}
