// React Bootstrap
import { Card, Form, Button } from 'react-bootstrap'
// RRD
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
// Axios
import axios from 'axios';
// Hook
import { useState } from 'react'



function CreateNote() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
   

    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        const newNote = {
         title: title,
        description: description
        }

        axios
        .post('https://notes-app-api2021.herokuapp.com/notes', newNote)
        .then(response => {
          console.log(response)
          history.push('/')
        })

    }

    return (
        <div className="base container-fluid">
            <div className="title">
            <Link to='/'>
            <Button className="mb-4" variant="warning">Back</Button>{' '}
            </Link>
            <h1>Create A Note</h1>
            </div>
          <Card className="mx-auto container-fluid" style={{ width: '18rem' }}>

          <Form className="mt-3 mb-3" onSubmit={onSubmit}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Title:</Form.Label>
     <Form.Control type="text" onChange={(e) => setTitle(e.target.value)}
    value={title} required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Description:</Form.Label>
    <Form.Control type="text" onChange={(e) => setDescription(e.target.value)}
    value={description} required />
  </Form.Group>
  <Button size="sm" variant="dark" type="submit">
    Add
  </Button>
  </Form>
              </Card>
        </div>
    )
}

export default CreateNote
