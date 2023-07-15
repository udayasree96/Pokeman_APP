import React from 'react';

const Card = ({ user }) => {
    return (
        <div className="user-card">

            <div className="avatar-container">
                <img className="avatar" src={user.avatar} alt="User Avatar" />
                <div className="badge">{user.id}</div>
            </div>
            <div className="firstname">{user.first_name}</div>
        </div>
    );
};

export default Card;
