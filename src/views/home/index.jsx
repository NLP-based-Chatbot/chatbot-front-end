import React from "react";
import HeroSection from "../../components/HeroSection";
import SubSection from "../../components/SubSection";
import HomeLayout from "../../layout/HomeLayout";

const Home = () => {
  return (
    <HomeLayout>
      <HeroSection />
      <SubSection
        sectionName="Public Transportation"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque neque ultricies lectus velit urna etiam. Massa vulputate lacus, pulvinar sed feugiat et dictumst id ultrices. Tristique amet neque, lectus vitae hendrerit magna gravida nunc. Ac netus neque massa vitae purus vel elit eget duis. Tempor enim nibh purus aliquam. Velit quisque odio aenean diam vestibulum sagittis."
        imageSrc="./Bus.svg"
        align='left'
      />
      <SubSection
        sectionName="Health Care"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque neque ultricies lectus velit urna etiam. Massa vulputate lacus, pulvinar sed feugiat et dictumst id ultrices. Tristique amet neque, lectus vitae hendrerit magna gravida nunc. Ac netus neque massa vitae purus vel elit eget duis. Tempor enim nibh purus aliquam. Velit quisque odio aenean diam vestibulum sagittis."
        imageSrc="./Health Care.svg"
        align='right'
      />
      <SubSection
        sectionName="Telecommunication"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque neque ultricies lectus velit urna etiam. Massa vulputate lacus, pulvinar sed feugiat et dictumst id ultrices. Tristique amet neque, lectus vitae hendrerit magna gravida nunc. Ac netus neque massa vitae purus vel elit eget duis. Tempor enim nibh purus aliquam. Velit quisque odio aenean diam vestibulum sagittis."
        imageSrc="./Telecommunication.svg"
        align='left'
      />
    </HomeLayout>
  );
};

export default Home;
