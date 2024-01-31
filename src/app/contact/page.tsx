import React, { useRef} from "react";
// import emailjs from "@emailjs/browser";

const Contact = () => {
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //
    //     emailjs
    //         .sendForm(
    //             "service_u3qpdwr",
    //             "template_74ykybq",
    //             form.current,
    //             "xmeBYSdv4Z81maPSc"
    //         )
    //         .then(
    //             (result) => {
    //                 console.log(result.text);
    //                 alert("Your Email has been sent successfully.");
    //             },
    //             (error) => {
    //                 console.log(error.text);
    //                 alert("Error while sending message.");
    //             }
    //         );
    // };

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
        <div>
            <div className="container mx-auto mt-[4vh] mb-[4vh] lg:rounded-2xl  bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20 customRadius">
                <div data-aos="fade" className="aos-init aos-animate">
                    <div className="container px-4 sm:px-5 md:px-10 lg:px-20">
                        <div className="py-12">
                            <h2 className="text-3xl text-white font-medium after-effect after:left-44 mb-[40px] mt-12 lg:mt-0 heading">
                                Contact
                            </h2>
                            <div className="lg:flex gap-x-20">
                                {/* personal contact information */}
                                <div className="w-full lg:w-[40%] xl:w-[30%] space-y-6">
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
                                                        style={{ overflowWrap: "anywhere" }}
                                                        className="text-gray-lite text-lg text-[#A6A6A6]"
                                                    >
                                                        {data.info}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
                                    <div
                                        data-aos="fade"
                                        className="border-[#212425] border-2 mb-16 md:p-[48px] p-4 bg-color-810 rounded-xl bg-[#111111] mb-[30px] md:mb-[60px] aos-init aos-animate"
                                    >
                                        <h3 className="text-4xl">
                      <span className="text-gray-lite text-[#A6A6A6]">
                        I&apos;m always open to discussing project
                      </span>
                                            <br />
                                            <span className="font-semibold text-white">
                        design websites
                      </span>
                                        </h3>
                                        <form id={"myForm"}>
                                            {/* name input */}
                                            <div className="relative z-0 w-full mt-[40px] mb-8 group">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="fullName"
                                                    className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-white border-[#333333] focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                                                    placeholder=""
                                                    required
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                                                >
                                                    Name *
                                                </label>
                                            </div>
                                            {/* Phone Input */}
                                            <div className="relative z-0 w-full mt-[40px] mb-8 group">
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-white border-[#333333] focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                                                    placeholder=""
                                                    required
                                                />
                                                <label
                                                    htmlFor="phone"
                                                    className="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                                                >
                                                    Phone *
                                                </label>
                                            </div>
                                            {/* email input  */}
                                            <div className="relative z-0 w-full mb-8 group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-white border-[#333333] focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                                                    placeholder=" "
                                                    id="user_email"
                                                    required
                                                />
                                                <label
                                                    htmlFor="user_email"
                                                    className="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                                                >
                                                    Email *
                                                </label>
                                            </div>
                                            {/* massage input */}
                                            <div className="relative z-0 w-full mb-8 group">
                                                <input
                                                    type="text"
                                                    name="message"
                                                    className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-white border-[#333333] focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                                                    placeholder=" "
                                                    id="message"
                                                    required
                                                />
                                                <label
                                                    htmlFor="message"
                                                    className="peer-focus:font-medium absolute text-sm text-gray-500 text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                                                >
                                                    Message *
                                                </label>
                                            </div>
                                            <div className="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3">
                                                {/* submit buttons */}
                                                <input
                                                    type="submit"
                                                    className="transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white text-white"
                                                    value="Submit"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;