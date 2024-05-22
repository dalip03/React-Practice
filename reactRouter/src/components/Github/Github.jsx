import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
//  const [data, setData] = useState([])
//     useEffect(()=>{
//      fetch('https://api.github.com/users/dalip03').then(response => response.json()).then(data=>{
//         console.log(data);
//         setData(data)
//      })
//     }, [])
const data  = useLoaderData();
  return (
    <div className='m-4 bg-gray-600 text-white p-4 text-2xl'>
      Github followers : {data?.followers}
      <div>
        <img src={data?.avatar_url} alt='img' className='rounded-2xl' width={200} />
    </div>
    </div>
  
  )
}

export default Github

export const githubInfoLoader = async ()=> {
    const response = await  fetch('https://api.github.com/users/dalip03')
    return response.json()
}
