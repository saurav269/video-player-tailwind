import axios from 'axios'

const BASE_URL = "https://youtube138.p.rapidapi.com"
const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'ef2f8fc957msh9b71321579511adp19a3e6jsn9b0c29ad625b',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchDataApi= async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
  }