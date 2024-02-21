import axios from 'axios'

const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '8cda627235msh5237552780a4a2bp196793jsn458f1e7ba9a5',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

 export const fetchDataApi= async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
  }