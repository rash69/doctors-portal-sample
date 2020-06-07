import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faClock, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
const Content = () => {
    const [contents] = useState([
        {
            'icon': <FontAwesomeIcon className="fa-2x" icon={faClock} />,
            'title': 'Opening Hours',
            'info': 'Lorem ipsum dolor sit amet'
        },
        {
            'icon': <FontAwesomeIcon className="fa-2x" icon={faLocationArrow} />,
            'title': 'Location',
            'info': '2/A, House-201, Gulsan'
        },
        {
            'icon':  <FontAwesomeIcon className="fa-2x" icon={faPhone} />,
            'title': 'Contact us',
            'info': 'Contact - +8801750648751'
        }
    ])
    return (
        <div className="row">
            {
                contents.map((item, index)=> {
                    return <article key={index} className='col-md-4'>
                        <span>{item.icon}</span>
                        <h5>{item.icon}{item.title}</h5>
                        <p>{item.info}</p>
                    </article>
                })
            }
            </div>
    );
};

export default Content;