"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember as TeamMemberType } from "@/TeamSection/teamData";
import { convertImageHelper } from "@/app/convertImageHelper";
import ImageLoader from "@/app/ImageLoader";

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
      className="group w-full mx-auto"
    >
      <div className="relative mb-8 overflow-hidden shadow-xl rounded-lg bg-white">
        <ImageLoader
          width={400}
          height={500}
          src={convertImageHelper(member.image)}
          alt={member.name}
          className="aspect-[4/5] w-full object-cover filter transition-all duration-1000 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-1000 group-hover:bg-black/10 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 transform bg-[#c0a062] transition-transform duration-1000 group-hover:scale-x-100"></div>
      </div>
      <div className="text-center px-2">
        <h3 className="mb-3 text-xl sm:text-2xl lg:text-3xl font-extralight text-gray-900">
          {member.name}
        </h3>
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-[#c0a062]">
          {member.role}
        </p>
        <p className="text-sm sm:text-base lg:text-lg font-extralight leading-relaxed tracking-wide text-gray-600 px-4">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamMember;
