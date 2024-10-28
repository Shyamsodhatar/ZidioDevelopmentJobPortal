import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExperience from './WorkExperience'
import Employmenttype from './Employmenttype'

const Sidebar = ({handLeChange,handLeClick}) => {
  return (
    <div className='space-y-5'>
        <h3 classname="text-lg font-bold mb-2">Filters</h3>

        <Location handLeChange={handLeChange}/>
        <Salary handLeChange={handLeChange} handLeClick={handLeClick}/>
        <JobPostingData handLeChange={handLeChange}/>
        <WorkExperience handLeChange={handLeChange}/>
        <Employmenttype handLeChange={handLeChange}/>
    </div>
  )
}

export default Sidebar