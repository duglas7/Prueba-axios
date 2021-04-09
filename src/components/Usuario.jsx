import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

const Usuario = () => {
    const [usuario, setUsuario] = useState([])
    const {id} = useParams()

    const obtenerUsuario = async () => {
        const resultado = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const user = await resultado.data
        setUsuario(user)
    }

    useEffect(() => {
       obtenerUsuario()
    }, [])
    return (
        <div>
            <h4>Usuario</h4>
            <p>Nombre: {usuario.name}</p>
            <p>Nombre de Usuario: {usuario.username}</p>
            <p>Correo: {usuario.email}</p>
            <p>Telefono: {usuario.phone}</p>
            <p>Sitio Web: {usuario.website}</p>
        </div>
    )
}

export default Usuario
