import { useState, useEffect } from "react";
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] =  useState(null)
const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts?_limit=')
const [limit, setLimit] = useState('10')

useEffect(() => {
    async function getData() {
        try {
            const response = await fetch(`${url}${limit}`)
            if (!response.ok) {
                throw new Error(`This is an respose error: The status is ${response.status}`)
            }
            let actualData = await response.json()
            setData(actualData)
            setError(null)
        } catch(err) {
            setError(err.message)
            setData(null)
        } finally {
            setLoading(false)
        }        
    }
    getData()
}, [])