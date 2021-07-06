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
        address: "",
    })

    function submit(event) {
        event.preventDefault();
        Axios.post('http://127.0.0.1:8000/Home/', {
            name: data.name,
            email: data.email,
            phone: data.phone,
            country: data.country,
            city: data.city,
            address: data.address,
        }).then(res => {
            console.log(res.data.success_or_error_message)
            if (res.data.success_or_error_message === 'Save Success') {
                console.log('Succeesfull')
                window.location.reload()
            }
            else if (res.data.success_or_error_message === undefined) {
                window.alert('Please Fill the Blanks');
            }

            else {
                window.alert(res.data.success_or_error_message);
            }
        })

        // window.location.reload();
    }

    function handle(event) {
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)
        console.log(event.target.files)
        // console.log(newData)
    }

    return (
        <>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body container">
                            <form onSubmit={(event) => submit(event)}>
                                <p>Name: <input onChange={(event) => handle(event)} id="name" value={data.name} placeholder="Enter your Name...." type='text'></input></p>
                                <p className="add_email">Email:  <input onChange={(event) => handle(event)} id="email" value={data.email} placeholder="Enter your Email...." type='email'></input></p>
                                <p className="add_phone">Phone:  <input onChange={(event) => handle(event)} id="phone" value={data.phone} placeholder="Enter your Phone...." type='number'></input></p>
                                <p className="add_country"> Country:  <input onChange={(event) => handle(event)} id="country" value={data.country} placeholder="Enter your Country...." type='text'></input></p>
                                <p className="add_city">City:  <input onChange={(event) => handle(event)} id="city" value={data.city} placeholder="Enter your City...." type='text'></input></p>
                                <p>Address:  <input onChange={(event) => handle(event)} id="address" value={data.address} placeholder="Enter your Address...." type='text'></input></p>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={(event) => submit(event)} type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Add