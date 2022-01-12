import {Link} from 'react-router-dom'
import "./Navbar.css"
import Searchbar from "./Searchbar";
import {useTheme} from "../hooks/useTheme";


export default function Navbar() {
    const {color} = useTheme();
    return (
        <div className="navbar" style={{background: color}}>
            <nav>
                <Link exact to="/" className="brand">
                    <h1>Cooking ninja</h1>
                </Link>
                <Searchbar />
                <Link to="/create">
                    Create recipe
                </Link>
            </nav>

        </div>
    )
}