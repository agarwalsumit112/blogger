import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

const PostsList = (props) => {
    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const result = response.data
                setPost(result)
                console.log(result)
            })
    }, [])

    return (
        <div className='container mt-4'>
            <h2 className="mb-3"> Total Posts: {post.length} </h2>
            <Table striped bordered hover>
                <tbody>
                    {post.map(ele => {
                        return (
                            <tr key={ele.id}>
                                <td>
                                    <li>
                                        <Link to={`/post/${ele.id}`}> {ele.title} </Link>
                                    </li>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default PostsList