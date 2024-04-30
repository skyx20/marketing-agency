import {connect} from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import logoBrand from 'assets/images/brandLogo/a.jpg'
import PuffLoader from 'react-spinners/PuffLoader'
import {useState, Fragment} from 'react'
import { Popover, Transition } from '@headlessui/react'
import 'boxicons'
import ULAL from './ULAL';


const linkData = [
    {
    route: '/cases/',
    title: 'Cases'
    },
    {
    route: '/services/',
    title: 'Services'
    },
    {
    route: '/about/',
    title: 'About'
    },
    {
    route: '/careers/',
    title: 'careers'
    },
    {
    route: '/contact/',
    title: 'Contact'
    },
]

const Navbar = () => {
    const [loading, SetLoading] = useState(true)
    const [opend, setopend] = useState(false)

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
                <div className="-ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-6 px-2">
                    <Link to= '/' className="ml-2">
                        <img src={logoBrand} width={80} height={40} alt="brandLogo"/>
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/cases/' 
                    className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">
                        Cases
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200 left-0 bottom-0 "></span>
                    </NavLink>
        
                    <NavLink to='/services/' className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Services
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200 left-0 bottom-0 group"></span>
                    </NavLink>
                    <NavLink to='/about/' className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">About
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200 left-0 bottom-0 "></span>
                    </NavLink>
                    <NavLink to='/careers/' className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Careers
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200 left-0 bottom-0 "></span>
                    </NavLink>
                    {/* <NavLink to='/blog/' className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Blog
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200 left-0 bottom-0 "></span>
                    </NavLink> */}
                    <NavLink to='/contact/' className="
                    group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Contact
                    <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200 left-0 bottom-0 "></span>
                    </NavLink>
                    <Link
                        to="/contact/"
                        className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-myRed px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-black transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Hire us
                        <PuffLoader className='ml-2 mt-0.5' loading={loading} size={20} color='#ffffff'/>
                    </Link>
                    </div>
                </div>
                <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-6 px-2">
                    <Link to= '/' className="ml-2">
                        <img src={logoBrand} width={80} height={40} alt="brandLogo"/>
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <Popover size={60} className="relative">
                            {({ open }) => (
                            <>
                                <Popover.Button
                                className={`
                                    ${open ? 'text-white' : 'text-white/90'}
                                    focus:ring-none focus-outline-none`}>
                                <box-icon name={opend ? 'x': 'menu-alt-right'} onClick={
                                    () => { opend ? setopend(false) : setopend(true);}}>
                                </box-icon>
                
                                </Popover.Button>
                                <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                                >
                                <Popover.Panel className="absolute -left-2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                        <div className="absolute grid gap-8 bg-white p-7 lg:grid-cols-2">
                                            {linkData.map((data) =>(
                                                <ULAL link={data}/>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                                </Transition>
                            </>
                            )}
                        </Popover>
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