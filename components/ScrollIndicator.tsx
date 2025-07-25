import {motion, useScroll, useTransform} from "framer-motion"
import { useState } from "react"
const ScrollIndicator = () => {

    const { scrollYProgress } = useScroll();

    const lineWidth = useTransform(scrollYProgress,[0,1],['0%','100%'])
  return (
    <div className="h-[200vh] p-[20px]">
     <motion.div className="fixed top-0 left-0 h-[5px] bg-red-500"
     style={{
        width: lineWidth,
        transition:"width 0.1s ease",
     }}
     />
     <div className="mt-[50px]">
        {[...Array(100)].map((_,i)=>(
            <p key={i} className="mt-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam enim incidunt soluta nemo amet odit voluptas laudantium optio iure id! Eligendi, esse tenetur!
            </p>
        ))}
     </div>
    </div>
  )
}

export default ScrollIndicator
