import { useEffect, useState } from "react";

export const Image = () => {
    const [imageURL, setImageURL] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })
        .then((response) => {
            if (response.status >= 400) {
                throw new Error('server error')
            }
            return response.json()
        })
        .then((response) => setImageURL(response[0].url))
        .catch((error) => setError(`Error in fetch ${error}`))
    }, [])

    return (
        imageURL && (
            <>
                <h1>An Image</h1>
                <img src={imageURL} alt="text" />
                {error && <p>{error}</p>}
            </>
        )
    )
}