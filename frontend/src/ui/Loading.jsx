import React from 'react'


const Loading = () => {

  return (
    <div className='fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50'>
        <div className='w-25 h-25 border rounded-full spinner border-t-violet-800'> 
            
        </div>
    </div>
  )
}

export default Loading