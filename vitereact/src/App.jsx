import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div  className="container mx-auto p-10 border  bg-green-50 shadow-xl shadow-cyan-500/50" >
        <h1 className="font-semibold text-green-700 text-xl">React Counter </h1>
        <p className="my-2">
          A paragraph is defined as “a group of sentences or a single sentence
          that forms a unit” (Lunsford and Connors 116). Length and appearance
          do not determine whether a section in a paper is a paragraph. For
          instance, in some styles of writing, particularly journalistic styles,
          a paragraph can be just one sentence long.
        </p>
        <div className="bg-green-100 p-10 rounded-lg flex flex-row gap-1"> 
        <div className="rounded-lg bg-zinc-600 p-5 ">Hii!! React</div>
        <div className="rounded-lg bg-green-900 p-5">Hii!! React</div>

        <div className="rounded-lg bg-blue-800 p-5">Hii!! React</div>

        <div className="rounded-lg bg-yellow-500 p-5">Hii!! React</div>

        </div>
       
        <div className="text-center p-4">
        <h1 className="text-xl mb-4 font-semibold">Counter Value : <span className="font-bold text-green-950">{count}</span> </h1>
         <button onClick={() =>setCount(count +1)} className="bg-green-400 p-2 rounded-xl  cursor-pointer hover:bg-green-200 hover:text-black mr-1">Increase</button>
        <button onClick={() =>setCount(count-1)} className="bg-orange-400 p-2 rounded-xl  cursor-pointer hover:bg-orange-200 hover:text-black mr-1">Decrease</button>
        <button onClick={()=>setCount(0)} className="bg-cyan-400 p-2 rounded-xl  cursor-pointer hover:bg-cyan-200 hover:text-black">Reset to 0</button>

        </div>
       
      </div>
    </>
  );
}

export default App;
