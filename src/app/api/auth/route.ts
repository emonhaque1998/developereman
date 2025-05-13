import { NextRequest, NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    // Extract the userId from the request body
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    // Fetch the authenticated Clerk user
    const clerkUser = await clerkClient();

    const user = await clerkUser.users.getUser(userId);

    // Check if the user already exists in your Prisma database
    const existingUser = await prisma.user.findUnique({
      where: { email: user.emailAddresses[0]?.emailAddress },
    });

    if (existingUser) {
      return NextResponse.json(existingUser); // Return existing user if already in DB
    }

    // Create a new user in Prisma
    const newUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
      },
    });

    return NextResponse.json(newUser); // Return newly created user
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Unable to create user in database" },
      { status: 500 }
    );
  }
}
