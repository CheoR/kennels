import React, { useState, createContext } from "react"

/*
 Export context so components that need the data 
 can use the data they provide.

 Context stores certain kinds of data to be used in your apps.
 When you createa a data provider component in React, you need to create a context.
 Nothing is stored in the context when it's defined.
 Initially it's just an empty warehouse ready to be filled.
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
 } // getAnimals


const addAnimal = animalObj => {
 return fetch("http://localhost:8088/animals", {
  method: "POST",
  headers: {
   "Content-Type": "application/json"
  },
  body: JSON.stringify(animalObj)
 })
 .then(getAnimals)


 /*
  You return this context provider.
  The AnimalProvider has the following accessible keys:
  getAnimals - variable state of the animal variable
  addAnimal - function to add animal to api 
  getAnimals - function to get animals from api
 */
 return (
  <AnimalContext.Provider value={{
   animals, getAnimals, setAnimals
  }}>
   { props.children }
  </AnimalContext.Provider>
 ) // return
} // addAnimal

} // AnimalProvider