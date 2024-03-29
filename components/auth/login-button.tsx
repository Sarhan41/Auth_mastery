"use client";

import { useRouter } from "next/navigation";

interface LogingButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LogingButton = ({
  children,
  mode = "redirect",
  asChild,
}: LogingButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }

  return (
    <span onClick={onClick} className="cursore-pointer">
      {children}
    </span>
  );
};
