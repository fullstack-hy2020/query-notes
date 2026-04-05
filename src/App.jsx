import { useNotes } from './hooks/useNotes'

const App = () => {
  const { notes, isPending, addNote: addNoteToServer, toggleImportance } = useNotes()

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.reset()
    addNoteToServer(content)
  }

  if (isPending) {
    return <div>loading data...</div>
  }

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map((note) => (
        <li key={note.id}>
          {note.important ? <strong>{note.content}</strong> : note.content}
          <button onClick={() => toggleImportance(note)}>
            {note.important ? 'make not important' : 'make important'}
          </button>
        </li>
      ))}
    </div>
  )
}

export default App