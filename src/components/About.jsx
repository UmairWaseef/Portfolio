import React from 'react';
import Section from './common/Section';
import about from '../assets/about.jpg';

const About = () => {
  return (
    <div name="about">
      <Section className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div>
            <img
              src={about}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full "
            />
          </div>
          <div className="flex flex-col justify-center h-full ml-5">
            <h2 className="py-3 text-3xl lg:text-5xl">
              About 🙋‍♂️
            </h2>
            <p className="text-gray-500 py-4 max-w-md text-left">
              As a dedicated individual with a passion for technology and a strong interest in teamwork, I thrive in collaborative environments where I can explore and learn about the latest advancements in the field. My primary focus lies in the realm of cyber security and Computer Science, where I delve into topics that help safeguard digital systems and empower businesses to navigate the ever-evolving technological landscape securely. I am driven by a relentless curiosity and a commitment to expanding my knowledge in order to contribute meaningfully to the field. Let's connect and explore the exciting possibilities at the intersection of technology and teamwork.
            </p>
                      </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
