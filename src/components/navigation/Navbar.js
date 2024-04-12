import {connect} from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import logoBrand from 'assets/images/brandLogo/a.jpg'
// import loadingGif from 'assets/images/gifs/loading.gif'
import PuffLoader from 'react-spinners/PuffLoader'
import {useState} from 'react'

const Navbar = () => {
    const [loading, SetLoading] = useState(true)

    window.onscroll = function () {scrollFunct()}
    const scrollFunct = () =>{
        if(document.getElementById('navbar')){
            if(document.body.scrollTop >50 || document.documentElement.scrollTop > 50){
                document.getElementById('navbar').classList.add('shadow-navbar', 'bg-white')
            }
            else{
                document.getElementById('navbar').classList.remove('shadow-navbar', 'bg-white')
            }
        }
    }

    return ( 
        <nav id="navbar" className='w-full py-1 top-0 z-40 transition duration:200 ease-in-out fixed'>
            <div className= "px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-6 px-2">
                    <Link to= '/' className="ml-4 mt-2">
                        <img src={logoBrand} width={80} height={80} alt="brandLogo"/>
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/cases/' 
                    className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">
                        Cases
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200left-0 bottom-0 "></span>
                    </NavLink>
        
                    <NavLink to='/services/' className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Services
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200left-0 bottom-0 group"></span>
                    </NavLink>
                    <NavLink to='/about/' className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">About
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200left-0 bottom-0 "></span>
                    </NavLink>
                    <NavLink to='/careers/' className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Careers
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200left-0 bottom-0 "></span>
                    </NavLink>
                    {/* <NavLink to='/blog/' className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Blog
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200left-0 bottom-0 "></span>
                    </NavLink> */}
                    <NavLink to='/contact/' className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Contact
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200left-0 bottom-0 "></span>
                    </NavLink>
                    <Link
                        to="/contact/"
                        className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-myRed px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-black transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Hire us
                        {/* <img className='h-2 ml-2 mt-0.5' src={loadingGif} alt='loading gif'/> */}
                        <PuffLoader className='ml-2 mt-0.5' loading={loading} size={20} color='#ffffff'/>
                    </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {

}) (Navbar);