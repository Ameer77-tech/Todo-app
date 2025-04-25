"use client"
import React, { useState } from 'react'

const Main = () => {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [stats, setstats] = useState("")
  
    const [temp, settemp] = useState([])
    const [renderTask, setrenderTask] = useState([])
    let taskslist="";
   

    function submitHandler(){
      if(title==="" && desc===""){
        setstats(<h1 className='text-red-700 '>Fields cannot be empty</h1>)
      
          setTimeout(()=>{
          setstats("")
        },1000)
      }

      else{
        const task={title,desc}
        
        setrenderTask([...renderTask,task])
        settitle("")
        setdesc("")
    
    }
  }
 
    
    function renderTasks() {
        if (renderTask.length === 0) {
          return <h3 className="text-white">No Tasks Available</h3>;
        }
    
        return renderTask.map((t, index) => (
          <div
            key={index}
            className="bg-white h-auto rounded flex flex-col justify-between p-3 mb-3 "
          >
            <div className="font-bold uppercase flex justify-between">
              <h1>{t.title}</h1>
              <input type='checkbox' className='accent-green-600'></input>
            </div>
            <div className="flex justify-between items-end">
              <h3 className="w-4/5">{t.desc}</h3>
              <button className="bg-red-600 cursor-pointer border-2 text-white px-1 py-1 text-sm font-medium rounded hover:bg-red-500 ease-linear transition-all"
              onClick={()=>{
                deleteHandler(index);
              }}
              >
                Delete
              </button>
            </div>
            
          </div>
          
        ));
       
      
    }
    console.log(renderTask)
    

    function deleteHandler(index){
     const updatedTask=[...renderTask]
     updatedTask.splice(index,1)
      setrenderTask(updatedTask)
    }
    function completedTask(index){

    
    }
        
    
   
  return (
    <div className='flex' style={{height:`calc(100% - 7.4rem)`}}>
        <div className=' h-full w-2/4 flex flex-col justify-center items-center flex-wrap '>
            <input className='w-md h-auto border-2 pr-3 pl-3 p-2 bg-black outline-none text-white rounded-tl-md rounded-br-md' type='text' placeholder='Enter Title'
            value={title} onChange={(e)=>{
                settitle(e.target.value)

            }}
            /><br></br>
            <textarea className='w-md h-auto border-2 resize-none pr-3 pl-3 p-2 bg-black outline-none text-white rounded-tl-md rounded-br-md' rows={4} cols={23}  placeholder='Enter Description'
            value={desc} onChange={(e)=>{
                setdesc(e.target.value)
            }}
            ></textarea><br></br>
            
            <button onClick={()=>{
                submitHandler()
            }} className='border-2 cursor-pointer pr-3 pl-3 p-1 rounded font-medium hover:bg-black hover:text-white transition-all duration-100 ease-linear' >
                Add Task</button>
            <div className="transition-all ease-linear mt-10 h-1 "
              
             >{stats}</div>
        </div>
        <div className='bg-slate-900 h-full w-2/4 p-5 overflow-scroll'>
       
         {renderTasks()}
            
        
        </div>
    </div>
  );
}


export default Main