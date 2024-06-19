import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-3 text-lg'>
                <li><Link to ="/"> Home</Link></li>
                <li><Link to ="filmes"> Filmes </Link></li>
                <li><Link to ="sobre"> Favoritos </Link></li>
                <li><Link to ="contato"> Blogs </Link></li>
            </ul>
        </nav>
     );
}

export default Navbar ;