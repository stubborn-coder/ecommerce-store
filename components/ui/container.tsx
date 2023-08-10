interface ContainerProps {
    children: React.ReactNode,
}


const Container: React.FunctionComponent<ContainerProps> = ({
    children,

}) => {
    return ( 
        <div className="mx-auto max-w-7xl">
            {children}
        </div>
     );
}
 
export default Container;