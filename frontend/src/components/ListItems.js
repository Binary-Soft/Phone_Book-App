import Listitem from "./Listitem"
import { useState, useEffect, useContext } from 'react'

const ListItems = () => {

    // const [listItems, setItems] = useState([])

    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/Home/')
    //         .then(response => response.json())
    //         .then(listItems => {
    //             setItems(listItems)
    //             console.log(listItems)
    //         })
    // }, [])

    return (
        // <div>
        //     <table class="table">
        //         <thead>
        //             <tr>
        //                 <th scope="col">#</th>
        //                 <th scope="col">Name</th>
        //                 <th scope="col">Email</th>
        //                 <th scope="col">Phone</th>
        //                 <th scope="col">Country</th>
        //                 <th scope="col">City</th>
        //                 <th scope="col">Adress</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 listItems.map(listItem=> <Listitem key={listItem.id} listItem={listItem}/>)
        //             }
        //         </tbody>
        //     </table>
        // </div>
     <div>
         <Listitem/>
     </div>
    )
}
export default ListItems