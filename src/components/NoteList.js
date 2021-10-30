// react bootstrap
import { Card, Button} from 'react-bootstrap';
// RRD
import { Link } from 'react-router-dom';

function NoteList({notes}) {
   
    return (
        <>
        {notes.map((note) => (
            <div key={note.id}>
                <Card className="mx-auto" border="light" style={{ width: '18rem' }}>
    <Card.Header className="bg-warning"></Card.Header>
    <Card.Body>
      <Card.Title>{note.title}</Card.Title>
      <Card.Text>
      {note.description}
      </Card.Text>
      <Link to={`/viewnote/${note.id}`}>
      <Button className="m-2" variant="warning" size="sm">
    View
  </Button>
  </Link>
    </Card.Body>
  </Card>
  
  <br />
            </div>
        ))}
        </>
    )
}

export default NoteList
