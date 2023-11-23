import { TCharacter } from '@/types/character'
import React from 'react'
import Character from '../molecules/Character';

const getCharacters = async (): Promise<TCharacter[] | false> => {

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 0);
    })

    const res = await fetch('https://narutodb.xyz/api/akatsuki?page=1&limit=100',
        { cache: 'no-store' }
    )

    if (!res.ok) return false
    const data = await res.json()
    return data.akatsuki

}


const Characters = async () => {
    const characters = await getCharacters()
    if (!characters) return (
        <div>
            errore durante la ricerca
        </div>
    )
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {characters.map(character => (
                <Character key={character.id} character={character} />
            ))}
        </div>
    )
}

export default Characters