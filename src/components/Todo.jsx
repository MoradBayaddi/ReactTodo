import React, { useState } from 'react';
import { RiDeleteBin6Line, RiPencilLine } from 'react-icons/ri';
import { MdOutlineDeleteOutline } from 'react-icons/md';

const Todo = ({ task, deleteTodo,editTodo  }) => {
  const [isTextStriked, setIsTextStriked] = useState(false);

  const handleTextClick = () => {
    setIsTextStriked(!isTextStriked);
  };

  return (
    <div className=' flex flex-row '>
      
      <div 
      className={isTextStriked ? ' w-full py-3 px-3 cursor-pointer line-through' : 'w-full py-3 px-3 cursor-pointer font-bold'}
      onClick={handleTextClick} >
        {task.task}
        {/* <p
         className='py-3 px-3'
          
        >
          
        </p> */}
      </div>
      <div className='flex flex-row'>
        <MdOutlineDeleteOutline 
         onClick={()=> deleteTodo(task.id)}
        size={35} className="cursor-pointer mx-2 text-[#ffc300] hover:text-[#ae2012] transition-[0.3s]" />

        <RiPencilLine 
        onClick={()=> editTodo(task.id)}
        
        size={35} className="cursor-pointer mx-2 text-[#ffc300] hover:text-[#003566] transition-[0.3s]" />
      </div>
    </div>
  );
};

export default Todo;
