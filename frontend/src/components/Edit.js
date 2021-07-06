import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useHistory } from 'react-router-dom'

const Edit = () => {

    const params = useParams()
    // console.log(param)
    const [data,setData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        address: ""
    })

    function handle(event) {
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)
        console.log(event.target.files)
        console.log(newData)
    }

    function submit(event) {
        event.preventDefault();
        axios.put(`http://127.0.0.1:8000/Home/${params._id}/`, {
            name: data.name,
            email: data.email,
            phone: data.phone,
            country: data.country,
            city: data.city,
            address: data.address,
        }).then(res => {
            console.log(res)
        })

        // window.location.reload();
    }

    const [listItems, setItems] = useState({})
    // const params = useParams()
    const history = useHistory()
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/Home/${params._id}/`)
            .then(response => response.json())
            .then(listItems => {
                setItems(listItems)
                // console.log(listItems.name)

            })
    }, [params._id])


    return (
        <>
           
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
   Edit
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Edit</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="modal-body container">
                            <form onSubmit={(event) => submit(event)}>
                                <p>Name: <input onChange={(event) => handle(event)} id="name" placeholder="Enter your ...." type='text' value={data.name}></input></p>
                                <p className="add_email">Email:  <input onChange={(event) => handle(event)} id="email"  placeholder="Enter your Email...." type='email'value={data.email}></input></p>
                                <p className="add_phone">Phone:  <input onChange={(event) => handle(event)} id="phone"  placeholder="Enter your Phone...." type='number' value={data.phone}></input></p>
                                <p className="add_country"> Country: <input onChange={(event) => handle(event)} id="country" placeholder="Enter your Country...." type='text' value={data.country}></input></p>
                                <p className="add_city">City:  <input  onChange={(event) => handle(event)}  id="city"  placeholder="Enter your City...." type='text' value={data.city}></input></p>
                                <p>Address:  <input  id="address" onChange={(event) => handle(event)} placeholder="Enter your Address...." type='text'value={data.address}></input></p>
                            </form>
                        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button onClick={(event) => submit(event)} type="button" class="btn btn-primary">Change</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Edit