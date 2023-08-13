"use client";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarAction = () => {


    const cart = useCart();
    const [isMounted, setIsMounted ] = useState(false);
    const router = useRouter();
    
    useEffect(()=> {
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }



    return ( 
        <div className="ml-auto flex item-center gap-x-4">
            <Button className="flex items-center gap-x-4">
                <ShoppingBag onClick={()=> router.push("/cart")} size={20} color="white"/>
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
     );
}
  
export default NavbarAction;