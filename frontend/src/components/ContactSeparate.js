import { useState,useEffect } from "react"
import {useParams} from 'react-router-dom'
import DeleteButton from './DeleteButton'
const ContactSeparate = () => {

    const [listItems, setItems] = useState({})
    const params = useParams()
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/Home/${params._id}/`)
            .then(response => response.json())
            .then(listItems => {
                setItems(listItems)
                // console.log(listItems)
               
            })
    }, [params._id])

    return (
        <div className="separate_page">
            <div class="card" Style="width: 18rem;">
                <img src={`http://127.0.0.1:8000${listItems.picture}`} className="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{listItems.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: {listItems.email}</li>
                    <li class="list-group-item">Phone: {listItems.phone}</li>
                    <li class="list-group-item">Country: {listItems.country}</li>
                    <li class="list-group-item">City: {listItems.city}</li>
                    <li class="list-group-item">Address: {listItems.address}</li>
                </ul>
                <div class="card-body">
                   <button type="button" class="btn btn-primary">Edit</button>
                   <DeleteButton/>
                </div>
            </div>

        </div>
    )
}

export default ContactSeparate