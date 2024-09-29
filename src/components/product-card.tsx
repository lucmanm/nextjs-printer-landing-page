"use client";
import { defaultImage } from "@/app/constant/default";
import { TProduct } from "@/app/types/printer";
import { Contact } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card";

export const ProductCard = ({ data }: { data: TProduct }) => {
  return (
    // <Link href={`/${encodeURIComponent(data.description)}`}>
    <Card className="pt-4 text-xs max-sm:rounded-md md:text-sm">
      <CardContent className="flex flex-col gap-y-4">
        <Image
          alt={data.description}
          src={defaultImage}
          height={300}
          width={1280}
          style={{ width: "100%" }}
          className="object-cover max-sm:object-contain"
        />
        {/* <Image alt="Default Image" src={defaultImage} className="w-full rounded-sm" /> */}
        <CardTitle>{data.partNumber}</CardTitle>
        <CardDescription className="line-clamp-2 text-xs md:text-sm">
          {data.description}
        </CardDescription>
        <CardTitle className="text-blue-900 text-xl">{data.price}</CardTitle>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full gap-x-4 bg-blue-900 hover:bg-blue-500 shadow-inner"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            alert("Working");
          }}
        >
          <Contact className="size-5 hover:animate-ping" />
          Contact Us
        </Button>
      </CardFooter>
    </Card>
    // </Link>
  );
};
