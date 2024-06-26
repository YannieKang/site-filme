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

    return(
      
      
        <>
        <main className='bg-stone-700'>
        <input type="text" name="buscar" id="busca" className="bg-stone-700 w-full h-11 p-5 text-stone-400 text-base italic" placeholder="Pesquisar por um filme, uma série televisiva"/>

        <p className='text-white font-extrabold text-3xl pl-8 p-3'>Terror</p>
        <div className="listaFilmes flex flex-row gap-3 overflow-x-scroll hide-scroll-bar relative"> 
        <div className="listaFilmes flex flex-row flex-wrap  pt-5  "></div>
            {
                filmes.map(
                    filme => (
                        <div className="card-filme" key={filme.id}>
                          
                            <div className="inline-block pl-5 pb-5">
                    <img className='absolute w-1/6 h-64 pl-5  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                      <div className="w-56 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-stone-900 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h1 className="relative font-bold text-center text-white text-sm pt-64 p-5 ">{filme.title}</h1>
                        
                      </div>
                      <div className="text-sm pl-20 pt-3">
                            <Link to={`${filme.id}`} className="bg-white pr-2 pl-2 pt-1 pb-1 rounded-xl ">Saiba Mais</Link>
                            </div>
                  </div>
                        </div>
            
                    )
                )
            }
           
        </div>

        <p className='text-white font-extrabold text-3xl pl-8 p-3 pt-5'>Comédia</p>
        <div className="listaFilmes flex flex-row gap-3 overflow-x-scroll hide-scroll-bar relative"> 
        <div className="listaFilmes flex flex-row flex-wrap  pt-5  "></div>
            {
                filmes.map(
                    filme => (
                        <div className="card-filme" key={filme.id}>
                          
                            <div className="inline-block pl-5 pb-5">
                    <img className='absolute w-1/6 h-64 pl-5  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                      <div className="w-56 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-stone-900 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h1 className="relative font-bold text-center text-white text-sm pt-64 p-5 ">{filme.title}</h1>
                        
                      </div>
                      <div className="text-sm pl-20 pt-3">
                            <Link to={`${filme.id}`} className="bg-white pr-2 pl-2 pt-1 pb-1 rounded-xl ">Saiba Mais</Link>
                            </div>
                  </div>
                        </div>
            
                    )
                )
            }
           
        </div>
          
        <p className='text-white font-extrabold text-3xl pt-5 pl-8 p-3'>Ficção Científica</p>
        <div className="listaFilmes flex flex-row gap-3 overflow-x-scroll hide-scroll-bar relative"> 
        <div className="listaFilmes flex flex-row flex-wrap  pt-5  "></div>
            {
                filmes.map(
                    filme => (
                        <div className="card-filme" key={filme.id}>
                          
                            <div className="inline-block pl-5 pb-5">
                    <img className='absolute w-1/6 h-64 pl-5  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                      <div className="w-56 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-stone-900 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h1 className="relative font-bold text-center text-white text-sm pt-64 p-5 ">{filme.title}</h1>
                        
                      </div>
                      <div className="text-sm pl-20 pt-3">
                            <Link to={`${filme.id}`} className="bg-white pr-2 pl-2 pt-1 pb-1 rounded-xl ">Saiba Mais</Link>
                            </div>
                  </div>
                        </div>
            
                    )
                )
            }
           
        </div>
        <p className='text-white font-extrabold text-3xl pl-8 p-3 pt-5'>Comédia</p>
        <div className="listaFilmes flex flex-row gap-3 overflow-x-scroll hide-scroll-bar relative"> 
        <div className="listaFilmes flex flex-row flex-wrap  pt-5  "></div>
            {
                filmes.map(
                    filme => (
                        <div className="card-filme" key={filme.id}>
                          
                            <div className="inline-block pl-5 pb-5">
                    <img className='absolute w-1/6 h-64 pl-5  pt-5' src={`${urlImg}${filme.poster_path}`} alt="" />
                      <div className="w-56 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-stone-900 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h1 className="relative font-bold text-center text-white text-sm pt-64 p-5 ">{filme.title}</h1>
                        
                      </div>
                      <div className="text-sm pl-20 pt-3">
                            <Link to={`${filme.id}`} className="bg-white pr-2 pl-2 pt-1 pb-1 rounded-xl ">Saiba Mais</Link>
                            </div>
                  </div>
                        </div>
            
                    )
                )
            }
           
        </div>
      
                 
                 
                 

                
             
          </main>
          <footer className="flex flex-col items-center text-center bg-stone-900">

    <div className="mb-6 pt-5">
    <span className=" font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-rose-300 to-teal-200">HiMovie</span>
    <div className="text-white pt-3 text-xs">
      <p>
      Lorem ipsum dolor sit amet consectetur. Id in orci euismod est faucibus et orci eu purus.</p>
      <p>Faucibus pellentesque aliquam nunc sed aliquet. Lacus rhoncus in dis nisl et a egestas adipiscing ipsum.</p>
      </div>
        
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 text-white font-semibold text-sm">
        <a href=""><h5>HOME</h5></a>
        <a href=""><h5>FILMES</h5></a>
        <a href=""><h5>FAVORITOS</h5></a>
        <a href=""><h5>BLOG</h5></a>
    </div>

  <div className="container px-6 pt-8 ">
    
    <div className="flex justify-center space-x-2 ">
    <span className="pt-2 text-white font-semibold pr-2">Nos siga</span>
      <a
        href="#!"
        type="button"
        className="rounded-full bg-white p-3"
        >
        <span className="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 320 512">
           
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </span>
      </a>

      <a
        href="#!"
        type="button"
        className="rounded-full bg-white p-3">
        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 488 512">
            
            <path
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </span>
      </a>

      <a
        href="#!"
        type="button"
        className="rounded-full bg-white p-3"
        >
        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
            
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </span>
      </a>


      <a
        href="#!"
        type="button"
        className="rounded-full bg-white p-3"
        >
        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 496 512">
           
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </span>
      </a>
    </div>

    
  
    
  </div>

  
  <div className="w-full bg-black/5 p-4 text-center">
    <p className="text-white font-semibold text-xs">2024 HIMOVIE</p>
    <div className="text-stone-600 text-xs">
    <p>Texto genérico de rodapé com muitas informações importantes e técnicas que eu não</p> <p>faço ideia do que significam e pra que servem, mas tem em todo site então provavelmente</p><p> tinha que ter aqui também.</p>
    </div>
  </div>
</footer>
        </>
      );
}


export default Filmes ;

/* <div className="card-filme" key={filme.id}>
                    <img className="w-auto" src={`${urlImg}${filme.poster_path}`}/>
                    <h1>{filme.title}</h1>
                    <Link to={`${filme.id}`} className="bg-blue-500">Saber Mais</Link>
                    </div> */