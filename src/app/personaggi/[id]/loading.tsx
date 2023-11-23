import React from 'react'

const loading = () => {
    return (
        <div
            className='w-1/2 m-auto grid gap-5'>
            <div
                className='h-[300px] rounded-lg shadow-sm  border-[1px] animate-pulse bg-gray-200'
            ></div>
            <div
                className='h-[30px] w-1/2 m-auto rounded-lg shadow-sm  border-[1px] animate-pulse bg-gray-200'
            ></div>
        </div>
    )
}

export default loading