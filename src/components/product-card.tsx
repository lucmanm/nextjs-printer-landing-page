"use client";
import { brandLogo, defaultImage } from "@/app/constant/default";
import { TProduct } from "@/app/types/printer";
import Image from "next/image";
import { WhatsApp } from "./icon/whatsapp";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card";
import { MouseEvent} from "react";
import { useRouter } from "next/navigation";

export const ProductCard = ({ data }: { data: TProduct }) => {
  const router = useRouter()
  const onClick = (event: MouseEvent<HTMLButtonElement> ) =>{
    event.preventDefault();
    event.stopPropagation();
    router.push("https://wa.me/0562617554")
  }
  return (
    // <Link href={`/${encodeURIComponent(data.description)}`}>
    <Card className="pt-4 text-xs max-sm:rounded-md md:text-sm ">
      <CardContent className="flex flex-col gap-y-4 relative max-sm:p-3">
        {/* <Image
          alt={data.description}
          src={data.images && data.images.length > 0 ? data.images[0] : defaultImage}
          height={500}
          width={500}
          style={{ width: "100%" }}
          className="object-cover max-sm:object-contain"
        /> */}
        <Image
          alt="Default Image"
          src={brandLogo}
          width={800}
          height={800}
          className="absolute size-10 max-sm:size-7 rounded-sm object-contain "
        />
        <Image
          alt={data.description}
          src={data.images && data.images.length > 0 ? data.images[0] : defaultImage}
          width={800}
          height={800}
          className="size-80 rounded-sm object-contain max-sm:h-36"
        />
        <CardTitle>{data.partNumber}</CardTitle>
        <CardDescription className="line-clamp-2 text-xs md:text-sm max-sm:h-8 h-10">
          {data.description}
        </CardDescription>
        <CardTitle className="text-blue-900 text-xl max-sm:text-base">
          SAR {((Number(data.price) + 25) * 1.15).toFixed(0)}
        </CardTitle>
      </CardContent>
      <CardFooter className="max-sm:p-3">
        <Button
          className="w-full gap-x-4 bg-blue-900 hover:bg-green-500 shadow-inner "
          onClick={onClick}
        >
          <WhatsApp color="#fff" width="24" className="text-white size-6 "/>
          {/* <Image src="https://res.cloudinary.com/dzdcszrob/image/upload/v1727696453/social-media-icons/jxq88qboq7vjcpq8njtd.svg" sizes="48" width={48} height={48} alt="WhatsApp" className="size-5 text-cyan-400 fill-slate-300"/> */}
          <span className="max-sm:text-xs md:font-semibold">Contact Us</span>
        </Button>
      </CardFooter>
    </Card>
    // </Link>
  );
};
