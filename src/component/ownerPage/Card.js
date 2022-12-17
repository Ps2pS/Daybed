import React from 'react'
import icon1 from '../../assets/images/icon/Icon.png'



function Card() {
    const Feature = [
        {
            id: 1,
            heading: "Lightning Fast Renting",
            text: "No bonds or deposits, book online or via our app choose your move in and move out dates."
        },
        { id: 2, heading: "24/7 Tenant Support", text: "Use the Daybed app to raise tickets for maintence work and get things sorted quickly and efficiently." },
        { id: 3, heading: "Regular Call with Analyst", text: "You can rent entire homes or rooms, co-live with roomates, choose fully furnished or un-furnished." },
        { id: 4, heading: "Real Time Owners Dashboard", text: "Our furnished homes come with premium decor, linen and furnishings selected by our interior designers." },
        { id: 5, heading: "Quality Vetted Tenants", text: "An all-inclusive, in app weekly Daybed payment that covers rent, utilities and internet." },
        { id: 6, heading: "Automated Payments", text: "Transfer to any other Daybed in our nation wide network with just 2 weeks notice." },

    ]
    


    return (
        Feature.map((val, key) => {
            {
                return (
                    <div className='feature-card' key={key} >
                        <img src={icon1} alt="icon-img" className='mt-3' />
                        <h4>{val.heading}</h4>
                        <p>{val.text}</p>
                    </div>
                );
            }
        }))
}

export default Card