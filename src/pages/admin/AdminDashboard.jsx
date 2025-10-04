import React from 'react'
import EmployeeList from './EmployeeList'
import EmployeeForm from './EmployeeForm'

const AdminDashboard = () => {
  return (
    <div>
      <div>
        Admin Dashboard
      </div>
      <div>
        <EmployeeList />
      </div>
      <div>
        <EmployeeForm />
      </div>
      <div>
        demo1
      </div>
      <div>
        demo2
      </div>
    </div>

  )
}

export default AdminDashboard
