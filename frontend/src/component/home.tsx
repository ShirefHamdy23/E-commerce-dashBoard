import env from "../env/env";
import axios from "axios";
import {useState} from "react"

const Home = () => {
  const [data,setData]=useState<any>('')
  fetch('https://fakestoreapi.com/products/category/jewelery')
  .then(res=>res.json())
  .then(json=>setData(json))
    return <>
    {data.map((r:any):any=>{
      <div>{r.title}</div>
    })}
    </>;
  };
  
  export default Home;