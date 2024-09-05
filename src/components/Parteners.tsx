import TitleWithSubtitle from "./TitleWithSubtitle";
import Section from "./Section";
import Partner from "./Partner";

function Parteners() {
  const partners = [
    {
      alt: "google",
      source:
        "https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number-thumbnail.png",
    },
    {
      alt: "amazon",
      source:
        "https://www.pngfind.com/pngs/m/56-565024_amazon-logo-png-amazon-png-transparent-png.png",
    },
  ];
  return (
    <Section>
      <TitleWithSubtitle title="Partners" />
      <div className="mt-12 flex flex-col gap-20">
        {partners.map((partner, index) => (
          <Partner key={index} {...partner} />
        ))}
      </div>
    </Section>
  );
}

export default Parteners;
