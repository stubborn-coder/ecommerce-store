import getProducts from "@/actions/get-products";


export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId:string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }

}



const CategoryPage:React.FunctionComponent<CategoryPageProps> = async ({
    params,
    searchParams,
}) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        sizeId: searchParams.colorId,
        colorId: searchParams.sizeId,
    });

    return ( 
        <div>
            Category
        </div>
     );
}
 
export default CategoryPage;