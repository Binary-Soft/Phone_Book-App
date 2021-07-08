import axios from "axios"
import { useParams } from 'react-router-dom'
import '../App.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const DeleteButton = () => {

    const params = useParams()
    // console.log(param)

    function DeleteFunction(event) {

        console.log(params)

        axios.delete(`http://127.0.0.1:8000/Home/${params._id}/`)
            .then(res => {
                console.log(res.data.success_msg)
                console.log(res)
                if (res.data.success_msg === 'Delete Successfully') {
                    console.log('Succeesfull')
                    window.alert(res.data.success_msg);
                    window.location.replace('/')
                }
                else {
                    window.alert("Sorry Facing Trouble");
                }
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
                            <h5 className="modal-title" id="staticBackdropLabel">Delete</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img className='delete_img' src='../images/delete.gif' alt='' />
                            <h6>Do you really want to delete ?</h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button onClick={(event) => DeleteFunction(event)} type="button" className="btn btn-primary">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteButton