import React from 'react'

const ConfirmationModal = ({onConfirm, onCancel, message}) => {
  return (
    <div className="fixed inset-0 flex backdrop-blur-xs items-center justify-center z-40"> 
        <div className='flex flex-col gap-4 w-60 px-5 py-3 rounded-3xl bg-blue-400/60'>
            <div className='text-xl text-white'>
                {message || "This action cannot be undone"}
            </div>
            <div className='flex gap-2 justify-end'>
                <button type="button" className="w-20 h-10 bg-green-400 rounded-xl p-2 hover:bg-green-500 " onClick={onConfirm} >Confirm</button>
                <button type="button" className="w-20 h-10 bg-gray-400 rounded-xl p-2 hover:bg-gray-500" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    </div>
    
  )
}

export default ConfirmationModal