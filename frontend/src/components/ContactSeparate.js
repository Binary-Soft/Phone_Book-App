import { useState, useEffect } from "react"
import { useParams, useHistory } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import Edit from './Edit'
const ContactSeparate = () => {

    const [listItems, setItems] = useState({})
    const params = useParams()
    const history = useHistory()
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/Home/${params._id}/`)
            .then(response => response.json())
            .then(listItems => {
                setItems(listItems)
                // console.log(listItems)

            })
    }, [params._id,listItems])

    return (
        <div className="separate_page">
            <div className="card" Style="width: 18rem;">
                <img src={`http://127.0.0.1:8000${listItems.picture}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{listItems.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Email: {listItems.email}</li>
                    <li className="list-group-item">Phone: {listItems.phone}</li>
                    <li className="list-group-item">Country: {listItems.country}</li>
                    <li className="list-group-item">City: {listItems.city}</li>
                    <li className="list-group-item">Address: {listItems.address}</li>
                </ul>
                <div className="card-body">
                    <Edit/>
                    <DeleteButton/>
                </div>
                <button className="btn btn-primary" onClick={() => { history.goBack() }}><i className="fas fa-arrow-left"></i></button>
            </div>

        </div>
    )
}

export default ContactSeparate