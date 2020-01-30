import React, {useState} from 'react';
import Form from './Components/Form';
import './App.css';
import TeamMembers from './Components/TeamMembers';


function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      first_name: 'Jake' ,
      last_name: 'Johnson' ,
      email: 'jakejjohnson@gmail.com',
      github: 'ekajjj'
    }
  ]);

  const addTeamMember = e => {
    const newTeamMember = {
      id: Date.now(),
      first_name: e.first_name,
      last_name: e.last_name ,
      email: e.email,
      github: e.github
    }
    setTeamMember([...teamMember, newTeamMember])
  }

  const delTeamMember = id => {
    const newArray = teamMember.filter(info => {
      return info.id !== id
    })
    setTeamMember(newArray)
  }

  return (
    <div className="App">
      <div className = 'container'>
      <Form addTeamMember = {addTeamMember} />
      <TeamMembers MemberList = {teamMember} deleteMember = {delTeamMember} />
      </div>
    </div>
  );
}

export default App;