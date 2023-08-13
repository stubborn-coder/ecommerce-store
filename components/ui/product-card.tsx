"use client";
import { useRouter } from "next/navigation";
import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currencey from "./currency";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCartProps {
    data: Product;
}

const ProductCard: React.FunctionComponent<ProductCartProps> = ({
    data,
}) => {
    const cart = useCart();
    const previewModal = usePreviewModal();
    const router = useRouter();

    const handleClick  = () => {
        router.push(`/product/${data.id}`)
    }

    const onPreview:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    }

    const onAddToCart:MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    } 


    return ( 
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image 
                  src={data?.images?.[0]?.url}
                  alt="images"
                  fill
                  className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-5 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600"/>}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600"/>}
                        />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="font-semibold text-lg"> {data.name}</p>
                <p className="text-sm text-gray-500">{data.category?.name}</p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
                <Currencey value={data?.price}></Currencey>
            </div>
        </div>
     );
}
 
export default ProductCard;