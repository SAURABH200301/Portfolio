import { useRef } from "react";
import { useInView } from "framer-motion";

function FadeIn(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false })
    return (
        <section ref={ref}>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(-100px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {props.children}
            </span>
        </section>
    )
}

export default FadeIn