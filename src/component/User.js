import React, {useState, useEffect} from 'react';

export default function User() {
    const [posts, setPosts] = useState([])
    const [ mode, setMode ] = useState('online')


    useEffect(() => {
        let url = "http://jsonplaceholder.typicode.com/users";
        fetch(url).then((response)=>{
            response.json().then((result)=>{
                setPosts(result)
                localStorage.setItem("user", JSON.stringify(result))
            })
        }).catch(err=>{
            let collection = localStorage.getItem("user")
            setPosts(JSON.parse(collection))
            setMode('offline')
            // alert("catch block")
        })
    }, [])


    return(
        <>
        <div>
            {
                mode==='offline'?
                <div className="alert alert-warning">You are in offline mode</div>
                :null
            }
        </div>
         <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>

            { posts.map(post =>  <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.name}</td>
                        <td>{post.username}</td>
                        </tr>)}
                    </tbody>
                </table>

        </>
    )
}
