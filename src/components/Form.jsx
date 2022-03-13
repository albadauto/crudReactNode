import React, { useEffect, useState } from 'react';
import api from '../Api';

const Form = () => {
    const [nome, setNome] = useState({
        nome: "",
        sobrenome:"",
        cpf: ""
    })

    const [search, setSearch] = useState([]);

    useEffect(() => {
        api.get('/').then((res) => setSearch(res.data));
    }, [])

    const onchange = (ev) => {
        const { name, value } = ev.target

        setNome({ ...nome, [name]: value })

    }

    const onsubmit = async (ev) => {
        try{
            ev.preventDefault();
            await api.post('/insert', nome)
            document.location.reload();
        }catch(err){
            console.log(err)
        }
        

    }

    const deleteById = (ev) => {
        api.get(`/delete/${ev.target.value}`).then(() => {
            document.location.reload();
        })
    }


    return ( 
        <>
        <form onSubmit={onsubmit} method="post">
            Nome: <br /> 
            <input type="text" name="nome"  className='form-control' onChange={onchange}/><br />
            Sobrenome: <br />
            <input type="text" name="sobrenome" id="" className='form-control' onChange={onchange}/><br />
            cpf: <br />
            <input type="text" name="cpf" id="" className='form-control' onChange={onchange}/><br />
            <button className='btn btn-success' type='submit'>Enviar</button>
        </form><br />

        {search.map((res, key) => {
            return(
                <div className="teste">
                    <label htmlFor="" key={Math.random()} className="alert alert-danger">{res.nome}</label>
                    *<button value={res._id} className="btn btn-danger" onClick={deleteById}>Deletar</button>
                </div>
            )
        })}
        </>
     );
}
 
export default Form;