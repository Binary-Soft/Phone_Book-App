const Listitem = (props) => {
    const { listItem } = props
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

                       
            <div className="card" Style="width: 14rem;">
                <img src="https://www.holmaninsures.com/wp-content/uploads/2017/11/demo-sm-men-pic.jpg" className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-text text-center">{listItem.name}</h5>
                </div>
            </div>


           
        </>
    )
}

export default Listitem