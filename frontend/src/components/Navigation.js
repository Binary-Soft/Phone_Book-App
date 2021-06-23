import { Link } from 'react-router-dom'
import AddPage from './AddPage'
import '../App.css'

const Navigation = () => {

    return (
        <>
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-white Head_line">Contact Book</span>
                    <div className="search_input">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search"></input>
                    </div>
                    <div className="Add_button"><AddPage /></div>
                </div>

            </nav>
        </>
    )
}

export default Navigation