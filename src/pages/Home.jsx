import data from '../artigo.json'

function Home() {
  console.log(data)
    return(
      <>
        <main>
          <input type="text" name="buscar" id="busca" placeholder="Digite aqui sua busca"/>
          <div className='grid grid-cols-3 gap-4'>
           
             {
              data.map((artigo, index)=>(
                <div className='card' key={index}>
                  <h2>{artigo.title}</h2>
                  <img className="mb-2 w-[300px]" src={artigo.image} alt={artigo.title} />
                <div className='tags'>
                  {artigo.tags.map((tag, index)=>(
                    <span className="bg-purple-600 p-1 m-1 rounded-lg text-white" key={index}>{tag}</span>
                  ))}
                </div>
                <div className='texto'>
                  {artigo.text.map((paragrafo, index)=>(
                  <p key={index}>{paragrafo}</p>
                  ))}
                </div>
                </div>
              ))
             }
          </div>
          
        </main>
      </>
    );
}

export default Home