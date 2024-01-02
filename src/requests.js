import axios from 'axios'

export const getNotes = () =>
  axios
  .get('http://localhost:3001/notes')
  .then(response => response.data)