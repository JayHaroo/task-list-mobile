import { useState } from "react";
import "./App.css";
import Tasklist from "./component/tasklist";

function App() {
  return (
    <>
      <body className="min-h-screen bg-black">
        <div className="text-white text-3xl font-bold flex justify-center pt-[1rem]">The Task List</div>
        <Tasklist />
      </body>
    </>
  );
}

export default App;
