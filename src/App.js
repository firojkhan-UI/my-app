import React, { useContext, useMemo, useState } from "react";
import "./App.css";
import Uncontrolled from "./Components/UncontrolledComponent";
import MyForm from "./Components/MyForm";
import IncComponent from "./Components/Hooks";
import TabComponent from "./Components/TabComponent";
import SearchItem from "./Components/SearchItem";
import ChessBoard from "./Components/ChessBoard";

const obj = { name: "abcd", add: "Bengalore" };

const App = () => {
  const [count, setCount] = useState(0);
  const Greet = useMemo(() => {
    return <h1>App1: {count}</h1>;
  });
  return (
    <>
      <TabComponent />
      {/* <ChessBoard /> */}
      {/* <SearchItem /> */}
    </>
  );
};
export default App;
