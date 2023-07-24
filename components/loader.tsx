import { GiMaterialsScience } from "react-icons/gi";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="relative animate-spin">
        <GiMaterialsScience size={40} className="text-blue-700" />
      </div>

      <p className="text-sm text-muted-foreground">Thinking...</p>
    </div>
  );
};
