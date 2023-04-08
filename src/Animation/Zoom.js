import React, { useRef } from "react";
import { useInView, motion } from "framer-motion"

function Zoom(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false })
    return (
        <section ref={ref}>
            <motion.div
                animate={{ scale: isInView ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            >
                {props.children}
            </motion.div>
        </section>
    )
}

export default Zoom