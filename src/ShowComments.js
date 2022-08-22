import axios from "axios";
import React, { useState, useEffect, useReducer } from "react";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

const ShowComments = (props) => {
    const { id } = props.match.params
    const [user, setUser] = useState([])
    const [details, setDetails] = useState([])
    const [comments, setComments] = useState([])


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                const result = response.data
                setDetails(result)
                console.log(result)
                // console.log(result.userId)

                axios.get(`https://jsonplaceholder.typicode.com/users/${result.userId}`)
                    .then((res) => {
                        const value = res.data
                        setUser(value)
                        // console.log(value)
                    })
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response) => {
                const result = response.data
                setComments(result)
                // console.log(result)
            })
            .catch((error) => {
                alert(error.message)
            })
    }, [])

    return (
        <div>
            <Container className="mt-4">
                <Card bg='dark' text='white'>
                    <Card.Header> <h1>  Username: {user.name}  </h1> </Card.Header>
                </Card>
                <Card className='mt-3'>
                    <Card.Header>
                        <h2> TITLE: {details.title} </h2>
                    </Card.Header>
                    <Card.Header>
                        <h3> BODY: </h3>  <b>{details.body}</b>
                    </Card.Header>
                </Card>

                <h3 className="mt-4 mb-3"> <u> Comments </u> </h3>
                <ul>
                    {comments.map(comment => {
                        return <li key={comment.id}> {comment.body} </li>
                    })}
                </ul> <hr />

                <Link to={`/users/${user.id}`} > More posts of author: {user.name} </Link>
            </Container>
        </div>
    )
}

export default ShowComments