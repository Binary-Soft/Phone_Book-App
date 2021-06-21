import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Todo App</span>
                    <Link to='/add'><h3>Add</h3></Link>
                </div>
            </nav>
        </>
    )
}

export default Navigation