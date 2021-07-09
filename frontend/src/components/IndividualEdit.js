import axios from "axios"
import { useState} from "react"
import { useParams} from 'react-router-dom'
import '../App.css'
const IndividualEdit = () => {

    const params = useParams()

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        address: ""
    })

   
    function Namesubmit(event) {
        event.preventDefault();
        axios.patch(`http://127.0.0.1:8000/Home/${params._id}/`, {
            name: data.name
        }).then(res => {
            console.log(res)
        })
        // window.location.reload();
    }

    function Emailsubmit(event) {
        event.preventDefault();
        axios.patch(`http://127.0.0.1:8000/Home/${params._id}/`, {
            email: data.email
        }).then(res => {
            console.log(res)
        })
    }

    function Phonesubmit(event) {
        event.preventDefault();
        axios.patch(`http://127.0.0.1:8000/Home/${params._id}/`, {
            phone: data.phone
        }).then(res => {
            console.log(res)
        })
    }

    function Countrysubmit(event) {
        event.preventDefault();
        axios.patch(`http://127.0.0.1:8000/Home/${params._id}/`, {
            country: data.country
        }).then(res => {
            console.log(res)
        })
    }

    function Citysubmit(event) {
        event.preventDefault();
        axios.patch(`http://127.0.0.1:8000/Home/${params._id}/`, {
            city: data.city
        }).then(res => {
            console.log(res)
        })
    }

    function Addresssubmit(event) {
        event.preventDefault();
        axios.patch(`http://127.0.0.1:8000/Home/${params._id}/`, {
            address: data.address
        }).then(res => {
            console.log(res)
        })
    }

    function handleSubmit(event) {
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)
        console.log(newData)
    }

    function refresh()
    {
        window.location.reload()
    }

    return (
        <>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#indiedit">
                Change
            </button>
            <div className="modal fade" id="indiedit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div class="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Change</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Name: </p><input onChange={(event) => handleSubmit(event)} id="name" value={data.name} placeholder="Enter your Name...." type='text' className='Input_edit'></input><button className=" btn-primary" onClick={(event) => Namesubmit(event)}><i className="fas fa-check-circle"></i></button>
                            <p>Email: </p><input onChange={(event) => handleSubmit(event)} id="email" value={data.email} placeholder="Enter your Email...." type='text' className='Input_edit'></input><button className=" btn-primary" onClick={(event) => Emailsubmit(event)}><i className="fas fa-check-circle"></i></button>
                            <p>Phone: </p> <input onChange={(event) => handleSubmit(event)} id="phone" value={data.phone} placeholder="Enter your Phone...." type='text' className='Input_edit'></input><button className=" btn-primary" onClick={(event) => Phonesubmit(event)}><i className="fas fa-check-circle"></i></button>
                            <p>Country: </p> <input onChange={(event) => handleSubmit(event)} id="country" value={data.country} placeholder="Enter your Country...." type='text' className='Input_edit'></input><button className=" btn-primary" onClick={(event) => Countrysubmit(event)} ><i className="fas fa-check-circle"></i></button>
                            <p>City: </p> <input onChange={(event) => handleSubmit(event)} id="city" value={data.city} placeholder="Enter your City...." type='text' className='Input_edit'></input><button className=" btn-primary" onClick={(event) => Citysubmit(event)} ><i className="fas fa-check-circle"></i></button>
                            <p>Address: </p> <input onChange={(event) => handleSubmit(event)} id="address" value={data.address} placeholder="Enter your Address...." type='text' className='Input_edit'></input><button className=" btn-primary" onClick={(event) => Addresssubmit(event)} ><i className="fas fa-check-circle"></i></button>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" className="btn btn-primary"data-bs-dismiss="modal" onClick={(event) =>refresh()}>Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndividualEdit