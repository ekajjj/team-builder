import React from 'react';
import { useState, useEffect } from 'react'; 
import { Container } from 'reactstrap';
import './App.css';

import Form from './Components/Form';
import MemberCard from './Components/MemberCard';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id:1,
      name: 'Jake Johnson',
      email: 'jakejjohnson@gmail.com',
      role: 'Web Dev'
      

    }])
  const addMember = person => {
    const newMember = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role
    };
    setTeamMembers([...teamMembers, newMember])
  };


  return (
    <div>
      <Form addMember={addMember}/>
      <MemberCard member={teamMembers}/>
    </div>

  );
}

export default App;