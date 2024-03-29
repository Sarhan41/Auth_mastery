import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogingButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center gradient-sky
    "
    >
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
        <div>
          <LogingButton >
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LogingButton>
        </div>
      </div>
    </main>
  );
}
