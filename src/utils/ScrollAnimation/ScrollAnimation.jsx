import { motion } from 'framer-motion';

export const ScrollAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.25,
        ease: [0.19, 1, 0.22, 1] 
      }}
      viewport={{ 
        once: true, 
        amount: 0.1 
      }}
    >
      {children}
    </motion.div>
  );
};
