"use client"

import React from 'react'

const loadingCharacters = () => {


    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
            {Array(6).fill(1).map((_, i) => (
                <div
                    key={i}
                    className='w-full h-[310px] rounded-lg shadow-sm  border-[1px]'
                >
                    <div className='w-full h-[250px] animate-pulse bg-gray-200 '>
                    </div>
                    <div className='flex justify-center h-[60px]'>
                        <div className='w-32 m-auto animate-pulse bg-gray-200 h-4 rounded-lg'></div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default loadingCharacters