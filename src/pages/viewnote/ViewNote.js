// React Bootstrap
import { Card, Button} from 'react-bootstrap';
// RRD
import { useParams, useHistory, Link } from "react-router-dom";
// Fetch Hook
import { useFetch } from '../../hooks/useFetch'
// Fetch Data
import axios from 'axios';
// Component
import EditNote from '../editnote/EditNote';

function ViewNote() {
    const { id } = useParams();
    const url = 'https://notes-app-api2021.herokuapp.com/notes/' + id
    const { data: notes, loading, error } = useFetch(url)
    const history = useHistory();


    
    const deleteNote = (id) => {
      axios.delete(`https://notes-app-api2021.herokuapp.com/notes/${id}`)
      history.push('/')
    }

    return (
        <div className="base container-fluid">
          <div className="title">
          <Link to='/'>
            <Button className="mb-4" variant="warning">Back</Button>{' '}
            </Link>
            {!loading && <h1>Your Note</h1>}
            {loading && <h1>Loading...</h1>}
            {error && <h1 >{ error }</h1> }
            </div>
        {notes && notes.map((note) => (
            <div key={note.id}>
                <Card className="mx-auto mt-5" border="light" style={{ width: '18rem' }}>
    <Card.Header className="bg-warning"></Card.Header>
    <Card.Body>
      <Card.Title>{note.title}</Card.Title>
      <Card.Text>
      {note.description}
      </Card.Text>
    <EditNote note={note} />
      <Button className="m-2" variant="danger" size="sm"
      onClick={() => deleteNote(note.id)}>
    Delete
  </Button>
    </Card.Body>
  </Card>
  
  <br />
            </div>
        ))}
        </div>
    )
}

export default ViewNote
