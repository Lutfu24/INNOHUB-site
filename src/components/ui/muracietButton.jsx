import { PlusIcon } from "lucide-react";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";

export default function LiquidButtonDemo({ variant, size }) {
  return (
    <LiquidButton
      className="w-full cursor-pointer bg-linear-to-r from-[#02C8FE] to-[#0098e0] text-black px-10 py-5 rounded-md font-bold hover:shadow-lg transition-all duration-300 transform active:scale-95"
      variant={variant}
      size={size}
    >
      {size === "icon" ? <PlusIcon /> : "Müraciət et!"}
    </LiquidButton>
  );
}
