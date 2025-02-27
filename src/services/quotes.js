import axios from 'axios'
const baseUrl = '/api'
const statsURL = '/stats'


const getAll = (searchTerm, page,strict,selectedValue,selectedMode) => {
    const request = axios.get(baseUrl, {
        params: {  
            searchTerm: searchTerm || '', 
            page: page || 1,   
            strict:strict,
            selectedValue:selectedValue,
            selectedMode:selectedMode
        }
    });
    return request.then(response => response.data);
};


const getStats = () => {
    const request = axios.get(statsURL);
    return request.then(response => response.data);
};

export default {
    getAll: getAll,
    getStats: getStats
}