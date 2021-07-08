import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useHistory } from 'react-router-dom'
const IndividualEdit = () => {

    const params = useParams()

    const [data, setData] = useState({
        name: ""
    })

    function submit(event) {
        event.preventDefault();
        axios.patch(`http://127.0.0.1:8000/Home/${params._id}/`, {
            name: data.name
        }).then(res => {
            console.log(res)
        })
        // window.location.reload();
    }

    function handleName(event) {
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)
        console.log(newData)
    }
    return (
       <>
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#indiedit">
  Change
</button>
        <div class="modal fade" id="indiedit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <p>Name: <input onChange={(event) => handleName(event)} id="name" value={data.name} placeholder="Enter your Name...." type='text'></input><button onClick={(event) => submit(event)}></button></p>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default IndividualEdit