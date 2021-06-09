import React, { useState } from 'react'
import ReactDataTable from 'react-data-table-component'

//

export const DataTable = ({ columns, data, ...props }) => {
  const [query, ] = useState('')

  if (!data) return null

  const tableProps = {
    data: data,
    columns: columns,
    ...props,
  }

  return (
    <ReactDataTable { ...tableProps } />
  )
}
