"use client"
import React, { useState } from 'react'

const Main = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [stats, setstats] = useState("")
  const [renderTask, setrenderTask] = useState([])

  function submitHandler() {
    if (title === "" && desc === "") {
      setstats(<h1 className='text-red-700'>Fields cannot be empty</h1>)
      setTimeout(() => {
        setstats("")
      }, 1000)
    }
      else if(title.length>10){
        setstats(<h1 className='text-red-700'>Title length must be below 10 characters</h1>)
        setTimeout(() => {
          setstats("")
        }, 1500)
      }
    else {
      const task = { title, desc }
      setrenderTask([...renderTask, task])
      settitle("")
      setdesc("")
    }
  }

  function renderTasks() {
    if (renderTask.length === 0) {
      return <h3 className="text-white">No Tasks Available</h3>
    }

    return renderTask.map((t, index) => (
      <div
        key={index}
        className="bg-white rounded flex flex-col justify-between p-3 mb-3"
      >
        <div className="font-bold uppercase flex justify-between items-center">
          <h1>{t.title}</h1>
          <input type='checkbox' className='accent-green-600' />
        </div>
        <div className="flex justify-between items-end mt-2 gap-2">
          <h3 className="w-4/5 break-words">{t.desc}</h3>
          <button className="bg-red-600 cursor-pointer border-2 text-white px-2 py-1 text-sm font-medium rounded hover:bg-red-500 transition-all"
            onClick={() => {
              deleteHandler(index);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ))
  }

  function deleteHandler(index) {
    const updatedTask = [...renderTask]
    updatedTask.splice(index, 1)
    setrenderTask(updatedTask)
  }

  return (
    <div className='flex flex-col md:flex-row h-full pb-14 px-4 gap-4'>
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
        <input className='w-full md:w-4/5 border-2 p-2 bg-black text-white outline-none rounded-tl-md rounded-br-md mb-4' 
          type='text' 
          placeholder='Enter Title'
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <textarea className='w-full md:w-4/5 border-2 resize-none p-2 bg-black text-white outline-none rounded-tl-md rounded-br-md mb-4' 
          rows={4} 
          placeholder='Enter Description'
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button onClick={submitHandler}
          className='border-2 cursor-pointer px-4 py-1 rounded font-medium hover:bg-black hover:text-white transition-all duration-100'>
          Add Task
        </button>
        <div className="mt-6">{stats}</div>
      </div>

      <div className='bg-slate-900 w-full md:w-1/2 p-4 overflow-auto rounded-md max-h-[70vh] mt-10'>
        {renderTasks()}
      </div>
    </div>
  )
}

export default Main
