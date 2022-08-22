import React from "react";
import Container from 'react-bootstrap/Container'
import blogger from './image/blogger.png'

const Home = (props) => {

    return (
        <div className="container mt-5">
            <Container>
                <img src={blogger} alt='blogger' className="img-fluid" />
            </Container>
        </div>
    )
}

export default Home