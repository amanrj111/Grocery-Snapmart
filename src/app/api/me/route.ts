import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { message: "user not authenticated" },
        { status: 400 },
      );
    }
    
  } catch (error) {}
}
