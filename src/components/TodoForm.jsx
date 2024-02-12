import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setValue]=useState("")

    const handleSubmit = e => {
        e.preventDefault();
        
        addTodo(value)
        setValue("")
    }
  return (
    <div className='flex justify-center w-full   py-3 px-3 lg:bg-[#001d3d]'>
        <form onSubmit={handleSubmit}>
            <input
            value={value} onChange={(e) => setValue(e.target.value)}
            className='placeholder:text-[#f1f2f6] text-[#ffd60a] 
            outline-none border-none focus:shadow-xl
            rounded-lg py-2 px-2 mx-5 my-5 bg-[#003566]' 
            type="text" placeholder='Write some tasks'
            required
            />

            <button type='submit' className='rounded-lg py-2 px-5 text-[#001d3d] hover:shadow-xl hover:bg-[#f1f2f6] font-bold transitions-[0.3s] bg-[#ffd60a]'>add</button>
        </form>
    </div>
  )
}

export default TodoForm