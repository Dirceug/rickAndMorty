import {useEffect, useState} from 'react'
import axios from 'axios'

export default funcftion Characteres() {
  useEffect(() => {
    const [characters, serCharaters] = useState([])

    const fetchData = async() => {
      try {
        const { data } = await axios.get(url:`https://rickandmortyapi.com/api/character/`)
        setCharacters = (data.results)

      } catch (eror){
        console.error(error)
      }
    }

    fetchData()

  }, [])

  return (
    <div>
      <div>
      {characteres.map(character => {
        <div>
          <img src={character.image} alt={character.name} />
          {character.name}
        </div>
      })}
      </div>
    </div>
  )

}