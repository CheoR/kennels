import React, { useContext, useEffect } from "react"
import { Location } from "./Location"
import { LocationContext } from "./LocationProvider"


export const LocationList = () => {

 const { locations, getLocations } = useContext(LocationContext)

 useEffect(() => {
  getLocations()
 }, []) // useEffect

 return ( 
  <>
   <h2>Locations</h2>
   <article className="locations">
    {
     locations.map(location => <Location key={ location.id } location={ location } />)
    }
   </article>
  </>
 )
} // LocationList
