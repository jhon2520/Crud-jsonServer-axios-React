import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = (props) => {
    return (
        <div>
            <h3 className='mb-sm-5 mt-sm-5'>Tabla de datos</h3>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.length === 0 ? 
                        <tr><td colSpan="3">Sin Datos</td></tr> 
                        : props.data.map((e)=>{
                            return(
                                
                                <CrudTableRow 
                                    key={e.id} 
                                    elemento={e}
                                    setDataToEdit={props.setDataToEdit}
                                    deleteData={props.deleteData}
                                />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable