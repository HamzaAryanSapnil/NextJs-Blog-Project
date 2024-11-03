import { auth, signIn, signOut } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { CredentialsSignin } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="p-4 shadow-sm font-work-sans ">
      <nav className="flex justify-between items-center gap-x-4">
        <Link href={"/"}>
          {" "}
          <Image
            src={"/logo.png"}
            alt="Practice Website's Logo"
            width={130}
            height={40}
          />{" "}
        </Link>
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href={"/startup/create"}>
                {" "}
                <span className="max-sm:hidden">Create</span>{" "}
                <BadgePlus className="size-6 sm:hidden" />
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                {" "}
                <button type="submit">
                  <span className="max-sm:hidden"> Sign Out </span>{" "}
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>
              <Link href={`/user/${session?.id}`}>
              <Avatar className="size-10" >
                <AvatarImage src={session?.user?.image || " "} alt={session?.user?.name || " "} />
                <AvatarFallback >
                  AV
                </AvatarFallback>
              </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              {" "}
              <button type="submit">
                <span>Sign In</span>{" "}
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
