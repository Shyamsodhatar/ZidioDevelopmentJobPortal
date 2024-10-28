import React from 'react'
import Button from './Button'
import InputField from '../components/inputField'

const Salary = ({handLeChange,handLeClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>
            Salary
        </h4>
        <div className='mb-4'>
            <Button onClickHandLer={handLeClick} vaLue="" titLe="Hourly" />
            <Button onClickHandLer={handLeClick} vaLue="Monthly" titLe="Monthly" />
            <Button onClickHandLer={handLeClick} vaLue="Yearly" titLe="Yearly" />
        </div>
        <div>
            <label className="sidebar-label-container">
                <input 
                type="radio"
                name="test" 
                id="test"
                value=""
                onChange={handLeChange}
                />
                <span className='checkmark'></span>All
            </label>

            <InputField
            handLeChange={handLeChange} 
            value={30}
             title="< 30000k"
              name="test2"
              />
              <InputField
            handLeChange={handLeChange} 
            value={50}
             title="< 50000k"
              name="test2"
              />
              <InputField
            handLeChange={handLeChange} 
            value={80}
             title="< 80000k"
              name="test2"
              />
              <InputField
            handLeChange={handLeChange} 
            value={100}
             title="< 100000k"
              name="test2"
              />
              </div>
    </div>
    
  )
}

export default Salary