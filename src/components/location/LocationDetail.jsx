import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { LocationContext } from "./LocationProvider"

export const LocationDetail = () => {
 
 const { getLocationById } = useContext(LocationContext)
  /*
  use {} for inital state since getAnimalById returns data as an object {} 
 */
 const [location, setLocation] = useState({})
  /*
  useParams: allows app to read url parameter
  React ApplicatinView sees /animals/detail/:animalId(\d+)
  http://localhost:3000/animals/detail/3 react captures the 3 and passes it to animalId
 */
 const { locationId } = useParams()
 const history = useHistory()

 useEffect(() => {
  console.log(`useEffect - detail location: ${ locationId }`)
  getLocationById(locationId)
   .then(res => setLocation(res))
 }, []) // useEffect

 return (
   <section className="location">
    <h3 className="location__name">{ location.name }</h3>
    <div className="location__address">{ location.address }</div>
    <h3 className="location__employees">Employees</h3>
    <ul className="location__employeesList">
      {
        location.employees?.map(employee => <li className="employee" key={employee.id}>{ employee?.name }</li>)
      }
    </ul>
    <h3 className="location__residents">Current Residents</h3>
    <ul className="location__residentList">
      {
        location.animals?.map(animal => <li className="animal" key={animal.id}>{ animal?.name }</li>)
      }
    </ul>
   </section>

 ) // return
} // LocationDetail
