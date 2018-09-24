import React from 'react'
import { Post } from 'pages'
import { Route, Link } from 'react-router-dom'

const Posts = ({match}) => {
  return (
    <div>
      <h3>Post list</h3>
    <ul>
      <li><Link to={`${match.url}/1`}>Post 1</Link></li>
      <li><Link to={`${match.url}/2`}>Post 2</Link></li>
      <li><Link to={`${match.url}/3`}>Post 3</Link></li>
    </ul>
    <Route exact patch={match.url} render={()=> (
      <p>포스트를 선택하세요.</p>
    )}/>
    <Route exact path={`${match.url}/:id`} component={Post} />
    </div>
  )
}

export default Posts