import { useEffect, useState } from "react";
import Card from "./Card";

const OnlineDelivery = () => {
    const [data, setData] = useState([]);

    const fetchTopRestaurent = async ()=>{
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(()=>{
        fetchTopRestaurent();
    },[])


  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Hisar
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {
            data.map((d,i)=>{
                return <Card key={i} {...d}/>
            })
        }

      </div>
    </div>
  );
};
export default OnlineDelivery;
