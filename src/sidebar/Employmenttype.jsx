import React from 'react'
import InputField from '../components/inputField'

const Employmenttype = ({handLeChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Type of Emplyment </h4>
        <div>
            <label className="sidebar-label-container">
                <input type="radio" name="test" id="test" value="" onChange={handLeChange}/>
                <span className='checkmark'></span>Any experience
            </label>

            <InputField
            handLeChange={handLeChange} 
            value="full-time"
             title="Full-time"
              name="test"
              />
              <InputField
            handLeChange={handLeChange} 
            value="temporary"
             title="Temporary"
              name="test"
              />
            <InputField 
            handLeChange={handLeChange}
             value="part-time" 
             title="Part-time" 
             name="test"
             />
           
             
        </div>
    </div>
  )
}

export default Employmenttype