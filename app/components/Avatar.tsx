import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import avatarImage from "/public/image-avatar.png"

export function Profile(){
  return(
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>GP</AvatarFallback>
    </Avatar>

  )
}