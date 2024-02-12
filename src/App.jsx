import React from 'react'
import Wrapper from './components/Wrapper'
const App = () => {
  return (
    <div className='bg-[#000814] text-[#ffc300] py-10 px-5 lg:px-0  h-[100vh]'>

      <h1 className="text-3xl overflow-hidden	 mx-20 text-center  xl:text-left xl:font-bold ">
        YAMI
      </h1>
      
      <div className=' flex justify-center h-auto  w-full  '>
    
        <Wrapper/>
    
       </div>
    </div>
    
  )
}

export default App