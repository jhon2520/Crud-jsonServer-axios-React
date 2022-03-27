import axios from 'axios'
import React,{useState,useEffect} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader  from './Loader'



const CrudApi = () => {

    const [db,setDb] = useState(null)
    const [dataToEdit,setDataToEdit] = useState(null);
    const [loading,setLoading] = useState(false);


    const getData = async() =>{
        const response = await fetch("http://localhost:5000/db");
        const data = await response.json();
        const santos = data.santos
        return santos
    }

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            
            getData().then((respuesta)=> setDb(respuesta))
            setLoading(false);
        }, 0);
    }, []);


   // getData();

    const createData = (data)=>{
        
        data.id = Date.now()
        // console.log(db)
        // getData().then((respuesta)=>setDb([...db,respuesta]))
        // console.log(db)

        axios.post("http://localhost:5000/santos",data).then(resp=>setDb([...db,resp.data]))

        
    }

    const updateData = (data)=>{

        // si el id coicide con el que se quiere editar devuelta para 
        // ese dato el elemento nuevo de lo contrario devuelva lo que ya están
        axios.put(`http://localhost:5000/santos/${data.id}`,data)
        .then(resp =>{

            if(resp){
                let newData = db.map((e)=>e.id === data.id ? data : e);
                setDb(newData);

            }
            
        })


    }

    const deleteData = (id) =>{

        let isDelete = window.confirm(`¿Estás seguro de eliminar el usuario con el id ${id}?`);
        if(isDelete){

            axios.delete(`http://localhost:5000/santos/${id}`)
            .then(resp=>{

                if(resp){
                    let newData = db.filter((e)=>e.id !== id)
                    setDb(newData);

                }
            })

        }else{
            return;
        }
    }

    return (
        <div>
            <div className='m-3'>CrudApp</div>
            <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
                />
                {
                    // si loading igual a true entonces reenderize loader
                    loading ? <Loader/> : ""
                }


            { db && <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
            />}
            
            

        </div>
    )
}

export{
    CrudApi as default
}