function Partner({ source, alt }: { source: string; alt: string }) {
  return (
    <div
    
      className="flex items-center flex-col w-3/5 border m-auto pb-5"
    >
      <h1 className="font-thin ">Client name</h1>
      <img className="w-4/12" src={source} alt={alt} />
    </div>
  );
}

export default Partner;
