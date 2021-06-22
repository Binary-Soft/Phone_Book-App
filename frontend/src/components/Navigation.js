import { Link } from 'react-router-dom'
import AddPage from './AddPage'

const Navigation = () => {

    return (
        <>
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-white">Contact Book</span>
                    <AddPage/>
                </div>
            </nav>
        </>
    )
}

export default Navigation