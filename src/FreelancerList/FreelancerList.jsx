import React, { useState, useEffect } from "react";
import { fetchFreelancers } from "../Freelancers/mockAPI";
import Pagination from "../Pagination/Pagination";

const FreelancerList = ({ freelancers }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredFreelancers, setFilteredFreelancers] = useState([]);
  
    const freelancersPerPage = 10;
  
    useEffect(() => {
      setFilteredFreelancers(freelancers);
    }, [freelancers]);
  
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