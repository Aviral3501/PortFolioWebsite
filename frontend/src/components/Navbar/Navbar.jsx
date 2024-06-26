import { useState } from 'react'
import './Navbar.scss';
// import images from '../../constants/images';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      {/* <div className='app__navbar-logo'>
        <img src={images.namelogoaviral} alt='logo'   />
      </div> */}


      <ul className='app__navbar-links'>
        {/* creating array for manu item and mapping them */}
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text '>
            <div></div>
            <a href={`#${item}`}>{item}</a>

          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {
          toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              // it gonna take 300 pixels
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              {/* entire menu list in mobile view */}

              <ul className='app__navbar-links'>
                {/* creating array for manu item and mapping them */}
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item} className=' '>
                    
                    <a href={`#${item}`}  onClick={()=>setToggle(false)} >{item}</a>

                  </li>
                ))}
              </ul>


            </motion.div>
          )
        }

      </div>
    </nav>
  )
}

export default Navbar
