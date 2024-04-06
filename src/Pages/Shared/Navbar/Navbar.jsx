import { NavLink } from "react-router-dom";
import userDefaultPic from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
    }

    const navLinks = <>
        <li><NavLink to='/'>Home </NavLink></li>
        <li><NavLink to='/about'>About </NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                        {
                            !user && <NavLink to='/login'>Login</NavLink>
                        }
                        {
                            !user && <NavLink to='/register'>Register</NavLink>
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={userDefaultPic} />
                    </div>
                </div>
                {
                    user && <p>{user.email}</p>
                }
                {

                    user ? <button onClick={handleLogout} className="btn">Log Out</button> :
                        <NavLink to='/login'><button className="btn">Login</button></NavLink>

                }
            </div>
            {/* <NavLink to='/register'><button className="btn">Register</button></NavLink> */}
        </div>
    );
};

export default Navbar;