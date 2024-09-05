import React from "react";
import RoundSquare from "./icons/RoundSquareIcon";
import PlayIcon from "./icons/PlayIcon";
import Feature from "./Feature";
import PinterIcon from "./icons/PinterIcon";
import WritingPenIcon from "./icons/WritingPenIcon";
import TitleWithSubtitle from "./TitleWithSubtitle";
import Section from "./Section";

function Features() {
  const features = [
    {
      title: "OpenType features Variable fonts",
      icon: <RoundSquare />,
      description:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
    {
      title: "Design with real data",
      icon: <WritingPenIcon />,
      description:
        "Slate helps you see how many more days you need to work to reach your financial goal.",
    },
    {
      icon: <PinterIcon />,
      title: "Fastest way to take action",
      description:
        "Slate helps you see how many more days you need to work to reach",
    },
  ];
  return (
    <Section>
      <TitleWithSubtitle title="Features" />
      <div className="video-play-img flex text-white">
        <PlayIcon />
      </div>
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </Section>
  );
}

export default Features;
