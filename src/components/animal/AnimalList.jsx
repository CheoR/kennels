import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below.
  const { animals, getAnimals } = useContext(AnimalContext)

  // useEffect - reach out to the world for something
  // Careful not to replace [] with getAnimals() - else infinite loop
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()
  }, []) // useEffect

  return (
    <>
     <h2>Animals</h2>
    <div className="animals">
      {
        /* <AnimalCard /> is actually a function and the keys are properties, not HTML attributes. */
        animals.map(animal => <AnimalCard key={ animal.id } animal={ animal }/> ) // animals.map
      }
    </div>
    </>
  ) // return
} // AnimalList
