import '../App.css'
const Listitem = (props) => {
    const { listItem } = props
    console.log(listItem.picture)
    return (
        <>
            {/* <tr>
                <th scope="row">{listItem.id}</th>
                <td>{listItem.name}</td>
                <td>{listItem.email}</td>
                <td>{listItem.phone}</td>
                <td>{listItem.country}</td>
                <td>{listItem.city}</td>
                <td>{listItem.address}</td>
            </tr> */}

                       
            <div className="card Grid_layout" Style="width: 14rem;">
                <img src={`http://127.0.0.1:8000${listItem.picture}`} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-text text-center">{listItem.name}</h5>
                </div>
            </div>
        </>
    )
}

export default Listitem