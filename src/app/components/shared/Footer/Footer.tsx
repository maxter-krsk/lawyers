import Link from "next/link";
import DevelopedBy from "@/app/components/ui/DevelopedBy";

export default function Footer() {
  return (
    <footer className="bg-gray-500">
      <div className="container">
        <h1 className="uppercase text-black text-xl text-center">Footer</h1>
        <DevelopedBy />
      </div>
    </footer>
  );
}
