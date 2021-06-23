import '../App.css'
import { useState } from 'react'
import Axios from 'axios'

const Add = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        adress: ""

    })

    function submit(event) {
        event.preventDefault();
        Axios.post('http://127.0.0.1:8000/Home/', {
            name: data.name,
            email: data.email,
            phone: data.phone,
            country: data.country,
            city: data.city,
            adress: data.adress
        }).then(res => {
            console.log(res)
        })
    }

    function handle(event) {
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <>

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={(event) => submit(event)}>
                                <p>Name: <input onChange={(event) => handle(event)} id="name" value={data.name} placeholder="Enter your Name...." type='text'></input></p>
                                <p className="add_email">Email:  <input onChange={(event) => handle(event)} id="email" value={data.email} placeholder="Enter your Email...." type='email'></input></p>
                                <p className="add_phone">Phone:  <input onChange={(event) => handle(event)} id="phone" value={data.phone} placeholder="Enter your Phone...." type='number'></input></p>
                                <p className="add_country"> Country:  <input onChange={(event) => handle(event)} id="country" value={data.country} placeholder="Enter your Country...." type='text'></input></p>
                                <p className="add_city">City:  <input onChange={(event) => handle(event)} id="city" value={data.city} placeholder="Enter your City...." type='text'></input></p>
                                <p>Adress:  <input onChange={(event) => handle(event)} id="adress" value={data.adress} placeholder="Enter your Adress...." type='text'></input></p>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={(event)=>submit(event)}type="button" class="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Add