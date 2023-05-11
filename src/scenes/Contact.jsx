import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const Conatct = () => {
    const isSmallScreen = useMediaQuery("(max-width: 700px)");

    return (
        <section
            id="contact"
            className={`bg-gray-100 flex flex-col items-center p-20 ${isSmallScreen && "px-5"}`}
        >
            <div>
                <h2 className="text-center font-black text-4xl">CONTACT</h2>
                <span id="underline-of-heading" className="absolute left-1/2 transform -translate-x-1/2 translate-y-6 h-1.5 w-8 bg-yellow rounded-md"></span>
                <p className="text-xl text-center mt-12">
                    Feel free to Contact me by submitting the form below and I will get back to you
                    as soon as possible
                </p>
            </div>

            <form
                className={`bg-white shadow-xl round w-full max-w-3xl flex flex-col gap-10 p-16 ${
                    isSmallScreen && "px-8"
                } mt-20`}
                target="_blank"
                action="https://formsubmit.co/134eebc821043b4835a87af796c705cb"
                method="POST"
            >
                <div className="space-y-2 ">
                    <label className="font-semibold text-gray-700">Name</label>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        class="shadow-sm border bg-slate-100 text-gray-900 font-semibold block w-full rounded p-4"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="space-y-2 ">
                    <label className="font-semibold text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class="border shadow-sm bg-slate-100 text-gray-900 font-semibold block w-full rounded p-4"
                        placeholder="Your email"
                        required
                    />
                </div>
                <div className="space-y-2 ">
                    <label className="font-semibold text-gray-700">Message</label>
                    <textarea
                        rows="6"
                        id="message"
                        name="message"
                        class="border shadow-sm bg-slate-100 text-gray-900 font-semibold block w-full rounded p-4"
                        placeholder="Your message"
                    />
                </div>
                <input type="hidden" name="_captcha" value="false"></input>
                <button
                    type="submit"
                    class="py-4 w-full max-w-[250px] rounded text-lg bg-yellow font-bold shadow-lg hover:bg-amber-400 transition duration-300 mx-auto mt-10"
                >
                    SEND MESSAGE
                </button>
            </form>
        </section>
    );
};

export default Conatct;
