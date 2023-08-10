"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
    style:'currency',
    currency: 'USD',
    
  })

interface CurrenceyProps {
    value?: string| number;
}

const Currencey: React.FunctionComponent<CurrenceyProps> = ({
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if (!isMounted) {
        return null;
    }

    return ( 
    <div className="font-semibold">
        {formatter.format(Number(value))}
    </div> );
}
 
export default Currencey;