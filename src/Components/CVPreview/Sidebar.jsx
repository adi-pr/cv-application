import React from 'react'

const Sidebar = ({ personalInfo }) => {
    const {address, phoneNumber, email, pfp} = personalInfo
    console.log("🚀 ~ file: Sidebar.jsx:5 ~ Sidebar ~ pfp:", pfp)
    
    return ( 
        <div className='sidebar'>
            <img alt="pfp preview" src={pfp}/>
            <p>Personal Details</p>
            <section>
                <div className='sidebarHeader'>Address</div>
                <div>{address}</div>
            </section>
            <section>
                <div className='sidebarHeader'>Phone Number</div>
                <div>{phoneNumber}</div>
            </section>
            <section>
                <div className='sidebarHeader'>Email</div>
                <div>{email}</div>
            </section>
        </div>
     );
}
 
export default Sidebar;