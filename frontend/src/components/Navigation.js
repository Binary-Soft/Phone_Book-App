import AddPage from './AddPage'
import '../App.css'
import Search from './Search'

const Navigation = () => {

    return (
        <>
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-white Head_line">Contact Book</span>
                    <Search />
                    <div className="Add_button"><AddPage /></div>
                </div>

            </nav>
        </>
    )
}

export default Navigation