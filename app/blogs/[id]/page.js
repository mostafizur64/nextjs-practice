import { notFound } from "next/navigation";
import React from "react";

const BlockPage = ({ params }) => {
  const { id } = params;
  if(id == "3"){
    notFound()
  }

  return <div>The Block id is {id}</div>;
};

export default BlockPage;
