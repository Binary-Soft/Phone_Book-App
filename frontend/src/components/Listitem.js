import { Link } from 'react-router-dom'
import '../App.css'
const Listitem = (props) => {
    const { listItem } = props
    // console.log(listItem.picture)
    return (
        <>
            <div className="card Grid_layout" Style="width: 14rem;">
                <Link to={`/contact/${listItem.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <img src={`http://127.0.0.1:8000${listItem.picture}`} className="card-img-top front_img" alt="..." />
                    <div className="card-body ">
                        <h6><i className="fas fa-phone-square-alt"></i> {listItem.phone}</h6>
                        <h5 className="card-text text-center"><i className="fas fa-user"></i> {listItem.name}</h5>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Listitem