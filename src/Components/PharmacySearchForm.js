import React from 'react'
import Form from 'react-bootstrap/Form'
import PharmacySearchBtn from './PharmacySearchBtn'

const pharmacySearchForm = () => {
  return (
      <Form>
        <Form.Row>
          <Form.Group controlId="formGridZip">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control placeholder="90210" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="formGridDistance">
            <Form.Label>Distance (in miles)</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <PharmacySearchBtn />
      </Form>
    )
}

export default pharmacySearchForm
