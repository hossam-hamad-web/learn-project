import React, { useEffect, useState } from "react";

export default function () {
  // useEffect(() => {
  //   let x = setInterval(() => console.log("holla"), 1000);
  //   console.log("Component Did Mount");

  //   return () => {
  //     clearInterval(x);
  //     console.log("component will unmount");
  //   };
  // }, []);
  const [counter, setCounter] = useState(0);
  function changeCounter() {
    setCounter(Math.random());
  }
  useEffect(() => {
    if (counter == 0) return;
    console.log("Counter Updated");
  }, [counter]);
  return (
    <div>
      <h1>{counter} </h1>
      <button
        onClick={() => {
          changeCounter();
        }}
      >
        +
      </button>
    </div>
  );
}
