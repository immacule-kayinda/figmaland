import React from "react";

export default function Footer() {
  return (
    <div className="bg-dark-background text-slate-100 py-36 text-center">
      {Array(3).fill('').map((el, i) => {
        return (
          <div>
            {i}
            <h1 className="text-4xl font-extrabold mb-4">Annete Steward</h1>
            <div className="text-xl">
              <h3>Jenny Cooper</h3>
              <h3>Julie Henry</h3>
              <h3>Johnny Murphy</h3>
              <h3>Gregory Mccoy</h3>
              <h3>Marvin Mckinney</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
