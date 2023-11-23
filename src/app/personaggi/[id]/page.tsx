import { TCharacter } from '@/types/character';
import Image from 'next/image';
import React from 'react'

const getCharacter = async (id: string): Promise<TCharacter | false> => {
    const URL = 'https://narutodb.xyz/api/character/'
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 2000);
    })

    const res = await fetch(URL + id,
        { cache: 'no-store' }
    )

    if (!res.ok) return false
    const data = await res.json()
    return data

}

const page = async ({ params }: { params: Record<string, string> }) => {

    const { id } = params;

    if (!id) {
        return (
            <div>nessun id inserito</div>
        )
    }

    const character = await getCharacter(id)

    if (!character) {
        return (
            <div>nessun personaggio trovato con id: {id}</div>
        )
    }
    console.log(character);

    return (
        <div
            className='w-3/4 lg:w-1/2 m-auto grid gap-5'
        >
            <Image
                alt={'errore foto'}
                width={'600'}
                height={'600'}
                className='w-full h-[300px] rounded-lg'
                src={character.images[0]}
            />
            <h3 className='text-center text-xl font-bold text-slate-800'>{character.name}</h3>
            {character.jutsu ? (
                <div>
                    <h4 className='text-lg font-bold text-slate-800'>Jutsu</h4>
                    <ul>
                        {character.jutsu.map((element) => (
                            <li>{element}</li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    )
}

export default page