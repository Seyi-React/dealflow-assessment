// mockAPI.js
const fetchFreelancers = async () => {
 
  const data = [
    { name: 'John Doe', company: 'ABC Company' },
    { name: 'Jane Smith', company: 'XYZ Corporation' },
    { name: 'Jane Davies', company: 'XY Corporate' },
    { name: 'david Smith', company: 'Javascript company' },
    { name: 'Hello world', company: 'Programming company' },
  ];
  return data;
};

export { fetchFreelancers };

