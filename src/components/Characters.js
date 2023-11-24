import React from 'react'

export default function Characters(props) {
    const {characters, setCharacters} = props 
    const resetCharacters = () =>{
        console.log("Resetendo....");
        setCharacters(null);
    }

  return (
    <div className='characters'>
        <h1>Personajes</h1>
        <span className='back-home' onClick={resetCharacters}>Volve al inicio</span>
        <div className='container-characters'>
            {characters.map((character, index) => (
                <div className='character-container' key={index}>
                    <div>
                        <img src={character.image} alt={character.name}/>
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === "Alive" ? (
                                <>
                                    <span className='alive'/>
                                    Alive
                                </>
                                ):(
                                <>
                                <span className='dead'/>
                                Dead
                                </>
                            )}
                        </h6>
                        <p >
                            <span className='text-grey'>Episodios: </span>
                            <span className='textP'>{character.episode.length}</span>
                        </p>
                        <span className='text-grey'>Especie: </span>
                        <span className='textP'>{character.species}</span>
                    </div>
                </div>
            )
            )}
        </div>
        <span className='back-home' onClick={resetCharacters}>Volver al inicio</span>
    </div>
  )
}
