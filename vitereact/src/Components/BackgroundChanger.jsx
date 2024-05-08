import { useState } from "react";

function Background() {

    const [color ,setColor] = useState("teal");

  return (
    <div style={{backgroundColor:color}} className=" p-10 w-full h-screen duration-200">
      <h1>This is background page</h1>
     <div className="fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2">
        <div className="container p-4 rounded-2xl gap-2 flex flex-wrap justify-center ">
          <button onClick={()=>setColor("red")} className="rounded-2xl outline-none bg-red-400 px-4 py-2 hover:bg-red-300">Red</button>
          <button onClick={()=>setColor("olive")} className="rounded-2xl outline-none bg-rose-500 px-4 py-2 hover:bg-rose-300">Rose</button>
          <button onClick={()=>setColor("pink")} className="rounded-2xl outline-none bg-pink-500 px-4 py-2 hover:bg-red-300">Pink</button>
          <button onClick={()=>setColor("purple")} className="rounded-2xl outline-none bg-purple-500 px-4 py-2 hover:bg-purple-300">Purple</button>
          <button onClick={()=>setColor("green")} className="rounded-2xl outline-none bg-emerald-500 px-4 py-2 hover:bg-emerald-300">Emerald</button>
          <button onClick={()=>setColor("violet")} className="rounded-2xl outline-none bg-violet-500 px-4 py-2 hover:bg-violet-300">Violet</button>
          <button onClick={()=>setColor("indigo")} className="rounded-2xl outline-none bg-indigo-500 px-4 py-2 hover:bg-indigo-300">Indigo</button>
          <button onClick={()=>setColor("lime")} className="rounded-2xl outline-none bg-lime-500 px-4 py-2 hover:bg-lime-300">Lime</button>
          <button onClick={()=>setColor("orange")} className="rounded-2xl outline-no bg-amber-500 px-4 py-2 hover:bg-amber-300">Amber</button>
</div>
      </div>
    </div>
  );
}

export default Background;
