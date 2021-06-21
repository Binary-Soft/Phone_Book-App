const Listitem = (props) => {
   const {listItem} = props
    return (
        <>
            <tr>
                <th scope="row">{listItem.id}</th>
                <td>{listItem.name}</td>
                <td>{listItem.email}</td>
                <td>{listItem.phone}</td>
                <td>{listItem.country}</td>
                <td>{listItem.city}</td>
                <td>{listItem.address}</td>
            </tr>
       </>
    )
}

export default Listitem