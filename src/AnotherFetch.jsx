import { useState, useEffect } from "react";

export default function Fetch() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] =  useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=8')
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `This is an response error, status: ${response.status}`
                )
            }
            return response.json()
        })
        .then((actualData) => setData(actualData))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false))
    }, [])
    return (
        <div className="App">
        <h1>API Posts</h1>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
          {data &&
            data.map(({ id, title }) => (
              <li key={id}>
                <h3>{title}</h3>
              </li>
            ))}
        </ul>
      </div>
    )
  }