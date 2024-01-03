import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

export const getNotes = () =>
  axios
  .get(baseUrl)
  .then(response => response.data)

export const createNote = (newNote) => {
  axios
  .post(baseUrl, newNote)
  .then(response => response.data)
}

export const updateNote = (updatedNote) => {
  axios
  .put(`${baseUrl}/${updatedNote.id}`, updatedNote)
  .then(response => response.data)
}
  