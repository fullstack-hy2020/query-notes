import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getNotes, createNote } from './requests'

const App = () => {
  const queryClient = useQueryClient()

  const newNoteMutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] })
    },
  })

  const result = useQuery({
    queryKey: ['notes'],
    queryFn: getNotes
  })

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.reset()
    newNoteMutation.mutate({ content, important: true })
  }

  const toggleImportance = (note) => {
    console.log('toggle importance of', note.id)
  }
 
  if (result.isPending) {
    return <div>loading data...</div>
  }
 
  const notes = result.data

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.important ? <strong>{note.content}</strong> : note.content}
        </li>
      ))}
    </div>
  )
}

export default App