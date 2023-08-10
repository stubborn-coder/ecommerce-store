import { Product } from "@/types";
import Currencey from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
    data: Product;
}

const Info:React.FunctionComponent<InfoProps> = ({
    data,
}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-500">{data.name}</h1>
            <div className="mt-3 flex items-end justify-end">
                <p className="text-2xl text-gray-900">
                    <Currencey value={data?.price} />
                </p>
            </div>
            <hr  className="my-4"/>
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-bold">Size:</h3>
                    <div>
                        {data?.size?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-bold">Color:</h3>
                    <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color.value}}/>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button>
                    Add to cart
                    <ShoppingCart className="flex items-center gap-x-2" />
                </Button> 
            </div>
        </div>
      );
}
 
export default Info;