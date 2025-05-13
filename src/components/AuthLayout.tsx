"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

export default function AuthLayout() {
  const { userId } = useAuth();

  useEffect(() => {
    const createOrFetchUser = async () => {
      if (userId) {
        try {
          const response = await axios.post("/api/auth", {
            userId: userId,
          });

          console.log("User created or fetched:", response.data);
        } catch (error) {
          console.error("Error creating/fetching user:", error);
        }
      }
    };

    createOrFetchUser();
  }, [userId]);

  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <span className="cursor-pointer">Sign In</span>
        </SignInButton>
        <SignUpButton mode="modal">
          <span className="cursor-pointer">Sign Up</span>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
