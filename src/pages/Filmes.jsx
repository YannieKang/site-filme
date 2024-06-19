import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function Filmes() {
 
    const [filmes, setFilmes] = useState([])

    const apiKey= 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect(() => {

    fetch(`${urlBase}popular?${apiKey}`)
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch(error => console.log(error))

    },[])

    return ( 
        <>
        <h1>Filmes</h1>
        <div className="listaFilmes flex flex-row gap-3">
        {
                filmes.map(filme => (
                    <>
                    {/* <div className="card-filme" key={filme.id}>
                    <img className="w-auto" src={`${urlImg}${filme.poster_path}`}/>
                    <h1>{filme.title}</h1>
                    <Link to={`${filme.id}`} className="bg-blue-500">Saber Mais</Link>
                    </div> */}

                    <div class="inline-block px-3">
          <img className='absolute w- h-full p-5' src={`${urlImg}${filme.poster_path}`} alt="" />
            <div
              class="w-56 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-stone-900 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
            </div>
            
          </div>
                    </>
                    
                )
            )
        }
        </div>
        </> 
    )
}


export default Filmes ;

