import axios from "axios";
import { useQuery } from "react-query";

export default function QueryTutorial() {
    const {isLoading, error, data} = useQuery('posts', () =>
    axios("https://jsonplaceholder.typicode.com/posts?_limit=10")
    )
    console.log(data)
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <div>
            {data && data.data && data.data.map((post) => (
                <p key={post.id}>{post.title}</p> 
            ))}
        </div>
    )
}

