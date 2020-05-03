import React from 'react'
import Table from "material-table"

export default function Staff() {
  return (
    <div style={{ maxWidth: "100%" }}>
        <Table
          columns={[
            { title: "Name", field: "name" },
            { title: "Status",
              field: "status",
            },
            {
              title: "Role",
              field: "role"
            }
          ]}
          data={[
            { name: "Safal Bastola", status: "Present", role: "Accountant"}
          ]}
          title="Staff"
        />
    </div>
  )
}