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
    <div className="animals">
      { console.log("AnimalList: Render") }
      { console.table(animals) }
      {
        /* <AnimalCard /> is actually a function and the keys are properties, not HTML attributes. */
        animals.map(animal => <AnimalCard key={ animal.id } animal={ animal }/> ) // animals.map
      }
    </div>
  ) // return
} // AnimalList


  // <h2>Animals</h2>
  //  <article className="animals">
  //   {
  //    dogs.map(( dog ) => <AnimalCard key={ dog.id } name={ dog.name} breed={ dog.breed }/>)
  //   }
  // </article>


// const dogs = [
//  {
//   id: 1,
//   name: "Peggy",
//   breed: "Pug"
//  },
//   {
//    id: 2,
//   name: "Snippet",
//   breed: "Daschund"
//  },
//   {
//    id: 3,
//   name: "Burrito",
//   breed: "Bulldog"
//  },
//   {
//    id: 4,
//   name: "Bark",
//   breed: "Golden Retriever"
//  },
//   {
//    id: 5,
//   name: "Gif",
//   breed: "Labador"
//  },
//  {
//   id: 6,
//   name: "Bixo do Coco",
//   breed: "Chihuahua"
//  }
// ]



// export const AnimalList = () => (
//  <>
//   <h2>Animals</h2>
//    <article className="animals">
//     {
//      dogs.map(( dog ) => <AnimalCard key={ dog.id } name={ dog.name} breed={ dog.breed }/>)
//     }
//   </article>
//  </>
// )
