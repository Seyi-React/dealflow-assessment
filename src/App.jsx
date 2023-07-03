import React,{useState,useEffect} from "react"
import FreelancerList from "./FreelancerList/FreelancerList"
import SearchFilter from "./SearchList/SearchList"
import { fetchFreelancers } from "./Freelancers/mockAPI"

const App = () => {
  const [freelancers, setFreelancers] = useState([]);
  const [filteredFreelancers, setFilteredFreelancers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFreelancers();
      setFreelancers(data);
      setFilteredFreelancers(data);
    };

    fetchData();
  }, []);

  const handleFilterChange = (filter) => {
    const filteredData = freelancers.filter((freelancer) => {
      const nameMatch = freelancer.name.toLowerCase().includes(filter.toLowerCase());
      const companyMatch = freelancer.company.toLowerCase().includes(filter.toLowerCase());
      return nameMatch || companyMatch;
    });

    setFilteredFreelancers(filteredData);
  };

  return (
    <div>
      <h1>Freelancers</h1>
      <SearchFilter onFilterChange={handleFilterChange} />
      <FreelancerList freelancers={filteredFreelancers} />
    </div>
  );
};

export default App;
