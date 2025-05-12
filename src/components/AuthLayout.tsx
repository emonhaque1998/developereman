import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function AuthLayout() {
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
