import React, {useState} from 'react'

const EditTodo = ({editTodo , task}) => {
    const [value,setValue]=useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        
        editTodo(value, task.id)
        
    }
  return (
    <div className='flex justify-start w-full   py-3 px-3 lg:bg-[#001d3d]'>
        <form onSubmit={handleSubmit}>
            <input
            value={value} onChange={(e) => setValue(e.target.value)}
            className='placeholder:text-[#f1f2f6] text-[#ff8600] 
            outline-none border-none focus:shadow-xl
            rounded-lg py-2  mx-5 bg-[#003566]' 
            type="text" placeholder='Edit your todo'
            required
            />

            <button type='submit' className='rounded-lg mt-2 py-2 px-3 text-[#001d3d] hover:shadow-xl hover:bg-[#f1f2f6] font-bold transitions-[0.3s] bg-[#ffd60a]'>Update</button>
        </form>
    </div>
  )
}

export default EditTodo