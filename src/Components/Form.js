import React, { useState } from 'react';

const Form = props => {
    console.log("props", props);
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = event => {
        console.log(member);

        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = event => {
        event.preventDefault();
        props.addMember(member);
        setMember({ name:'', email:'', role:''})
    };




    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input  id='name' 
                    name='name' 
                    type="text" 
                    onChange={handleChanges} 
                    value={member.name} />
            <label htmlFor="email">Email</label>
            <input  id='email' 
                    name='email' 
                    type="text" 
                    onChange={handleChanges} 
                    value={member.email} />
            <label htmlFor="role">Role</label>
            <input  id='role' 
                    name='role' 
                    type="text" 
                    onChange={handleChanges} 
                    value={member.role} />
            <button type='submit'>Add Team Member</button>
        </form>
    );
};

export default Form;