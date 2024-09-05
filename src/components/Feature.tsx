import React from "react";

interface FeatureType  {
  icon: React.ReactElement;
  title: string;
  description: string;
}

function Feature({icon, title, description }: FeatureType) {
  return (
    <div className="w-1/2 m-auto items-center">

      <div className="w-fit m-auto">
        {React.cloneElement(icon)}
      </div>
      <h2 className="text-2xl font-bold text-center ">
        {title}
      </h2>
      <h3 className="text-lg">
        {description}
      </h3>
    </div>
  );
}

export default Feature;
