import data from '../artigo.json'
import { useEffect, useState } from "react";



function Home() {
  console.log(data)
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
    return(

      
      <>
        <main className='bg-stone-700'>
          <input type="text" name="buscar" id="busca" className="bg-stone-700 w-full h-11 p-6 text-stone-400 text-base italic" placeholder="Pesquisar por um filme, uma série televisiva"/>
          <div className='size-full relative '>
              <img src="cinema.png" alt="#" />
              <div className='absolute top-20 p-11 text-white font-bold text-3xl'>
                <p>Bem-vindo a <span className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-rose-300 to-teal-200">HiMovie</span></p>
               <p>Milhões de filmes, séries e pessoas para descobrir. Explora já.</p>
               </div>
               </div>

               <p className='text-white font-extrabold text-3xl pt-10 pl-8'>Mais Populares</p>
               <div className="listaFilmes flex flex-row overflow-x-scroll   pt-7 hide-scroll-bar relative ">
               {
                filmes.map(filme => (
                    <>
                <div className="inline-block px-3 ">
                  <img className='absolute w-1/6 h-64 pl-5  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                    <div className="w-56 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-stone-900 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                      <h1 className="relative font-bold text-center text-white pt-64 ">{filme.title}</h1>
                    </div>
                </div>
                    </>
                    
                        )
                    )
                }
                
      
          
        </div>  
        </main>
      </>
    );
}


export default Home


