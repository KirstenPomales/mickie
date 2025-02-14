import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <Image alt="Image" src="/images/cookai-robot.png" width={50} height={500} />
      <span className="font-heading text-2xl font-extrabold">CookFi</span>
    </Link>
  );
}
