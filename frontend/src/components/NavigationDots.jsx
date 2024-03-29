import React from 'react';


const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
                  
                <a key={item+index}
               
                    href={`#${item}`}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                >

                      {/* Visually hidden text for screen readers */}
                      {/* to remove eslint error */}
                      <span style={{ display: 'none' }}>Go to {item}</span>

                </a>
            ))}
        </div>
    )
}

export default NavigationDots
