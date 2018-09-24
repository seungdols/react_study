import React from 'react'

const About = ({match}) => {
  return (
    <div>
      <h2>Introduce</h2>
      <p>
        Hello, It's react router.
        My name is {match.params.name}.
      </p>
    </div>
  )
}

export default About