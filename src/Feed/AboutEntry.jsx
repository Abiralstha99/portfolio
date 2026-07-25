import FeedEntry from './FeedEntry'
import profileImage from '../assets/profile.jpg'

function AboutEntry() {
  return (
    <FeedEntry id="about">
      <img
        src={profileImage}
        alt="Abiral Shrestha"
        className="w-30 h-30 rounded-full object-cover mb-6 border border-[#e5e5e5]"
      />

      <h1 className="font-display text-[2rem] font-bold leading-tight text-[#1a1a1a] mb-2">
        Abiral Shrestha
      </h1>

      <p className="text-[16px] text-[#6b6b6b] mb-6">
        Aspiring Software Engineer · CS @Gettysburg College · Junior Year
      </p>

      <p className="text-[17px] text-[#3a3a3a] leading-[1.75] mb-4">
        Hi, I'm Abiral Shrestha, a rising junior at Gettysburg College studying Computer Science with a minor in Mathematics. Originally from Nepal and now based in Pennsylvania, I'm passionate about building technology that solves real problems.
      </p>

      <p className="text-[17px] text-[#3a3a3a] leading-[1.75] mb-4">
        I enjoy designing reliable systems, working with data, and turning real user needs into practical, thoughtful solutions. As an AI/ML Fellow with Break Through Tech, I'm expanding my skills in machine learning and responsible AI while learning how to build models that create meaningful impact.
      </p>

      <p className="text-[17px] text-[#3a3a3a] leading-[1.75]">
        Right now, my focus is on AI/ML and backend engineering. When I'm not coding, I enjoy traveling, cooking, and playing cricket. I'm still early in my journey, but that's the fun part: embracing new challenges, building new things, and learning every day.
      </p>
    </FeedEntry>
  )
}

export default AboutEntry
