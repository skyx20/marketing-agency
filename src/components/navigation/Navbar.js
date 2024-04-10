import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';
import logoBrand from 'assets/images/brandLogo/a.jpg'
import loadingGif from 'assets/images/gifs/loading.gif'
const Navbar = () => {
    return ( 
        <nav className='w-full py-1 top-0 fixed'>
            <div className="bg-white px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-6 px-2">
                    <div className="ml-4 mt-2">
                        <img src={logoBrand} width={80} height={80} alt="brandLogo"/>

                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/cases/' 
                    activeClassName="
                    underline underline-offset-1
                    
                    "
                    className="
                    hover:before:scale-x-100 
                    hover:before:origin-left 
                    relative 
                    before:w-full 
                    before:h-0.5 
                    before:origin-left 
                    before:transition-transform
                    before:duration-200 
                    before:scale-x-0
                    before:bg-myRed 
                    before:absolute 
                    before:left-0 
                    before:bottom-0 
                    text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">
                        Cases
                    </NavLink>
        
                    <NavLink to='/services/' className="
                    hover:before:scale-x-100 
                    hover:before:origin-left 
                    relative 
                    before:w-full 
                    before:h-0.5 
                    before:origin-left 
                    before:transition-transform
                    before:duration-200 
                    before:scale-x-0
                    before:bg-myRed 
                    before:absolute 
                    before:left-0 
                    before:bottom-0 
                    text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Services</NavLink>
                    <NavLink to='/about/' className="
                    hover:before:scale-x-100 
                    hover:before:origin-left 
                    relative 
                    before:w-full 
                    before:h-0.5 
                    before:origin-left 
                    before:transition-transform
                    before:duration-200 
                    before:scale-x-0
                    before:bg-myRed 
                    before:absolute 
                    before:left-0 
                    before:bottom-0 
                    text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">About</NavLink>
                    <NavLink to='/careers/' className="
                    hover:before:scale-x-100 
                    hover:before:origin-left 
                    relative 
                    before:w-full 
                    before:h-0.5 
                    before:origin-left 
                    before:transition-transform
                    before:duration-200 
                    before:scale-x-0
                    before:bg-myRed 
                    before:absolute 
                    before:left-0 
                    before:bottom-0 
                    text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Careers</NavLink>
                    {/* <NavLink to='/blog/' className="
                    hover:before:scale-x-100 
                    hover:before:origin-left 
                    relative 
                    before:w-full 
                    before:h-0.5 
                    before:origin-left 
                    before:transition-transform
                    before:duration-200 
                    before:scale-x-0
                    before:bg-myRed 
                    before:absolute 
                    before:left-0 
                    before:bottom-0 
                    text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Blog</NavLink> */}
                    <NavLink to='/contact/' className="
                    hover:before:scale-x-100 
                    hover:before:origin-left 
                    relative 
                    before:w-full 
                    before:h-0.5 
                    before:origin-left 
                    before:transition-transform
                    before:duration-200 
                    before:scale-x-0
                    before:bg-myRed 
                    before:absolute 
                    before:left-0 
                    before:bottom-0 
                    text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Contact</NavLink>
                    <button
                        type="button"
                        className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-myRed px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-black transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Hire us
                        <img className='w- h-2 ml-2 mt-0.5' src={loadingGif} alt='loading gif'/>
                    </button>
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