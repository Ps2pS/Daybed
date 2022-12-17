import React from 'react'

const ListDetails1 = ['Bondi Beach', 'Clovelly', 'Richmond', 'Surry Hills', 'Gold Coast', 'Wollongong']
const ListDetails2 = ['Byron Bay', 'Cairns', 'Melbourne ', 'Fitzroy', 'Hawthorn', 'Sydney']
const ListDetails3 = ['South Yarra', 'St Kilda', 'Collingwood', 'Carlton', 'Newtown', 'Glebe']
const ListDetails4 = ['Coogee', 'Vaucluse', 'Darlinghurst', 'Collaroy', 'North Sydney', 'Crows Nest']
const ListDetails5 = ['Ultimo', 'Redfern', 'Adelaide', 'Surfers Paradise', 'Noosa Heads', 'Caloundra']



function PlaceName() {
    return (
        <div className=' mt-5 placename container d-flex flex-wrap '>
            <div className='place-box'>
                {ListDetails1.map((val) => ( <p>{val}</p> ))}
            </div>
            <div className='place-box'>
                {ListDetails2.map((val) => ( <p>{val}</p> ))}
            </div>
            <div className='place-box'>
                {ListDetails3.map((val) => ( <p>{val}</p> ))}
            </div>
            <div className='place-box'>
                {ListDetails4.map((val) => ( <p>{val}</p> ))}
            </div>
            <div className='place-box'>
                {ListDetails5.map((val) => ( <p>{val}</p> ))}
            </div>
        </div>


    )
}

export default PlaceName
