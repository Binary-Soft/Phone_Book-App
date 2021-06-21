const Listitem = (props) => {
   const {product} = props
    return (
        <>
            <tr>
                <th scope="row">1</th>
                <td>{product.name}</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
            </tr>
       </>
    )
}

export default Listitem