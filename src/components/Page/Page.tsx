import React from "react";
import "./page.css"

interface Props {
  alarmsMode: string;
}

const Page = ({ alarmsMode }: Props) => {
  return (
    <div className="page">
      <h1 className="heading">{alarmsMode}</h1>
    </div>
  );
};

export default Page;
