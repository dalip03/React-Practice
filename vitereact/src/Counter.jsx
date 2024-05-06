import { useState } from "react";



function Counter(){

    let [count, setCount] = useState(0);

    const  increament= () =>{
        setCount(count+1)
    }

        const decreament = ()=>{
            if(count > 0){
             setCount(count-1)
        }
    }

    return(
        <div className="container mx-auto p-4 bg-cyan-50 mt-4 shadow-xl shadow-green-400/50"> 
        <div className="container text-center p-4 bg-gray-400-200 rounded mt-4 shadow-green-200/50">
        <h1 className="mb-4">Using ReactHook useState</h1>
        <h1 className="text-xl mb-4 font-semibold">Counter Value : <span className="font-bold text-green-950">{count}</span> </h1>
         <button onClick={increament}  className="bg-green-400 p-2 rounded-xl  cursor-pointer hover:bg-green-200 hover:text-black mr-1 border-green-950">Increment</button>
        <button onClick={decreament} className="bg-orange-400 p-2 rounded-xl  cursor-pointer hover:bg-orange-200 hover:text-black mr-1">Decrement</button>
        <button onClick={()=>setCount(0)} className="bg-cyan-400 p-2 rounded-xl  cursor-pointer hover:bg-cyan-200 hover:text-black">Reset</button>
        </div>
        </div>
    )
}
export default Counter