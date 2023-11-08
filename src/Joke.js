import React from 'react'
import Button from './Button'
const Joke = () => {
    const [joke,setJoke]=React.useState("")

    const fetchApi = () =>{
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res)=>res.json())
        .then((data)=>setJoke(data.joke))
    }
  return (
    <div>
      <div className='joke'>
        <Button callAPI={fetchApi} />
        <p>{joke}</p>
      </div>
    </div>
  )
}

export default Joke
