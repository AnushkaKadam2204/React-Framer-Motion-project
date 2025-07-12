import {motion} from "framer-motion"
import Card1 from "../components/Card1"

const StickyNav = () => {

    const menuVariants ={
        hidden: {height: '5.6rem'},
        visible: {height: '29rem', transition: {duration:0.3}},
    }

    const expandRowVariants ={
      hidden: { opacity:0, y:50},
      visible: (i:any)=> ({
        opacity:1,
        y:0,
        transition: {delay: i*0.1, duration : 0.6},
      })

    }

  return (
    <div className='bg-black min-h-screen'>
      <motion.div
      className='fixed top-0 w-full bg-white text-black rounded-lg shadow-lg'
      variants={menuVariants}
      initial="hidden"
      whileHover="visible"
      >
        <div className="flex flex-col p-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="ml-2 font-semibold uppercase">
                Anushka
              </div>
            </div>
            <div className="hidden md:flex space-x-5 text-center">
              <a href="#" className="text-black">Products</a>
              <a href="#" className="text-black">Use Cases</a>
              <a href="#" className="text-black">Resources</a>
              <a href="#" className="text-black">Pricing</a>
            </div>

            <div className="flex items-center">
              <a href="#" className="text-black">Join</a>
            </div>
          </div>

          <motion.div className="flex flex-col py-6"
          variants={expandRowVariants}
          >
            <span className="black w-full h-px bg-gray-300"></span>
            <motion.div className="flex items-center mt-5" variants={expandRowVariants} custom={1}>
              <span className="border border-black rounded-full px-2 text-xs">Apple</span>
              <p className="ml-2">Macbook Pro</p>
            </motion.div>
            <motion.div className="flex mt-5" variants={expandRowVariants} custom={1}>
              <Card1
              title = "My Amazing Card"
              description= "This is some random description"
              imageUrl="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Card1
              title = "My Amazing Card"
              description= "This is some random description"
              imageUrl="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Card1
              title = "My Amazing Card"
              description= "This is some random description"
              imageUrl="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
    </div>
  )
}

export default StickyNav
