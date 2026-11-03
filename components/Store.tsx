"use client";
import {createContext,useContext,useEffect,useMemo,useState} from "react";
import type {Product} from "@/lib/products";
type Line={product:Product;qty:number};
const C=createContext<any>(null);
export function Store({children}:{children:React.ReactNode}){const [cart,setCart]=useState<Line[]>([]),[ready,setReady]=useState(false);
useEffect(()=>{try{const s=localStorage.getItem("at-cart");if(s)setCart(JSON.parse(s))}catch{}setReady(true)},[]);
useEffect(()=>{if(ready)localStorage.setItem("at-cart",JSON.stringify(cart))},[cart,ready]);
const value=useMemo(()=>({cart,count:cart.reduce((a,x)=>a+x.qty,0),subtotal:cart.reduce((a,x)=>a+x.product.price*x.qty,0),add:(p:Product,q=1)=>setCart((old:Line[])=>old.some(x=>x.product.id===p.id)?old.map(x=>x.product.id===p.id?{...x,qty:x.qty+q}:x):[...old,{product:p,qty:q}]),change:(id:string,q:number)=>setCart((old:Line[])=>q<1?old.filter(x=>x.product.id!==id):old.map(x=>x.product.id===id?{...x,qty:q}:x)),remove:(id:string)=>setCart((old:Line[])=>old.filter(x=>x.product.id!==id)),clear:()=>setCart([])}),[cart]);
return <C.Provider value={value}>{children}</C.Provider>}
export const useStore=()=>useContext(C);
