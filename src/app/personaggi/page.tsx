import React, { Suspense } from 'react'
import Characters from '../../components/templates/Characters'
import LoadingCharacters from './loadingCharacters'



const page = () => {
    return (
        <>
            <h1 className='text-center m-10 text-3xl font-bold'>Personaggi</h1>
            <Suspense fallback={<LoadingCharacters />}>
                <Characters />
            </Suspense>
        </>

    )
}

export default page