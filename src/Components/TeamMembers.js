import React from 'react';

export default function TeamMembers(props) {
    console.log(props)
    return(
        <>
        Team Members:
        {props.MemberList.map(info => (
                <div className='memberCards' key={info.id}>
                    <h2>{info.first_name} {info.last_name}</h2>
                    <p>{info.email}</p>
                    <p>{info.github}</p>    
                </div>
            
        ))}
        </>
    )
}