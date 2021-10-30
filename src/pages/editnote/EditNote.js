// React Bootstrap
import { Button, Modal, Form } from 'react-bootstrap'

// RRD
import { useHistory } from "react-router-dom";

// Hook
import { useState } from 'react'

// Fetch Data
import axios from 'axios';

function EditNote({note}) {
    const history = useHistory();
    const [lgShow, setLgShow] = useState(false);
    const [ title, setTitle ] = useState(note.title)
    const [ description, setDescription ] = useState(note.description)


      // Edit note
      const handleEditNote = (id) => {
        const editNote = {
          title: title,
          description: description
        }
      
        axios
      .put(`https://notes-app-api2021.herokuapp.com/notes/${id}`, editNote)
      .then(response => {
        console.log(response)
        history.push('/')
    })
    }

    function handleCancelEdit(e) {
        e.preventDefault();
        // reset to initial value/state
        setTitle(note.title);
        setDescription(note.description);
      }

    return (
        <>
        <Button className="m-2" variant="primary" size="sm" onClick={() => setLgShow(true)}>Edit</Button>
<Modal
        className="container-fluid"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        backdrop="static"
        keyboard={false}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton onClick={handleCancelEdit}>
          <Modal.Title id="example-modal-sizes-title-lg">
            Edit Note
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title:</Form.Label>
    <Form.Control type="text" onChange={(e) => setTitle(e.target.value)}
    value={title}/>
 </Form.Group>

 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Description:</Form.Label>
    <Form.Control type="text" onChange={(e) => setDescription(e.target.value)}
    value={description} />
     </Form.Group>
        </Modal.Body>

        <Modal.Footer>

        <Button variant="primary"  onClick={() => handleEditNote(note.id)}>Edit</Button>
        </Modal.Footer>

      </Modal>
    </>
    )
}

export default EditNote
