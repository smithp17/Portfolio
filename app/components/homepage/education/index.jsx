// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";

import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">

      {/* Background Image */}
      <Image
        src="/image/Smit_image.png"
        alt="Smit Image"
        width={400}
        height={200}
        className="absolute top-0 -z-10 opacity-20 object-contain"
      />

      {/* Divider line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
          <span className="bg-[#2F2F2F] w-fit text-amber p-2 px-5 text-xl rounded-md">
            Education
          </span>
          <span className="w-24 h-[2px] bg-[#2F2F2F]"></span>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* LEFT SIDE — Your Image */}
          <div className="flex justify-center items-start">
            <Image
              src="/image/Smith_image.png"
              alt="Smit Image"
              width={350}
              height={350}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* RIGHT SIDE — Cards */}
          <div>
            <div className="flex flex-col gap-6">
              {educations.map((education) => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-3 relative">

                    {/* Duration */}
                    <div className="flex justify-center">
                      <p className="text-xl font-bold text-[#fff]">
                        {education.duration}
                      </p>
                    </div>

                    {/* Card Inside */}
                    <div className="flex items-center gap-x-8 px-3 py-5">

                      {/* Left Icon + Text */}
                      <div className="flex items-center gap-x-4">
                        <div className="text-[#ffbf00] transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>

                        <div>
                          <p className="text-[#4beba0] sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {education.institution}
                          </p>
                          <p className="text-md sm:text-base text-[#ffbf00]">
                            {education.gpa}
                          </p>
                        </div>
                      </div>

                      {/* Right Image */}
                      <div className="ml-auto w-1/3 flex justify-end">
                        <Image
                          src={education.image}
                          alt="Education Image"
                          width={150}
                          height={150}
                          className="rounded-md object-cover"
                        />
                      </div>

                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;
