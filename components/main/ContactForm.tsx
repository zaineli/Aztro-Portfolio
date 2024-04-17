"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  // const [sending, setSending] = useState(f);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const submit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      const formData = new FormData(e.target);
      var data = {};
      formData.forEach((value, key) => (data[key] = value));
      console.log(data);
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `From: ${data.email}\nSubject: ${data.subject}\nPhone: ${data.phone}\nMessage:\n${data.message}`,
        }),
      });
      const _ = await res.json();
      setSent(true);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-transparent overflow-hidden relative z-50">
      <div className="relative flex justify-center  items-center">
        {sending && (
          <div className="absolute flex justify-center items-center gap-4 font-bold text-3xl text-white inset-0 bg-slate-500">
            Sending Mail
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-12 h-12 text-white animate-spin dark:text-gray-600 fill-transparent dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {sent && (
          <div className="absolute flex justify-center items-center gap-4 font-bold text-3xl text-white inset-0 bg-slate-500">
            Mail was successfully sent!
          </div>
        )}
        {error && (
          <div className="absolute flex justify-center items-center gap-4 font-bold text-3xl text-white inset-0 bg-slate-500">
            Error, Couldn't send Mail!
          </div>
        )}
        <div className="container bg-white bg-opacity-10 p-6 rounded-tl-xl rounded-bl-xl shadow-lg flex-1">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-8"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-gray-400 mb-8"
          >
            Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.
          </motion.p>
          <form onSubmit={submit}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4 "
            >
              <div className=" rounded-lg grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className=" input w-full p-2 rounded-lg"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className=" input p-2 rounded-lg"
                />
                {/* <input type="text" placeholder="City" className=" p-2 rounded-lg input" /> */}
                {/* <input type="text" placeholder="Postcode" className=" p-2 rounded-lg input" /> */}
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone No."
                  className=" p-2 flex-1 rounded-lg input "
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className=" p-2 flex-1 rounded-lg input"
                />
              </div>
              <textarea
                name="message"
                placeholder="Write Message"
                className=" p-2 rounded-lg input textarea w-full"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="btn bg-blue-500 text-white w-full mt-4 rounded-lg p-4 font-bold text-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Send Message
            </motion.button>
          </form>
          <motion.ul
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-4 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2"
          >
            <li className="flex items-center hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 479.058 479.058"
              >
                <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
              </svg>
              <a href="mailto:info@example.com" className="text-white">
                info@example.com
              </a>
            </li>
            <li className="flex items-center text-white hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 482.6 482.6"
              >
                <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z" />
              </svg>
              <a href="tel:+158996888" className="text-white">
                +158 996 888
              </a>
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
