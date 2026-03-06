import { useEffect, useRef, useState } from 'react';

const useScrollReveal = ({ threshold = 0.05, once = true } = {}) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) observer.disconnect();
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold, once]);

    return { ref, visible };
};

export default useScrollReveal;