import React, {Fragment} from 'react'
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'

const LAUNCH_QUERY = gql`
query LaunchQuery($flight_number: Int!){
    launch(flight_number: $flight_number) {
        flight_number
        mission_name
        launch_year
        launch_date_local
        rocket{
            rocket_id
            rocket_name
            rocket_type
        }
    }
}
`
export default function Launch(props) {
    let { flight_number } = props.match.params
    flight_number = parseInt(flight_number)

    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: { flight_number }
    })
  
    const MissionName = data && data.launch.mission_name
    const LaunchYear = data && data.launch.launch_year
    // const { mission_name, launch_year } = data.launch
    return (
        <Fragment>
            {loading ? <h4>Loading...</h4> : null}
            {error ? console.log(error): null}
            <h1>{MissionName}</h1>
            <h1>{LaunchYear}</h1>
            <Link to='/'>Back</Link>
        </Fragment>
    )
}
