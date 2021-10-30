// React Bootstrap
import { Button } from 'react-bootstrap'
// RRD
import { Link } from 'react-router-dom'
// Fetch Hook
import { useFetch } from '../../hooks/useFetch'
// Home CSS
import './Home.css'
// Component
import NoteList from '../../components/NoteList'

function Home() {
    const { data: notes, loading, error } = useFetch('https://notes-app-api2021.herokuapp.com/notes')

    return (
        <div className="base container-fluid">
            <div className="title">
            <Link to='/createnote'>
            <Button className="mb-4" variant="warning">Create A Note</Button>{' '}
            </Link>
            {!loading && <h1>Notes</h1>}
            {loading && <h1>Loading...</h1>}
            {error && <h1 >{ error }</h1> }
            </div>
            {notes && <NoteList notes={notes} />} 
            </div>
    )
}

export default Home
