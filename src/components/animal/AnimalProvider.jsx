import React, { useState, createContext } from "react"

/*
 Export context so components that need the data 
 can use the data they provide.

 Context stores certain kinds of data to be used in your apps.
 When you createa a data provider component in React, you need to create a context.
 Nothing is stored in the context when it's defined.
 Initially it's just an empty warehouse ready to be filled.

 The component that uses the context will use it in the following way:

import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
 
const { animals, getAnimals } = useContext(AnimalContext)
*/
export const AnimalContext = createContext()


/*
 Component establishes what data is avaialble for use.
 Child components will ahve access to data. React will send object to each component.
 One of the properties will be children which contins child elements.
*/
export const AnimalProvider = ( props ) => {

 /*
  useState - function to hold and set array of animals.
  createContext - function to 
 */
 const [animals, setAnimals] = useState([])


 const getAnimals = () => {
  return fetch("http://localhost:8088/animals?_expand=location")
   .then(res => res.json())
   .then(setAnimals)
   // .then(animalData => setAnimals(animalData))
 } // getAnimals


const addAnimal = ( animalObj ) => {
 return fetch("http://localhost:8088/animals", {
  method: "POST",
  headers: {
   "Content-Type": "application/json"
  },
  body: JSON.stringify(animalObj)
 })
 .then(getAnimals)
} // addAnimal

 /*
  You return this context provider.
  The AnimalProvider has the following accessible keys:
  getAnimals - variable state of the animal variable
  addAnimal - function to add animal to api 
  getAnimals - function to get animals from api

  Other components would be able to access the array of objects being
  sored in the animals variable, and can invoke the getAnimal/addAnimal
  functions.
 */
  console.log(animals)

 return (
  <AnimalContext.Provider value={{
   animals, getAnimals, addAnimal
  }}>
   { props.children }
  </AnimalContext.Provider>
 ) // return
} // AnimalProvider
