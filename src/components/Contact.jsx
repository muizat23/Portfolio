import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const contacts = [
  {
    icon: <EmailIcon />,
    label: "Email",
    value: "ololademuiza@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=ololademuiza@gmail.com",
  },
  {
    icon: <PhoneIcon />,
    label: "Phone",
    value: "(+234)8148587621",
    href: "https://wa.me/2348148587621",
  },
  {
    icon: <LocationIcon />,
    label: "Location",
    value: "Oyo, Nigeria",
    href: null,
  },
];

const Contact = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-4 text-purple-400"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 mb-10"
        >
          I’m always excited to work on new ideas, collaborate with creative minds, and build meaningful digital experiences. <br />
          I'm open to internship opportunities and collaborations. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setOpen(true)}
            className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-full transition duration-300 text-lg"
          >
            Get In Touch
          </button>
        </motion.div>

        <p className="text-gray-700 text-xs mt-16">
          © 2026 Muizat Hammed. All rights reserved.
        </p>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-md p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Contact Me</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-white transition text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {contacts.map((contact) => {
                  const inner = (
                    <>
                      <span className="text-purple-400 group-hover:scale-110 transition-transform duration-200">
                        {contact.icon}
                      </span>
                      <div>
                        <p className="text-xs text-gray-500 mb-0.5">{contact.label}</p>
                        <p className="text-white text-sm font-medium group-hover:text-purple-400 transition duration-300">
                          {contact.value}
                        </p>
                      </div>
                      {contact.href && <span className="ml-auto text-gray-600 group-hover:text-purple-400 transition">→</span>}
                    </>
                  );
                  return contact.href ? (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-5 py-4 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/60 rounded-xl group transition duration-300"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={contact.label}
                      className="flex items-center gap-4 px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl group"
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
