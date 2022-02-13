import axios from "axios"

const getService = async () => {
  return await axios({
    method: "GET",
    baseURL: 'http://localhost:3030/'
  })
    .then(response => response)
    .catch(err => console.log(err))
}

export default getService