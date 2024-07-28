import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Goal, ListTodo, Loader2, NotebookPen, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-purple-1 h-full w-20 m-8 rounded-2xl flex flex-col p-5 items-center justify-between">
            <Image
                src="/cognify-logo.png"
                alt="logo"
                width={60}
                height={60}
            />
            <div className="mb-2 items-center justify-center flex flex-col gap-5 mt-12">
                <Timer size={32}/>
                <ListTodo size={32}/>
                <Goal size={32}/>
                <NotebookPen size={32} />
            </div>
            <div className="flex flex-col items-center h-full mt-12 pb-2">
                <ClerkLoading>
                    <Loader2 />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <Link href="/sign-in">
                            <Button>Login</Button>
                        </Link>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </div>
    );
};

export default Navbar;
