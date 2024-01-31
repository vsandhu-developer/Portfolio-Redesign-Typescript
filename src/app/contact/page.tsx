"use client"

import React from "react";

export default function Contact() {

    const contactInfo = [
        {
            id: 1,
            imageURL:
                "https://bostamihtml.ibthemespro.com/images/contact/phone-call.png",
            type: "Phone no",
            info: "+1 (647) 924-6141",
        },
        {
            id: 2,
            imageURL: "https://bostamihtml.ibthemespro.com/images/contact/email.png",
            type: "Email",
            info: "developervsandhu@gmail.com",
        },
        {
            id: 3,
            imageURL: "https://bostamihtml.ibthemespro.com/images/contact/map.png",
            type: "Address",
            info: "8 Blackwell Place Brampton ON",
        },
    ];

    return (
        <div className={"min-h-[80vh] flex justify-center items-center"}>
            <div className="container mx-auto mt-[4vh] mb-[4vh] lg:rounded-2xl  bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20 customRadius">
                <div data-aos="fade" className="aos-init aos-animate">
                    <div className="container px-4 sm:px-5 md:px-10 lg:px-20">
                        <div className="py-12">
                            <h2 className="text-3xl text-white font-medium after-effect after:left-44 mb-[40px] mt-12 lg:mt-0 heading">
                                Contact Me
                            </h2>
                            <h3 className="text-4xl mb-[40px] leading-[60px]">
                                  <span className="text-gray-lite text-[#A6A6A6]">
                                    I&apos;m always open to discuss project&apos;s related to
                                  </span><br/><span className="font-semibold text-white">websites and mobile apps development.</span>
                            </h3>
                            <div className="lg:flex gap-x-20">
                                {/* personal contact information */}
                                <div className="w-full flex justify-between flex-col lg:flex-row lg: space-x-6">
                                    {contactInfo.map((data, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-wrap bg-transparent p-[30px] border-[#212425] border-2 gap-2 rounded-xl"
                                            >
                                                <span className="w-full my-2">
                                                  <img
                                                      src={data.imageURL}
                                                      alt="icon"
                                                      className="w-[40px] text-2xl text-white"
                                                  />
                                                </span>
                                                <div className="space-y-2">
                                                    <p className="text-xl font-semibold text-white">
                                                        {data.type} :
                                                    </p>
                                                    <p
                                                        style={{overflowWrap: "anywhere"}}
                                                        className="text-gray-lite text-lg text-[#A6A6A6]"
                                                    >
                                                        {data.info}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};