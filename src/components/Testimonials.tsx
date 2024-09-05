import Section from "./Section";
import Title from "./Title";
import IbmIcon from "./icons/IbmIcon";

function Testimonials() {
  return (
    <Section>
      <Title title="Testimonials"></Title>
      <div className="flex flex-col gap-10 mt-10 items-center justify-center">
        <IbmIcon />
        <p className="w-1/2 font-bold">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>

        <div className="flex ">
          
        </div>
      </div>
    </Section>
  );
}

export default Testimonials;
