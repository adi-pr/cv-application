import React from 'react'

const Sidebar = ({ personalInfo }) => {
    const {address, phoneNumber, email} = personalInfo
    
    return ( 
        <div className='sidebar'>
            <p>Personal Details</p>
            <section>
                <p>Address</p>
                <p>{address}</p>
            </section>
            <section>
                <p>Phone Number</p>
                <p>{phoneNumber}</p>
            </section>
            <section>
                <p>Email</p>
                <p>{email}</p>
            </section>
        </div>
     );
}
 
export default Sidebar;