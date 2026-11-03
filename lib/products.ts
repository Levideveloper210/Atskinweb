export type Product={id:string;slug:string;name:string;brand:string;category:string;price:number;description:string;image:string;featured?:boolean};
const img=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;
export const products:Product[]=[
{id:"1",slug:"anua-heartleaf-serum-demo",name:"Heartleaf Serum",brand:"Anua",category:"Face Serums",price:12500,description:"Demo catalogue item. Confirm exact variant, price and availability with the store.",image:img("photo-1608248543803-ba4f8c70ae0b"),featured:true},
{id:"2",slug:"la-roche-posay-sunscreen-demo",name:"Anthelios Sunscreen",brand:"La Roche-Posay",category:"Sunscreens",price:18000,description:"Demo catalogue item inspired by a brand mentioned in customer feedback. Confirm stock and variant.",image:img("photo-1556228720-195a672e8a03"),featured:true},
{id:"3",slug:"jumiso-face-cream-demo",name:"Face Cream",brand:"Jumiso",category:"Moisturisers",price:14500,description:"Demo catalogue item. Replace with verified product details and pricing.",image:img("photo-1601049541289-9b1b7bbbfe19"),featured:true},
{id:"4",slug:"medicube-age-r-cream-demo",name:"Age-R Cream",brand:"Medicube",category:"Face Creams",price:22000,description:"Demo catalogue item, not confirmation of current stock or formulation.",image:img("photo-1556228578-0d85b1a4d571")},
{id:"5",slug:"gentle-cleanser-demo",name:"Gentle Daily Cleanser",brand:"A.T Selection",category:"Facial Cleansers",price:9500,description:"Sample listing. Replace with actual product and verified price.",image:img("photo-1556229010-6c3f2c9ca5f8")},
{id:"6",slug:"hydrating-toner-demo",name:"Hydrating Toner",brand:"A.T Selection",category:"Toners",price:11000,description:"Sample listing. Replace with actual product and verified price.",image:img("photo-1608248543803-ba4f8c70ae0b")},
{id:"7",slug:"body-lotion-demo",name:"Nourishing Body Lotion",brand:"A.T Selection",category:"Body Lotions",price:8500,description:"Sample listing. Replace with actual product and verified price.",image:img("photo-1601049541289-9b1b7bbbfe19")},
{id:"8",slug:"lip-care-demo",name:"Everyday Lip Care",brand:"A.T Selection",category:"Lip Care",price:4500,description:"Sample listing. Replace with actual product and verified price.",image:img("photo-1580870069867-74c57ee1bb07")}
];
export const categories=["Facial Cleansers","Face Serums","Moisturisers","Sunscreens","Face Creams","Toners","Face Masks","Body Lotions","Body Wash","Makeup","Lip Care","Beauty Accessories"];
export const brands=["La Roche-Posay","Anua","Jumiso","Medicube"];
export const money=(n:number)=>new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(n);
