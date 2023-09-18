import { motion } from "framer-motion";
import { useContext } from "react";
import { DirectionContext } from "./components/Inputs/Input";


const AnimatedPage = ({ children }) => {
    const direction = useContext(DirectionContext);
    // console.log("Ani page "+ direction);
    
    const animations = direction == "left" ? {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    }:{
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    };
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;