import React from 'react'
import InputField from '../components/inputField'

const WorkExperience = ({handLeChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'> Work Experience</h4>
        <div>
            <label className="sidebar-label-container">
                <input type="radio" name="test" id="test" value="" onChange={handLeChange}/>
                <span className='checkmark'></span>Any experience
            </label>

            <InputField
            handLeChange={handLeChange} 
            value="Internship"
             title="Internship"
              name="test"
              />
            <InputField 
            handLeChange={handLeChange}
             value="Work remotely " 
             title="Work remotely" 
             name="test"
             />
           
             
        </div>
    </div>
  )
}

export default WorkExperience