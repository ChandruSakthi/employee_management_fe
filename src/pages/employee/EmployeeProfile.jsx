import React from 'react'
import Sidebar from '../../components/Sidebar'

const EmployeeProfile = () => {
      const role = "EMPLOYEE";
    return (
        // <div>
        //   EmployeeProfile page
        // </div>
        <div style={{ display: "flex" }}>
            <Sidebar role={role} />
            <div>
                EmployeeProfile page
            </div>
        </div>
    )
}

export default EmployeeProfile
