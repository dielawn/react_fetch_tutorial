import { useEffect, useState } from "react";

const useImageURL = (index) => {
    const [imageURL, setImageURL] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })
        .then((response) => {
            if (response.status >= 400) {
                throw new Error('server error')
            }
            return response.json()
        })
        .then((response) => setImageURL(response[index].url))
        .catch((error) => setError(`Error in fetch ${error}`))
        .finally(() => setLoading(false))
    }, [])
    return {imageURL, error,loading}
}

export const Image = ({index}) => {
    const {imageURL, error, loading} = useImageURL(index)

    if (error) return <p>A network error was encountered: {error}</p>
    if (loading) return <p>Loading...</p>
    return (
        imageURL && (
            <>
                <h1>An Image</h1>
                <img src={imageURL} alt="text" />
            </>
        )
    )
}