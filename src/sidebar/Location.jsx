import React from 'react'
import InputField from '../components/inputField'

const Location = ({handLeChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'> Location</h4>
        <div>
            <label className="sidebar-label-container">
                <input type="radio" name="test" id="test" value="" onChange={handLeChange}/>
                <span className='checkmark'></span>All
            </label>

            <InputField 
            handLeChange={handLeChange} 
            value="london"
             title="London"
              name="test"
              />
            <InputField 
            handLeChange={handLeChange}
             value="seattle" 
             title="Seattle" 
             name="test"
             />
            <InputField 
            handLeChange={handLeChange} 
            value="madrid" 
            title="Madrid"
             name="test"
             />
             <InputField 
            handLeChange={handLeChange} 
            value="boston" 
            title="Boston"
             name="test"
             />
             
        </div>
    </div>
  );
};

export default Location;