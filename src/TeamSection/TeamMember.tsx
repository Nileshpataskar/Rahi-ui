"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember as TeamMemberType } from "@/TeamSection/teamData";
import { convertGoogledriveImage } from "@/app/convertImageHelper";

interface TeamMemberProps {
  member: TeamMemberType;
  delay?: number;
}

const TeamMember = ({ member, delay = 0 }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className="group"
    >
      <div className="relative mb-10 overflow-hidden shadow-xl">
        <Image
          width={800}
          height={450}
          src={convertGoogledriveImage(member.image)}
          alt={member.name}
          className="aspect-[3/4] w-full object-cover grayscale filter transition-all duration-1000 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-1000 group-hover:bg-black/10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 transform bg-[#c0a062] transition-transform duration-1000 group-hover:scale-x-100"></div>
      </div>
      <h3 className="mb-3 font-['Playfair_Display',serif] text-3xl font-extralight text-gray-900">
        {member.name}
      </h3>
      <p className="mb-8 text-xs font-medium uppercase tracking-[0.4em] text-[#c0a062]">
        {member.role}
      </p>
      <p className="text-lg font-extralight leading-relaxed tracking-wide text-gray-600">
        {member.description}
      </p>
    </motion.div>
  );
};

export default TeamMember;
