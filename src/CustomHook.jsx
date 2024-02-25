import useFetch from "react-fetch-hook";

const url = "https://jsonplaceholder.typicode.com/posts?_limit=10"

export default function FetchHook() {
    const {isLoading, data, error} = useFetch(url)
    return (
        <div className="App">
        <h1>API Posts</h1>
        {isLoading && <div>A moment please...</div>}
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