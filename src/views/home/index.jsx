import React from "react";
import HeroSection from "../../components/HeroSection";
import SubSection from "../../components/SubSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SubSection
        sectionName="Public Transportation"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque neque ultricies lectus velit urna etiam. Massa vulputate lacus, pulvinar sed feugiat et dictumst id ultrices. Tristique amet neque, lectus vitae hendrerit magna gravida nunc. Ac netus neque massa vitae purus vel elit eget duis. Tempor enim nibh purus aliquam. Velit quisque odio aenean diam vestibulum sagittis."
        imageSrc="./Bus.svg"
        align='left'
      />
      <SubSection
        sectionName="Health Care"
        description="Make a conversation with our AI powered assistant.He will let you place appointments with your doctors, channel specialists, shift appointments to another time slot, cancel appointments , get reports and make reservations for conduct tests and more with our partner hospital. As well as it will keep your conversations secured and private."
        imageSrc="./Health Care.svg"
        align='right'
      />
      <SubSection
        sectionName="Telecommunication"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque neque ultricies lectus velit urna etiam. Massa vulputate lacus, pulvinar sed feugiat et dictumst id ultrices. Tristique amet neque, lectus vitae hendrerit magna gravida nunc. Ac netus neque massa vitae purus vel elit eget duis. Tempor enim nibh purus aliquam. Velit quisque odio aenean diam vestibulum sagittis."
        imageSrc="./Telecommunication.svg"
        align='left'
      />
    </div>
  );
};

export default Home;
