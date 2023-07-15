// import React, { useEffect, useState } from 'react';
// import Card from './Card';

// const UserCard = () => {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         fetch('https://reqres.in/api/users?page=2')
//             .then(response => response.json())
//             .then(data => setUserData(data.data))
//             .catch(error => {
//                 console.error('Error fetching user data:', error);
//                 setUserData([]);
//             });
//     }, []);

//     if (userData === null) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             {userData && userData.map(user => (
//                 <Card key={user.id} user={user} />
//             ))}
//         </div>
//     );
// };

// export default UserCard;
import React, { useEffect, useState } from 'react';
import Card from './Card';

const UserCard = () => {
    const [userData, setUserData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(data => setUserData(data.data));
    }, []);

    const filteredData = userData.filter(user =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    if (userData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='search-container'>
                <input
                    className='input-bar'
                    type="text"
                    placeholder="Search by first name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            {filteredData.length === 0 ? (
                <div>No results found</div>
            ) : (
                filteredData.map(user => (
                    <Card key={user.id} user={user} />
                ))
            )}
        </div>
    );
};

export default UserCard;

