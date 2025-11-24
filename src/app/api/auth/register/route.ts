// /api/auth/register

import connectDb from "@/lib/db";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function Post(req:NextRequest){
  try {
    await connectDb()
    const {name,email,password} = await req.json()
    const existUser = await User.findOne({email})
    if(existUser){
      return NextResponse.json(
        {message: "email already exist"},
        {status : 400}
      )
    }
    if(password.length < 6){
      return NextResponse.json(
        {message: "password must be at least 6 characters"},
        {status : 400}
      )
    }
    
    const hashedPassword = await bcrypt.hash(password,10)
    
    
  } catch (error) {
    
  }
}

//connect db
//name , email, passswordfronted
//email check already exist or not
//password 6 character 
// password hash
//user create