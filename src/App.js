import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Row>
            <Col className ='text-center py-3'>
              <h1>Welcome To HomeChef</h1>
            </Col>
          </Row>
          
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
