import { useEffect, useState } from "react";

export const Image = () => {
    const [imageURL, setImageURL] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })
        .then((response) => response.json())
        .then((response) => setImageURL(response[0].url))
        .catch((error) => console.error(`Error in fetch: ${error}`))
    }, [])

    return (
        imageURL && (
            <>
                <h1>An Image</h1>
                <img src={imageURL} alt="text" />
            </>
        )
    )
}