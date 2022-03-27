import React from 'react'

const CrudTableRow = (props) => {
    return (
        <tr>
            <td>{props.elemento.name}</td>
            <td>{props.elemento.constellation}</td>
            <td>
                <button className='btn btn-light' onClick={()=>props.setDataToEdit(props.elemento)}>Editar</button>
                <button className='btn btn-danger' onClick={()=>props.deleteData(props.elemento.id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow
