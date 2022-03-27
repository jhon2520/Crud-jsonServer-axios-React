import React,{useState} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDB = [

    {
        id:1,
        name:"Seiya",
        constellation:"Pegaso"
    },
    {
        id:2,
        name:"Shiryu",
        constellation:"Dragón"
    },
    {
        id:3,
        name:"Hyoga",
        constellation:"CCisne"
    },



]

const CrudApp = () => {

    const [db,setDb] = useState(initialDB)
    const [dataToEdit,setDataToEdit] = useState(null);

    const createData = (data)=>{
        data.id = Date.now()
        // console.log(data);
        setDb([...db,data])
    }

    const updateData = (data)=>{

        // si el id coicide con el que se quiere editar devuelta para 
        // ese dato el elemento nuevo de lo contrario devuelva lo que ya están
        let newData = db.map((e)=>e.id === data.id ? data : e);
        setDb(newData);

    }

    const deleteData = (id) =>{

        let isDelete = window.confirm(`¿Estás seguro de eliminar el usuario con el id ${id}?`);
        if(isDelete){
            let newData = db.filter((e)=>e.id !== id)
            setDb(newData);
        }else{
            return;
        }
    }

    return (
        <div>
            <div>CrudApp</div>
            <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
                />
            <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
            />
        </div>
    )
}

export{
    CrudApp as default
}