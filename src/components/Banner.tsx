import Header from "./Header";

function Banner() {
  return (
    <div className="min-h-full text-slate-100 bg-image ">
      <Header />
      <div className="h-full flex flex-col justify-center">
        <h1 className="text-6xl text-center pb-10 font-semibold">
          The best products start with figma
        </h1>
        <h2 className="text-center text-4xl font-thin">
          Most calendars are deesigned for teams
        </h2>
      </div>
    </div>
  );
}

export default Banner;
