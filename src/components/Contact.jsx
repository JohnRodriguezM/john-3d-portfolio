import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { Wrapper } from "../HOC";
import { slideIn } from "../utils/motion";
import { stylesUsing } from "../styles";
import { back } from "../assets";
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  //tBLytVHuIgf_8dUSV
  //template_sio1o4a
  //service_lvj1maa
  console.log(import.meta.env.VITE_SERVICE_ID);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "John Rodriguez",
          from_email: form.email,
          to_email: "johnjairorodriguez384@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_ID
      )
      .then((res) => {
        console.log(res);
        alert("Thanks for the message, I'll contact you asap");
        setLoading(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        alert("An error ocurred, please try again");
        setLoading(false);
      });
  };

  return (
    <>
      <Link
        to="/"
        className=" bg-white-100 absolute top-4 left-2 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-50"
      >
        <img src={back} alt="" />
      </Link>

      <div className={`xl:mt-12 flex  flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={stylesUsing.sectionSubText}>Get in touch</p>
          <h3 className={stylesUsing.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What is your message?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default Wrapper(Contact, "contact");
