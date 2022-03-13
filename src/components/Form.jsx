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
            <input type="text" name="nome" value={nome.nome} className='form-control' onChange={(e) => setNome({...nome, nome: e.target.value})}/><br />
            Sobrenome: <br />
            <input type="text" name="sobrenome" value={nome.sobrenome} className='form-control' onChange={(e) => setNome({...nome, sobrenome: e.target.value})}/><br />
            cpf: <br />
            <input type="text" name="cpf" id="" value={nome.cpf} className='form-control' onChange={(e) => setNome({...nome, cpf: e.target.value})}/><br />
            <button className='btn btn-success' type='submit'>Enviar</button>
        </form><br />

        {search.map((res, key) => {
            return(
                <div className="teste">
                    <label htmlFor="" key={Math.random()} className="alert alert-danger">{res.nome} {res.sobrenome}</label>
                    *<button value={res._id} className="btn btn-danger" onClick={deleteById}>Deletar</button>
                </div>
            )
        })}
        </>
     );
}
 
export default Form;