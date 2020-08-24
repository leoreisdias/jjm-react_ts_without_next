import axios from 'axios'

const coffeeApi = axios.create({
    baseURL: 'https://www.quandl.com/api/v3/datasets/CEPEA/COFFEE_A.json?api_key=_RbP96zQi7xi45S2DLft',
})

export default coffeeApi;