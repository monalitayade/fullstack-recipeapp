
import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay:number): T => {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => setDebounced(value), delay);
        return () => {clearTimeout(handle);}
    },[value,delay]);

    return debounced;
}