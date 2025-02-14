import { Button } from "@/components/ui/button";

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-5">
        Hello 👋🏾! Welcome to Fund My Future
      </h1>.
      {/* Button redirects to /onboarding */}
      <Button onClick={() => window.location.href = "/onboarding"}>Start Onboarding</Button>
    </div>
  );
}
