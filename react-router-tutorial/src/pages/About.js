import React from 'react'
import queryString from 'query-string'

const About = ({location, match}) => {
  const query = queryString.parse(location.search)
  const { color } = query
  console.log(query, color)
  return (
    <div>
      <h2 style={{ color }}>Introduce</h2>
      <p>
        Hello, It's react router.
      </p>
    </div>
  )
}

export default About