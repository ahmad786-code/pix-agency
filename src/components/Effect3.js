import React from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';


const Effect3 = ({ text = '' }) => {
    const controls = useAnimation();


    React.useEffect(() => {

        controls.start(i => ({
            y: 0, // Final position (coming from top)
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.35,
                ease: 'easeOut',
                delay: i * 0.07 // Staggered delay
            }
        }));

    }, [controls]);

    // Split text into individual letters and wrap in motion spans
    const letters = text.split('').map((char, index) => (
        <motion.span
            key={index}
            style={{ display: 'inline-block', y: '-150px', opacity: 0, scale: 5 }} // Start from top and scaled up
            custom={index} // Pass index to use in the animation
            animate={controls}
        >
            {char}
        </motion.span>
    ));

    return (

        <motion.div   initial={{
            opacity: 0,
           
            x: 600
          }} whileInView={{
            opacity:1,
            x:0
        }}  viewport={{ once: true }} className="effect4  "  >
            {letters}
        </motion.div>
    );
};

// PropTypes validation
Effect3.propTypes = {
    text: PropTypes.string
};

export default Effect3;
