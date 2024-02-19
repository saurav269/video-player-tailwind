import axios from 'axios'

const BASE_URL = "https://youtube138.p.rapidapi.com"
const options = {
  params: {
    hl: 'en',
    gl: 'IN'
  },
  headers: {
    'X-RapidAPI-Key': '27586bcaf0msh724ee70e591f2dcp15d4e1jsndf8f3f627f14',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

 export const fetchDataApi= async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
  }