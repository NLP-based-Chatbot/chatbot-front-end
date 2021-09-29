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
        description="Let you place appointments with your doctors, get reports and make reservations for tests for you with our partner hospital."
        imageSrc="./Health Care.svg"
        align='right'
      />
      <SubSection
        sectionName="Telecommunication"
        description="Chatbots can perform a number of functions without constant human intervention In the telecommunication industry. Wingman provides a telecommunication chatbot with the latest technologies to solve various questions and fulfill user requests by simple interactive chat sessions. You can ask easily about data package details, television connection, signal issues, broadband connections, and another general types of questions from the wingman, It will redirect you to relevant resources quickly to fulfill your requirement."
        imageSrc="./Telecommunication.svg"
        align='left'
      />
    </div>
  );
};

export default Home;
