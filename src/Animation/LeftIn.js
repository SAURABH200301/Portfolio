import React, { useRef } from "react";
import { useInView, motion } from "framer-motion"

function LeftIn(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false })
    return (
        <section ref={ref}>
            <motion.div
                animate={{
                    x: isInView ? 0 : -1100
                }}
                transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
            >
                {props.children}
            </motion.div>
        </section>
    )
}

export default LeftIn