import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUp() {
    return (
        <div className="flex flex-col items-center p-10">
            <h1 className="text-2xl font-bold">Create an Account</h1>
            <form className="w-96 space-y-4 mt-4">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button className="w-full">Sign Up</Button>
            </form>
        </div>
    );
}
