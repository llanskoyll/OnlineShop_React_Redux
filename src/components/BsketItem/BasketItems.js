import React from 'react';

const BasketItems = ({index,item}) => {

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.brand}</td>
            <td>{item.price}</td>
        </tr>
    );
};

export default BasketItems;