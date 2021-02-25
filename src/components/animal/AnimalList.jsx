import React from "react"
import { AnimalCard } from "./AnimalCard"


const dogs = [
 {
  id: 1,
  name: "Peggy",
  breed: "Pug"
 },
  {
   id: 2,
  name: "Snippet",
  breed: "Daschund"
 },
  {
   id: 3,
  name: "Burrito",
  breed: "Bulldog"
 },
  {
   id: 4,
  name: "Bark",
  breed: "Golden Retriever"
 },
  {
   id: 5,
  name: "Gif",
  breed: "Labador"
 },
 {
  id: 6,
  name: "Bixo do Coco",
  breed: "Chihuahua"
 }
]

export const AnimalList = () => (
 <>
  <h2>Animals</h2>
   <article className="animals">
    {
     dogs.map(( dog ) => <AnimalCard key={ dog.id } name={ dog.name} breed={ dog.breed }/>)
    }
  </article>
 </>
)
