import React, {useState,useEffect} from 'react'


const initialForm ={
    name:"",
    constellation:"",
    id:null
}


const CrudForm = (props) => {


    const [form,setForm] = useState(initialForm);

    useEffect(()=>{

        if(props.dataToEdit){
            setForm(props.dataToEdit)
        }else{
            setForm(initialForm)
        }

    },[props.dataToEdit])

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });

    }

    const handleSumbmit = (e) =>{
        e.preventDefault();

        // validar entrada de datos
        if(!form.name || !form.constellation){
            alert("Datos incompletos")
            return;
        }
        // si el id viene nulo es porque se va a crear un nuevo usuario si no es que se va a editar
        if(form.id ===null){
            props.createData(form);
        }
        else{
            props.updateData(form);
        }

        handleReset();

    }

    const handleReset = (e) =>{
        setForm(initialForm);
        props.setDataToEdit(null);
    }


    return (
        <div>
            <h3 className="mb-sm-4">{props.dataToEdit ? "Editar":"Agregar"}</h3>
            <form onSubmit={handleSumbmit}>
                <input
                className='form-control'
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={handleChange}
                value={form.name}
                />
                <input
                className='form-control'
                    type="text"
                    name="constellation"
                    placeholder="Constelación"
                    onChange={handleChange}
                    value={form.constellation}
                />
                <input type="submit" className='btn btn-primary mt-sm-4' value="Enviar" />
                <input type="reset" className='btn btn-danger mt-sm-4' value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    );
}

export default CrudForm