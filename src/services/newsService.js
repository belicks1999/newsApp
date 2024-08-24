import axios from 'axios';


const API_KEY='d49e7316fd814e759186fa1c336bb363';
const Base_URL = `https://newsapi.org/v2/top-headlines?sources=bbc-news,the-verge&apiKey=${API_KEY}`;

export const fetchHeadline=async()=>{

    const response = await axios.get(Base_URL);

    return response.data.articles;

}



