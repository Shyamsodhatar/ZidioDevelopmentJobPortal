import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { useState } from 'react';
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const [selectedCategory,setSelectedCategory]=useState(null);
  const [jobs,setJobs]=useState([]);
  const[isLoading,setIsLoading]=useState(true);
  const[currentPage,setCurrentPage]=useState(1);
  const itemsPerPage=6;
  useEffect(()=>{
    setIsLoading(true);
    fetch("http://localhost:3000/all-jobs").then(res => res.json()).then(data=>{
      //console.log(data);
      setJobs(data);
      setIsLoading(false);
    })
  },[])

 // console.log(jobs)

  //handle input change 
  const [query,setQuery]=useState("");
  const handleInputChange=(event)=>{
    setQuery(event.target.value)
    
  }
  //  Filter jobs by title 
  const filteredItems=jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  //console.log(filteredItems);

  // --- radio filtering  
  const  handleChange=(event)=>{
    setSelectedCategory(event.target.value)
  }

  // ---- button based filtering ----
  const handleClick=(event)=>{
    setSelectedCategory(event.target.value)
  }

//calculate the  index range 
const calculatatePageRange=()=>{
  const startIndex=(currentPage-1)*itemsPerPage;
  const endIndex=startIndex+itemsPerPage;
  return {startIndex,endIndex};
} 

// function for the next page 
const nextPage=()=>{
  if(currentPage<Math.ceil(filteredItems.length/itemsPerPage)){
    setCurrentPage(currentPage+1);
  }
}

// function for the previous page 
const prevPage=()=>{
  if(currentPage>1){
    setCurrentPage(currentPage-1);
  }
}

  // main function 
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
  
    // Filter by search query
    if (query) {
      filteredJobs = filteredItems;
    }
  
    // Filter by category
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) => 
          (jobLocation?.toLowerCase() === selected.toLowerCase()) ||
          (parseInt(maxPrice) <= parseInt(selected)) || 
          (postingDate >= selected) ||
          (salaryType?.toLowerCase() === selected.toLowerCase()) ||
          (experienceLevel?.toLowerCase() === selected.toLowerCase()) ||
          (employmentType?.toLowerCase() === selected.toLowerCase())
      );
    }
  
    // Slice the data based on current page
    const { startIndex, endIndex } = calculatatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };
  
  

  const result=filteredData(jobs,selectedCategory,query);

  return (
    <div>
      <Banner query={query} handLeInputChange={handleInputChange}/>
      
      {/* main content */}
      <div className='bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        {/* Ledt Side*/ }
        <div className='bg-white p-4 rounded'>
          <Sidebar handLeChange={handleChange} handLeClick={handleClick}/>
        </div>

        {/*  Job cards */}
        <div className='col-span-2 bg-white p-4 rounded-sm '>
        {
          isLoading ? (<p className='font-medium'>Loading...</p>) : result.length>0 ? (<Jobs result={result}/>):<>
          <h3 className='text-lg font-bold mb-2'>{result.length}Jobs</h3>
          <p>No data found !!!</p>

          </>
        }
           {/* Pagination here*/}
            {
              result.length >0 ?(
                <div className='flex justify-center mt-4 space-x-8'>
                  <button onClick={prevPage} disabled={currentPage===1}
                  className='hover:underline'>Previous</button>
                  <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                  <button onClick={nextPage} disabled={currentPage===Math.ceil(filteredItems.length/itemsPerPage)}
                  className='hover:underline'>
                    Next
                  </button>
                </div>
              ):""
            }
        </div>


        {/* Right Side*/} 
        <div className='bg-white p-4 rounded'><Newsletter/></div>
      </div>
    </div>
  );
};

export default Home;