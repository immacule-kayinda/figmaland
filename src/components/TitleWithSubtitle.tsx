type TitleWithSubtitleProps = {
  title: string;
};

function TitleWithSubtitle({ title }: TitleWithSubtitleProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-5xl font-medium text-center">{title}</h1>
      <h2 className="text-2xl">Most calendars are designed for teams. </h2>
    </div>
  );
}

export default TitleWithSubtitle;
