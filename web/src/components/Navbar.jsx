import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className=" navbar p-0 flex items-center justify-between w-full m-auto bg-blue-800 text-white">
            <div className="p-0">
                <Link to="/" className="btn btn-ghost text-xl">Booking.com</Link>
            </div>
            <div>
                <ul className="flex items-center">
                    <li><Link to="/register" className="btn btn-ghost">Register</Link></li>
                    <li><Link to="/login" className="btn btn-ghost">Login</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar