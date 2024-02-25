import axios from 'axios'
import { useState, useEffect } from "react";
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] =  useState(null)
const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts?_limit=')
const [limit, setLimit] = useState('10')

useEffect(() => {
    const getData = async () => {
        try {
            const response = await axios.get(`${url}${limit}`)
            setData(response.data)
            setError(null)
        } catch (err) {
            setError(err.message)
            setData(null)
        } finally {
            setLoading(false)
        }
    }
    getData()
}, [])

