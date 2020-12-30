import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PharmacySearchForm from './PharmacySearchForm'

const pharmacies = (<p>No results yet</p>)

const Pharmacies = () => {
  return (
    <Container fluid>
      <Row className='justify-content-center'>
        <PharmacySearchForm />
      </Row>
      {pharmacies}
    </Container>
  )
}

export default Pharmacies
