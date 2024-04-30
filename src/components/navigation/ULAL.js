// import { NavLink } from "react-router-dom";
// // UnderLineAnimationLink
// const ULAL = ({link, title}) => {
//     console.log(link)
//     console.log(title)
//     return ( 
//         <div>
//             <NavLink to={link} 
//                 key={title}
//                 className="group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">
//                 {title}
//                 <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200left-0 bottom-0 "></span>
//             </NavLink>
//         </div>
//     );
// }

// export default ULAL;

import { NavLink } from "react-router-dom";
// UnderlineLinkAnimation
const ULAL = ({props:links}) => {
    
    return ( 
        <div className="h-full flex flex-col w-full justify-content items-center">
            {links.map(({route, title})=>(
                <NavLink to={route} 
                    key={title}
                    className="hover:before:scale-x-100 
                    hover:before:origin-left 
                    text-xl 
                    font-medium
                    text-gray-800
                    my-2 
                    relative 
                    before:w-full
                    before:h-1 
                    before:origin-left 
                    before:transition-transform 
                    before:duration-200 
                    before:scale-x-0
                    before:rounded-full
                    before:bg-white 
                    before:absolute 
                    before:left-0 
                    before:-bottom-2 ">
                    {title}
                    {/* <span className='
                    absolute
                    -bottom-1
                    left-0
                    h-1
                    z-20
                    rounded-full 
                    ease-out
                    transition-transform 
                    duration-300 
                    origin-left
                    group-hover:w-full
                    group-hover:bg-sky-300
                    group-hover:origin-right
                    
                    '></span> */}
                </NavLink>
                ))}
        </div>
    );
}

export default ULAL;