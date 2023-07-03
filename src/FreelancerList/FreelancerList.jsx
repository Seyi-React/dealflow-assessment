import React, { useState, useEffect } from "react";
import {fetchFreelancers} from "../Freelancers/mockAPI";
import Pagination from "../Pagination/Pagination";


const FreelancerList = () => {
  const [freelancers, setFreelancers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredFreelancers, setFilteredFreelancers] = useState([]);
 

  const freelancersPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFreelancers();
      setFreelancers(data);
      setFilteredFreelancers(data);
    };

    fetchData();
  }, []);

  const renderFreelancers = () => {
    const startIndex = (currentPage - 1) * freelancersPerPage;
    const endIndex = startIndex + freelancersPerPage;
    const currentFreelancers = filteredFreelancers.slice(startIndex, endIndex);

    return currentFreelancers.map((freelancer) => (
      <div key={freelancer.name}>
        {freelancer.name} - {freelancer.company}
      </div>
    ));
  };

 
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  

  const handleFilterChange = (filter) => {
    setFilter(filter);

    const filteredData = freelancers.filter((freelancer) => {
      const nameMatch = freelancer.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      const companyMatch = freelancer.company
        .toLowerCase()
        .includes(filter.toLowerCase());
      return nameMatch || companyMatch;
    });

    setFilteredFreelancers(filteredData);
    setCurrentPage(1); // Reset the current page to the first page after filtering
  };

  return (
    <div>
      
      {renderFreelancers()}
      <Pagination
        currentPage={currentPage}
        freelancersPerPage={freelancersPerPage}
        totalFreelancers={filteredFreelancers.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default FreelancerList;
