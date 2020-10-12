import React, { Fragment } from 'react'
import { useQuery, gql } from '@apollo/client'

import LaunchItem from './LaunchItem.js'

const LAUNCHES_QUERY = gql`

    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
        }
    }

`
function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY)
    if(loading) return <h4>Loading ...</h4>
    if (error) return console.log(error)
    return (
        <div>
            <h1>Launches</h1>
             <Fragment>
                   {data.launches.map(launch => (
                       <LaunchItem launch={launch} key={launch.flight_number} />
                   ))}
               </Fragment>
        </div>
    )
}

export default Launches
