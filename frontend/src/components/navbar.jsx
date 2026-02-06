import '../index.css';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="bg-black">
            <div>
                <Link to='/'>
                    <h1 className='text-2xl py-7 px-5 font-bold'>Fitness Partner</h1>
                </Link>
            </div>

            <div>
                
            </div>
        </div>
    )

}

export default Navbar