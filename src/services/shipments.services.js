import axios from 'axios';
const API_URL = 'https://intotu-test.winfad.com/api/';

const postShipments = (data) => {
  const headers = {
    'Content-Type': 'application/json'
  }

  return axios
    .post(`${API_URL}shipments`, data, {
      headers: headers,
      body: JSON.stringify(data)
    }).then((response) => {
      console.log('isi response', response)
      return response.data
    })
}

export default {postShipments}