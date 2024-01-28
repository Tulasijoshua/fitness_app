import axios from 'axios';
import { rapidApiKey } from '../../constants';

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params) => {
    try {
        const options = {
            method: 'GET',
            url,
            params,
            headers: {
                    'X-RapidAPI-Key': '2ba537d23emsh6d413a813545a6bp184981jsn3b1f1187f840',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
        };
        const response = await axios.request(options);
        return response.data;
    } catch(err) {
        console.log('error', err.message);
    }
}

export const fetchExerciseByBodypart = async (bodyPart) => {
    let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
    return data;
}