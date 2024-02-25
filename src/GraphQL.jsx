import { useState, useEffect } from "react";
import axios from "axios";

const useQuery = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] =  useState(null)
    const [url, setUrl] = useState('https://api.spacex.land/graphql/')
    const [limit, setLimit] = useState('5')

const queriedData = `{
    launchesPast(limit: ${limit}) {
        id
        mission_name
    }
}`

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.post(url, {
                query: queriedData
            })
            console.log(response)
            setData(response.data)
            setError(null)
        } catch (err) {
            setError(err.message)
            setData(null)
        } finally {
            setLoading(false)
        }
    }
    fetchData()
}, [url])
return {data, loading, error}
}

export function QueriedResponse() {
    const {data, loading, error} = useQuery()
    console.log(data)
    if (error) return <p>A network error was encountered: {error}</p>
    if (loading) return <p>Loading...</p>
    return (
        <>
            <p>check the console for response</p>
        </>
    )
}