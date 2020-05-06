import React, {useState} from 'react'
import Table from "material-table"
import {APIURL} from '../config/CONFIG.json';

export default function Staff() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch(`${APIURL}/staff`)
      .then(res => res.json())
      .then(data => setPeople(data))
  },[])

  return (
    <div style={{ maxWidth: "100%" }}>
        <Table
          columns={[
            { title: "Name",
              field: "name" 
            },
            {
              title: "Status",
              field: "status",
            },
            {
              title: "Role",
              field: "role"
            }
          ]}
          data={
            people.map(person => (
              {
                name: person.name,
                status: person.status,
                role: person.role
              }
            ))
          }
          title="Staff"
        />
    </div>
  )
}