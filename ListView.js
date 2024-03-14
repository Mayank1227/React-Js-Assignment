import React from 'react';


const ListView = ({ items }) => {
    return (
        <div>
            <h1>List View</h1>
            <ul>
                {items.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListView;
