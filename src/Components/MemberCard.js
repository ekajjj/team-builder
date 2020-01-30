import React from 'react';
import { Container } from 'reactstrap';

const MemberCard = props => {
    console.log("MemberCard props", props)
    return (
        <div>
            {props.member.map(member => (
                <Container className='member-container' key={member.id}>
                    <h2> {member.name} </h2>
                    <p> {member.email} </p>
                    <p> {member.role} </p>
                </Container>
            ))}
        </div>
    )
}
export default MemberCard;