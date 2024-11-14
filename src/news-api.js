import axios from "axios";

 axios.defaults.baseURL = ' https://newsapi.org/v2/everything';
 const key = '8f1159dd082647efb71a49f696ece6e7';

const fetchData = async (q, page) => {
    const response = await axios.get(`?apiKey=${key}`, {
        params: {
            q,
            page,
            pageSize: 12,
        }
    })
    
    return response.data
}

export default fetchData