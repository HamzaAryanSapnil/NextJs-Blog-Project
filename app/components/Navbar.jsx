import { auth, signIn, signOut } from "@/auth";
import { CredentialsSignin } from "next-auth";
import Image from "next/image";
import Link from "next/link";

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
                <span>Create</span>{" "}
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                {" "}
                <button type="submit">
                  <span> Sign Out </span>{" "}
                </button>
              </form>
              <Link href={`/user/${session?.id}`}>
                {" "}
                <span>{session?.user?.name}</span>{" "}
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
