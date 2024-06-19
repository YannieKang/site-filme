import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex justify-between bg-stone-900 text-white p-5 px-10 ">
            <span className=" font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-rose-300 to-teal-200">HiMovie</span>

            <Navbar/>
        </header>
     );
}



export default Header ;