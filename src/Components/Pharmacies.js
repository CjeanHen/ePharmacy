import React from 'react'
import { Form, Button } from 'react-bootstrap'

const pharmacySearchForm = (
    <Form>
      <Form.Row>
        <Form.Group controlId="formGridZip">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control placeholder="90210" />
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="formGridDistance">
        <Form.Label>Distance (in miles)</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>5</option>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </Form.Control>
      </Form.Group>
      <Button variant='primary' type='submit' />
    </Form>
  )

  const pharmacies = (<p>No results yet</p>)

const Pharmacies = () => {
  return (
    <div>
      {pharmacySearchForm}
      {pharmacies}
    </div>
  )
}

export default Pharmacies
