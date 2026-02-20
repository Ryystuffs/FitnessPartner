import { useState } from 'react';
import '../index.css';
import MenuIcon from '../assets/menu.png';
import CloseIcon  from '../assets/reject.png';
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-black">
            <div className='flex justify-between py-7 px-5'>    
                <Link to='/'>
                    <h1 className='text-2xl font-bold'>Fitness Partner</h1>
                </Link>
                <div className='flex items-center justify-end lg:hidden'>
                    <img src={isOpen ? CloseIcon : MenuIcon} alt="" 
                    className='w-6'
                    onClick={() => setIsOpen(prev => !prev)}
                    />
                </div>
            </div>

            {isOpen && (
                <div className='fixed inset-0 top-[90px] bg-black/60 backdrop-blur-md'>
                    <Link to='AddWorkout'onClick={()=> setIsOpen(prev => !prev)}>AddWorkout</Link>
                </div>
        )}
            
        </div>
    )

}

export default Navbar