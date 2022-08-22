import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

const UsersList = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const result = response.data
                setUsers(result)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [])

    return (
        <div className='container mt-4'>
            <h2 className="mb-3"> Users List - {users.length} </h2>
            <Table striped bordered hover>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>
                                    <li><Link to={`/users/${user.id}`}> {user.name} </Link></li>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default UsersList