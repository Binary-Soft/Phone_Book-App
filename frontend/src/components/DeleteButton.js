import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'




const DeleteButton = () => {

    const params = useParams()
    // console.log(param)

    function DeleteFunction(event) {

     console.log(params)

     axios.delete(`http://127.0.0.1:8000/Home/${params._id}/`)
     .then(response =>{
         console.log(response)
     })



    }


    return (
        <>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Delete
            </button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Delete</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h6>Do you really want to delete ?</h6>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button onClick={(event) => DeleteFunction(event)} type="button" class="btn btn-primary">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteButton