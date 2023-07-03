// mockAPI.js
const fetchFreelancers = async () => {
 
  const data = [
    { name: 'John Doe', company: 'ABC Company' },
    { name: 'Jane Smith', company: 'XYZ Corporation' },
    { name: 'Jane Davies', company: 'XY Corporate' },
    { name: 'david Smith', company: 'Javascript company' },
    { name: 'Hello world', company: 'Programming company' },
    { name: 'Kent Willy', company: 'Willy Ent' },
    { name: 'Shadow smellow', company: 'Shadow company & co' },
    { name: 'jack bawer', company: 'Bawer company' },
    { name: 'Shent asher', company: 'Asher Corporate' },
   
  ];
  return data;
};

export { fetchFreelancers };

