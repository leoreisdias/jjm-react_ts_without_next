import axios from 'axios'

const dollarToReal = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=98a51ff15603ee1f9397',
})

export default dollarToReal;