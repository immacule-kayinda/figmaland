import React from "react";

function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-11/12 m-auto my-28 text-center items-center">
      {children}
    </div>
  );
}

export default Section;
