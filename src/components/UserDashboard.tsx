import React from "react";
import HeroSection from "./HeroSection";
import CategorySlider from "./CategorySlider";
import connectDb from "@/lib/db";
import Grocery, { IGrocery } from "@/models/grocery.model";
import GroceryItemCard from "./GroceryItemCard";

async function UserDashboard(){
  await connectDb()

  const groceries = await Grocery.find({})
  const plainGrocery = JSON.parse(JSON.stringify(groceries))



  return (
    <>
      <HeroSection />
      <CategorySlider />
      {plainGrocery.map((item:any)=>(
        <GroceryItemCard item = {item}/>
      ))}
    </>
  );
}

export default UserDashboard;
