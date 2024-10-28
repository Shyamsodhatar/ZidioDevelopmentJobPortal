import React from 'react'
import InputField from '../components/inputField'

const JobPostingData = ({handLeChange}) => {
    const now=new Date();
    const twentyFourHoursAgo=new Date(now - 24 *60 *60 *1000);
    const SevenDaysAgo=new Date(now - 7 * 24*60 *60 *1000);
    const ThirtyDaysAgo=new Date(now - 30 * 24  * 60 *60 *1000);
    // console.log(twentyFourHoursAgo);


    // converty date to string 
    const twentyFourHoursAgoDate=twentyFourHoursAgo.toISOString().slice(0,10);
    const SevenDaysAgoDate=SevenDaysAgo.toISOString().slice(0,10);
    const ThirtyDaysAgoDate=ThirtyDaysAgo.toISOString().slice(0,10);
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'> Date of Posting</h4>
        <div>
            <label className="sidebar-label-container">
                <input 
                type="radio"
                name="test"
                id="test"
                value="" 
                onChange={handLeChange}/>
                <span className='checkmark'></span>All Time
            </label>

            <InputField 
            handLeChange={handLeChange} 
            value={twentyFourHoursAgoDate}
             title="Last 24 Hours"
              name="test"
              />
            <InputField 
            handLeChange={handLeChange}
             value={SevenDaysAgoDate} 
             title="Last 7 Days" 
             name="test"
             />
            <InputField 
            handLeChange={handLeChange} 
            value={ThirtyDaysAgoDate} 
            title="Last Month"
             name="test"
             />
             
             
        </div>
    </div>
  )
}

export default JobPostingData