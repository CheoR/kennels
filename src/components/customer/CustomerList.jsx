import React, { useContext, useEffect } from "react"
import { Customer } from "./Customer"
import { CustomerContext } from "./CustomerProvider"

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(() => {
    getCustomers()
  }, []) // useEffect

  return (
 <>
   <h2>Customers</h2>
   <article className="customers">
    {
     customers.map(customer => <Customer key={ customer.id }  customer={ customer }/>)
    }
  </article>
 </>
  )
} // CustomerList
