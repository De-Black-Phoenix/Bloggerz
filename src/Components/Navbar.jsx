// Import React Dependencies
import { Link } from 'react-router-dom';

// Import Assets
import MenuIcon from '../assets/Icons/menu-svgrepo-com.svg'
import HomeIcon from '../assets/Icons/HomeIcon.svg'
import BlogIcon from '../assets/Icons/BlogIcon.svg'


function Navbar(){
    return(
        <nav className='w-[86%] mx-auto flex items-center justify-between py-4 mt-6'>
            {/* Logo */}
            <h1 className='text-xl font-bold text-green-800 cursor-pointer'>
                Bloggerz
            </h1>

            {/* Mobile Menu */}
            <button className='md:hidden'>
                <img src={MenuIcon} alt="Menu" className='w-7' />
            </button>

            {/* Navlinks */}
            <ul className='hidden md:flex gap-6 items-center'>
                <li className=''>
                    <Link to="/" className='flex items-center gap-1'>
                        <img src={HomeIcon} alt="Home" className='w-5' />
                        <span className='text-green-800 font-bold'>Home</span>
                    </Link>
                </li>

                <li className=''>
                    <Link to="/blogs" className='flex items-center gap-1'>
                        <img src={BlogIcon} alt="Blog" className='w-7' />
                        <span>Blog</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;