"use client"

import { TCharacter } from '@/types/character'
import Image from 'next/image'
import Link from 'next/link'
import React, { use, useState } from 'react'

const Character = ({ character }: { character: TCharacter }) => {
    const fallbackSrc = '/no-image.png'
    const [imgSrc, setImgSrc] = useState(character?.images[0])
    return (
        <Link
            href={'/personaggi/' + character.id}
        >
            <div
                className='rounded-lg shadow-sm h-[310px] border-gray-200 border-[1px] cursor-pointer active:scale-[0.99]'
            >
                <Image
                    alt={'errore foto'}
                    width={'250'}
                    height={'250'}
                    src={imgSrc}
                    className='w-full h-[250px] object-cover rounded-t-lg'
                    onError={() => {
                        setImgSrc(fallbackSrc);
                    }}

                />
                <div className='flex justify-center h-[60px]'>
                    <h3 className='text-center m-auto text-lg font-bold text-slate-800'>{character.name}</h3>
                </div>

            </div>
        </Link>

    )
}

export default Character