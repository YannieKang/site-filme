import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PaginaFilmes(){

    const {id} = useParams();
    const [filmes, setFilmes] = useState([])


    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const apiKey= 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlImg = 'https://image.tmdb.org/t/p/w1280/'
    
    useEffect( () => {

        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilmes(response))
        .catch(error => console.log(error))
    
    },[])

    return( 
        <>
        <main className='bg-stone-700'>
        <input type="text" name="buscar" id="busca" className="bg-stone-700 w-full h-11 p-5 text-stone-400 text-base italic" placeholder="Pesquisar por um filme, uma série televisiva"/>
    
        <img  src={`${urlImg}${filmes.backdrop_path}`}/>
        
        <h1 className="text-white text-lg pt-5 pl-5"> {filmes.title}</h1>
        <p className="text-white text-sm pt-3 pl-5">{filmes.overview}</p>

        
        </main>
        </>

    );
}

export default PaginaFilmes