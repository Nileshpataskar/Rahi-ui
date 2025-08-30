import { teamData } from "./teamData";
import TeamMember from "./TeamMember";

const TeamSection = () => {
  return (
    <section className="bg-[#f8f8f8] px-4 py-40">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-24 text-center ">
          <span className="my-8 bg-pink-300 p-10 block text-xs font-medium uppercase tracking-[0.4em] text-[#c0a062]">
            Our People
          </span>
          <h2 className="mb-10  text-5xl font-extralight tracking-tight text-gray-900">
            Leadership Team
          </h2>
          <div className="mx-auto mb-12 h-px w-32 bg-[#c0a062]"></div>
          <p className="mx-auto max-w-2xl text-lg font-extralight leading-relaxed tracking-wide text-gray-600">
            Meet the visionaries guiding our company toward continued excellence
            and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center items-start max-w-3xl mx-auto">
          {teamData.map((member, index) => (
            <div className="w-full max-w-sm" key={member.id}>
              <TeamMember member={member} delay={index * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
