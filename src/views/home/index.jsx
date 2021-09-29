import React from "react";
import HeroSection from "../../components/HeroSection";
import SubSection from "../../components/SubSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SubSection
        sectionName="Public Transportation"
        description="Built with the cutting edge technologies, the Public Transportation Chatbot is what exactly you need to find information related to Public Transportation in Sri Lanka. Users are provided with many functionalities such as Finding Schedules, Booking Seats, Finding Contact Information, and many more. The Complaint Management module which is also integrated with the Chatbot allows you to make complaints easily without bothering anymore. The Chatbot is only limited by evolution of human purpose."
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
        description="Chatbots can perform a number of functions without constant human intervention In the telecommunication industry. Wingman provides a telecommunication chatbot with the latest technologies to solve various questions and fulfill user requests by simple interactive chat sessions. You can ask easily about data package details, television connection, signal issues, broadband connections, and another general types of questions from the wingman, It will redirect you to relevant resources quickly to fulfill your requirement."
        imageSrc="./Telecommunication.svg"
        align='left'
      />
    </div>
  );
};

export default Home;
