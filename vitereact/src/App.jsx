import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import CardProp from "./CardProp";
import Card from "./Components/Card";
import Background from "./Components/BackgroundChanger";

function App() {
  const [count, setCount] = useState(0);

  // object for card 
  let myObj={
    Name:"Dalip",
    Age:24,
    City:"Ludhiana"
  }

  //  This is a simple button that decrements the count
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="container mx-auto p-10 border  bg-green-50 shadow-xl shadow-cyan-500/50">
        <button className="bg-cyan-400 mr-1 p-2 rounded-xl  cursor-pointer hover:bg-cyan-200 hover:text-black">
          <a href="">Go to Counter</a>
        </button>
        <button className="bg-green-400 mr-1 p-2 rounded-xl  cursor-pointer hover:bg-green-200 hover:text-black">
          <a href="">Background Changer</a>
        </button>
        <img
          className="w-44 h-44 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/15031440/pexels-photo-15031440/free-photo-of-a-crowd-standing-in-front-of-the-kedarnath-temple-in-kedarnath-india-during-a-ceremony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="img"
          width="384"
          height="512"
        />
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

        <div className="container text-center p-4 bg-zinc-200 rounded mt-4 shadow-green-200/50">
          <h1 className="text-xl mb-4 font-semibold">
            Counter Value :{" "}
            <span className="font-bold text-green-950">{count}</span>{" "}
          </h1>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-400 p-2 rounded-xl  cursor-pointer hover:bg-green-200 hover:text-black mr-1 border-green-950"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="bg-orange-400 p-2 rounded-xl  cursor-pointer hover:bg-orange-200 hover:text-black mr-1"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-cyan-400 p-2 rounded-xl  cursor-pointer hover:bg-cyan-200 hover:text-black"
          >
            Reset to 0
          </button>
        </div>

        {/* Cards props start */}
        <div className="p-10 bg-blue-100 shadow-xl shadow-green-300/50 mt-4">
         <Card userName="Dalip" btnTxt="click me" />
          {/* card prop end  */}
        </div>
      </div>
      <div>
        <Counter />
      </div>
      <div className="p-6 container mx-auto mt-10 bg-teal-100 shadow-xl shadow-fuchsia-400/100 mb-10">
        <Background color="red"/>
      </div>
    </>
  );
}

export default App;
