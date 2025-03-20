// src/components/UserList.js
import React from 'react';

const users = [
    { name: "Alice", email: "alice@example.com", age: 25 },
    { name: "Bob", email: "bob@example.com", age: 30 },
    { name: "Charlie", email: "charlie@example.com", age: 22 },
    { name: "David", email: "david@example.com", age: 28 },
    { name: "Eve", email: "eve@example.com", age: 27 }
];

const UserList = () => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white shadow-lg rounded-lg border border-gray-200"
                    >
                        <h3 className="text-lg font-semibold">{user.name}</h3>
                        <p className="text-gray-600">Email: {user.email}</p>
                        <p className="text-gray-600">Age: {user.age}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
