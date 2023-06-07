import React from 'react'

const List = ({ title, children }) => {
    return ( 
        <div>
            <h3>{title}</h3>
            {children}
        </div>
     );
}
 
export default List;