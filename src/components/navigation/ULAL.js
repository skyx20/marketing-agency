import { NavLink } from "react-router-dom";
// UnderLineAnimationLink
const ULAL = ({link, title}) => {
    console.log(link)
    console.log(title)
    return ( 
        <div>
            <NavLink to={link} 
                key={title}
                className="group relative text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">
                {title}
                <span className="bg-myRed h-0.5 absolute w-0 group-hover:w-full transition-all duration-200left-0 bottom-0 "></span>
            </NavLink>
        </div>
    );
}

export default ULAL;