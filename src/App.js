import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PersonalTable from './components/PersonalTable/PersonalTable'

function App () {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <PersonalTable />
        </Col>
      </Row>
    </Container>
  )
}

export default App
