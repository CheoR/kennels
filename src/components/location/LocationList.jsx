import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Location } from "./Location"
import { LocationContext } from "./LocationProvider"


export const LocationList = () => {

 const { locations, getLocations } = useContext(LocationContext)

 /*
    useHistory: hook that tells React route to visit.
    It has a push() method that can be used to change he URL.
    Here it will be used to tell React to render the location form component.
  */
 const history = useHistory()

 useEffect(() => {
   console.log(`useEffect - list location`)
  getLocations()
 }, []) // useEffect

 return ( 
  <>
   <h2>Locations</h2>
   <button className="form-btn" onClick={() => { history.push("/locations/create") }}>
    Add Location
   </button>
   <article className="locations">
    {
     locations.map(location => <Location key={ location.id } location={ location } />)
    }
   </article>
  </>
 )
} // LocationList
