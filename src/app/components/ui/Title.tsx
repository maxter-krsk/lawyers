import { Square } from "@/lib/ui/square";
import { clsx } from "clsx";

type TitleProps = {
  children: string;
  className?: string;
};

export function Title({ children, className }: TitleProps) {
  return (
    <h1 className={clsx("text-16 lg:text-20 flex items-center gap-14 font-extralight", className)}>
      <Square />
      {children}
    </h1>
  );
}
