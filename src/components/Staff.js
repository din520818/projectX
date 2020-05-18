import React, {useState, useEffect} from 'react'
import MaterialTable from "material-table"
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
        <MaterialTable
        title="Staff"
        columns={[
          { title: 'Staff Id', field: 'staffId' },
          { title: 'Name', field: 'name' },
          {
            title: 'Status',
            field: 'status',
          },
          {
            title: 'Role',
            field: 'role',
          },
        ]}
        data={[
              {
                name: "Safal Bastola",
                staffId: 1,
                status: "Present",
                role: "Accountant"
              },
              {
                name: "Dinesh Bhusal",
                staffId: 2,
                status: "Present",
                role: "Accountant"
              },
              {
                name: "Pradeep Banjade",
                staffId: 3,
                status: "Present",
                role: "Manager"
              }
        ]}
      />
    </div>
  )
}