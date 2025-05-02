import { useRef } from "react";

export const useThrottle = (callback : Function, delay : number) => {
    const lastRun = useRef(Date.now());

    return (...args : any) => {
        const timeElapsed = Date.now() - lastRun.current;
        if (timeElapsed >= delay) {
            callback(...args);
            lastRun.current = Date.now();
        }
    };
};