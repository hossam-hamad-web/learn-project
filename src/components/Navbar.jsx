import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CounterContext } from "../Context/CounterContext";
export default function Navbar() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <>
      <h1>{counter}</h1>
      <Link to="/gallery">Gallery</Link>
      <Link to="/mobile">mobile</Link>
      <Link to="/gallery">Gallery</Link>
      <button onClick={() => setCounter(counter + 1)}>counter++</button>
    </>
  );
}
