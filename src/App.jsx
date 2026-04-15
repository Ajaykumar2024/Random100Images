 import React from 'react'
 import axios from "axios";
import { useState } from 'react';
 
 
 const App = () => {

  const [data, setdata]=useState([])
    const getData= async()=>{
      const res =await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
      setdata(res.data)
      
    }
   return (
    <div className=' p-10'>
       <button className='p-5 bg-gray-400' onClick={getData}>Click to get 100 Random images </button>

       <div className='flex flex-wrap gap-7 mt-5  '>
       {data.map((ele,idx)=>{
        return <div key={idx} className='h-60 w-64 border-2 rounded-2xl  overflow-hidden '> 
          <img  className='h-full w-full object-cover rounded  hover:scale-105' src={ele.download_url} alt="" />
        </div>

       })}
     </div>
    </div>
   )
 }
 
 export default App
 