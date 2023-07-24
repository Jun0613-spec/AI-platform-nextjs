import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { GiMaterialsScience } from "react-icons/gi";

export const BotAvatar = () => {
  return (
    <Avatar>
      <GiMaterialsScience className="p-1 text-blue-700" size={36} />
    </Avatar>
  );
};
