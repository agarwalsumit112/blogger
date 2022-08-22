import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'

const ShowUser = (props) => {
    const [user, setUser] = useState([])
    const [userPosts, setUserPosts] = useState([])
    const { id } = props.match.params

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const result = response.data
                setUser(result)
                // console.log(result)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => {
                const result = response.data
                setUserPosts(result)
                // console.log(result)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [])

    return (
        <div>
            <Container className="mt-4">
                <Card bg='secondary' text='white'>
                    <Card.Header> <h1>  USERNAME: {user.name}  </h1> </Card.Header>
                </Card>
                <h3 className='mt-3 mb-4'> Post written by {user.name} </h3>
                <Table striped bordered hover>
                    <tbody>
                        {userPosts.map(post => {
                            return (
                                <tr key={post.id}>
                                    <td>
                                        <li>
                                            <Link to={`/post/${post.id}`}> {post.title} </Link>
                                        </li>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <Link to='/users'> Back </Link>
            </Container>
        </div>
    )
}

export default ShowUser