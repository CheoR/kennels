import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"


export const AnimalDetail = () => {

 const { getAnimalById } = useContext(AnimalContext)
 /*
  use {} for inital state since getAnimalById returns data as an object {} 
 */
 const [animal, setAnimal] = useState({})

 /*
  useParams: allows app to read url parameter
  React ApplicatinView sees /animals/detail/:animalId(\d+)
  http://localhost:3000/animals/detail/3 react captures the 3 and passes it to animalId
 */
 const { animalId } = useParams()
 const history = useHistory()

 useEffect(() => {
  console.log(`useEffect - animal: ${ animalId }`)
  getAnimalById(animalId)
   .then(res => setAnimal(res))
 }, []) // useEffect

 /*
  Immediate properties of an empty object will not break if you try to reference that property but it doesn't actually exist,
   however nested properties of an empty object will. Use the Optional chaining (?.) operator to prevent nested values from
    breaking the code. Try replacing "name" with "foo" in the code above ( since location and customer don't have a "foo"
     property ). Try it with and without the ?. One will cause an error and the other won't.
 */
 return (
   <section className="animal">
    <h3 className="animal__name">{ animal.name }</h3>
    <div className="animal__breed">{ animal.breed }</div>
    <div className="animal__location">Location: { animal.location?.name }</div>
    <div className="animal__location">Location: { animal.location?.address }</div>
    <div className="animal__location">Location: using ?.foo { animal.location?.foo }</div>
    <div className="animal__owner">Customer: { animal.customer?.name }</div>
    <div className="animal__owner">Customer: using ?.foo { animal.customer?.foo }</div>
   </section>
 ) // return
} // AnimalDetail