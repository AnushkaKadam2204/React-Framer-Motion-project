import {useState} from 'react'
import {motion} from "framer-motion"
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

const sidebarVarients = {
    open:{x:0, opacity:1, scale:1},
    closed:{ x:"100%", opacity:0, scale:0.8},
}

const containerVarients = {
    open:{
        transition:{
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
    closed:{ 
        transition:{
            staggerChildren: 0.2,
            delayChildren: 0,
        },
     },
}

const itemsVarients ={
    open:{opacity:1,y:0, scale:1 },
    closed: {opacity: 0, y:-20, scale:0.95},
}

const backdropVariants = {
    open: {opacity:0.6},
    closed:{opacity:0},
}

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='relative'>
      {/* backdrop */}
      <motion.div 
      className='fixed inset-0 bg-gray-800' initial="closed" animate={isOpen?"open":"closed"}
      variants={backdropVariants}
      transition={{duration:0.3}}
      onClick={()=> setIsOpen(false)}
      >

      </motion.div>

      {/* sidebar content */}
      <motion.div 
      variants={sidebarVarients}
      initial='closed'
      animate={isOpen? 'open': "closed"}
      transition={{type: "spring", stiffness:300, damping:30}}
      className='fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg'>
        <div className="p-4">
            <button className="absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-full focus:outline-none">
                <IoMdArrowBack onClick={()=>setIsOpen(!isOpen)} className="h-6 w-6"/>
            </button>
            <h2 className="text-2xl font-bold mb-4"> Filters</h2>
            <motion.div className='space-y-4'
            variants={containerVarients}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            >
                <motion.div
                variants={itemsVarients}
                >
                    <h3 className="text-xl font-semibold">
                    Categories
                    </h3>
                    <ul>
                        <li>
                            <label  className="inline-flex items-center mt-2">
                            <input type="checkbox" className="form-checkbox"  />
                            <span className="ml-2">Option 1</span>
                            </label>
                        </li>
                        <li>
                            <label  className="inline-flex items-center mt-2">
                            <input type="checkbox" className="form-checkbox"  />
                            <span className="ml-2">Option 2</span>
                            </label>
                        </li>
                        <li>
                            <label  className="inline-flex items-center mt-2">
                            <input type="checkbox" className="form-checkbox"  />
                            <span className="ml-2">Option 3</span>
                            </label>
                        </li>
                    </ul>
                </motion.div>

                <motion.div variants={itemsVarients}>
                    <h3 className="text-xl font-semibold">Price Range</h3>
                    <input 
                    type='range'
                    min='0'
                    max='1000'
                    className='w-full'
                    step='10'
                    />
                </motion.div>

                <motion.div variants={itemsVarients}>
                    <h3 className="text-xl font-semibold"> Rating</h3>
                    <ul>
                        <li>
                            <label className='inline-flex items-center mt-2'>
                                <input type="radio" name="rating" value="1"/>
                                <span className='ml-2'>1 Star</span>
                            </label>
                        </li>
                        <li>
                            <label className='inline-flex items-center mt-2'>
                                <input type="radio" name="rating" value="1"/>
                                <span className='ml-2'>2 Star</span>
                            </label>
                        </li>
                        <li>
                            <label className='inline-flex items-center mt-2'>
                                <input type="radio" name="rating" value="1"/>
                                <span className='ml-2'>3 Star</span>
                            </label>
                        </li>
                        <li>
                            <label className='inline-flex items-center mt-2'>
                                <input type="radio" name="rating" value="1"/>
                                <span className='ml-2'>4 Star</span>
                            </label>
                        </li>
                        <li>
                            <label className='inline-flex items-center mt-2'>
                                <input type="radio" name="rating" value="1"/>
                                <span className='ml-2'>5 Star</span>
                            </label>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </div>
      </motion.div>

      <button
      onClick={()=> setIsOpen(!isOpen)}
      className="absolute top-4 z-10 p-2 bg-gray-800 text-white rounded-full focus:outline-none">
        {isOpen? (
            <IoMdArrowBack className='h-6 w-6'/>
        ):(
            <IoMdArrowForward className='h-6 w-6'/>
        )}
      </button>
    </div>
  )
}

export default Sidebar
