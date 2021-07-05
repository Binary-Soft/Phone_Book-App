import Listitem from "./Listitem"
import { useState, useEffect } from 'react'
import '../App.css'
const ListItems = () => {

    const [listItems, setItems] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/Home/')
            .then(response => response.json())
            .then(listItems => {
                setItems(listItems)
                console.log(listItems)
            })
    }, [])

    return listItems.length ? (<div className="container  ">
        <div className="row justify-content-md-center list_items">
            {
                listItems.map(listItem => <Listitem key={listItem.id} listItem={listItem} />)
            }
        </div>

    </div>) : (
        <div className="text-center">
            <h4 className="empty_text">Contact is Empty</h4>
            <img className="empty_image" src='../images/empty.gif' alt=''/>
        </div>
    )

}
export default ListItems