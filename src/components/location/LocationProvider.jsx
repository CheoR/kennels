import React, { createContext, useState } from "react"


export const LocationContext = createContext()


export const LocationProvider = ( props ) => {

 const [locations, setLocations] = useState([])

 const getLocations = () => {
  //  return fetch("http://localhost:8088/locations")
   return fetch("http://localhost:8088/locations?_embed=employees&_embed=animals")
   .then(res => res.json())
   .then(setLocations)
 } // getLocations

 const addLocation = ( locationObj ) => {
  return fetch("http://localhost:8088/locations", {
   method: 'POST', 
   headers: {
    "Content-Type": "application/json"
   },
   body: JSON.stringify(locationObj)
  })
  .then(getLocations)
 } // addLocation


 const getLocationById = ( id ) => {
   console.log(`I am fetching: ${id}`)
   return fetch(`http://localhost:8088/locations/${id}?_embed=employees&_embed=animals`)
    .then(res => res.json())
 }  // getLocationById

 return (
  <LocationContext.Provider value={{
   locations,
   getLocations,
   addLocation,
   getLocationById
  }}>
   { props.children }
  </LocationContext.Provider>
 ) // return
} // LocationProvider
