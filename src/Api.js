/*Let’s see we an api url www.example.com/api/get/1 
Write a sample code to call this rest api and display the result.
Actually i used the Json fake  Api*/
import React from "react"
import axios from "axios"

class Api extends React.Component {
  constructor(props)
  {
    super(props)
     this.state={
       posts:[]
      }
  }
  
 componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {
    return (
      <ul>
        { this.state.posts.map(posts => <li key={posts.id}>{posts.title}</li>)}
      </ul>
    )
  }
}
export default Api;