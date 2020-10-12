import React from 'react'
import { Link } from 'react-router-dom'

export default function LaunchItem (props) {
  const { launch } = props
  console.log(launch)
  return (
    <div className='LaunchItenContainer'>
      <div className='textWrapper'>
        <div className='left'>
          <h4>{`Mission: ${launch.mission_name}`}</h4>
        </div>
        <div className='right'>
          <p>
            {`Launch date: ${launch.launch_date_local}`}
          </p>
        </div>
      </div>
      <div className="buttonWrapper">
          <Link to={`/launch/${launch.flight_number}`}>Launch Details</Link>
      </div>
    </div>
  )
}
