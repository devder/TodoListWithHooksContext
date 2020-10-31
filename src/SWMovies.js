import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function SWMovies() {
    const [num, setNum] = useState(1),
        [movie, setMovie] = useState("")
    useEffect(() => {
        async function getData() {
            const response = await axios.get(`https://swapi.dev/api/films/${num}/`);
            // setMovie(response.data)
        }
        getData();
    }, [num]);
    return (
        <div>
            <h1>Pick a movie</h1>
            <h4> You chose {movie.title}</h4>
            <select value={num} onChange={evt => setNum(evt.target.value)}>
                <option>Movie Links</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
            </select>
        </div>
    )
}

