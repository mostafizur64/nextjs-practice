import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import thumb from "@/public/image/ig-img-5.jpeg";
const Mission = () => {
  return (
    <main className="mt-10">
      <div>lorem20</div>
      <div className="mt-5">
        <Image
          src={thumb}
          alt="Picture of the author"
          placeholder="blur"
         
        />
      </div>
      <div className="mt-5">
        <Button />
      </div>
    </main>
  );
};

export default Mission;
