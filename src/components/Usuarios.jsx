import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])

    const obtenerUsuarios = async () => {
        const resultado = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = await resultado.data
        setUsuarios(users)
    }

    useEffect(() => {
       obtenerUsuarios()
    }, [])

    return (
        <div>
            <h2>Lista de usuarios</h2>
            {
                usuarios.map( (item) => (
                    <div key={item.id}>
                        <Link to={`/usuario/${item.id}`}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Usuarios
