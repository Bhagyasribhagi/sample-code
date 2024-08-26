import { useEffect, useState } from "react";


 interface ProductInter{
    id:number,
    title:string,
    category:string

}
const UseEffect:React.FC=()=>{
    const [product,setProduct]=useState<ProductInter[]>([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch("https://fakestoreapi.com/products");
                const data=await response.json();
                console.log(data);
                setProduct(data);
            }
            catch(e){
                console.log(e)
            }
        };
        fetchData();

    },[])
    return(
        <>
        <div className="bg-con">
            <h1 className="head">List of all products:</h1>
           {product.map((i)=>(
            <div key={i.id}>

            <h1>{i.title}</h1>
            <p>{i.category}</p>
            </div>
           ))}
        </div>
        </>
    )

}
export default UseEffect;