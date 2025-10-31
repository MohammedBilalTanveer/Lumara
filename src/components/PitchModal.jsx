import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // ← Assuming you have this installed; npm i @emailjs/browser
import { Button } from "./ui/button"; // Adjust path as needed
import { X } from "lucide-react";
import { toast } from "react-hot-toast";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2 || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

export default function PitchModal({ isOpen, onClose }) {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error(
        "EmailJS is not configured — set VITE_EMAILJS_* environment variables.",
        { position: "bottom-right" }
      );
      return;
    }

    setIsSending(true);
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          toast.success("Pitch submitted successfully! We'll review it soon. ✅", {
            position: "bottom-right",
            style: { background: "black", color: "white" },
          });
          formRef.current?.reset();
          onClose();
          setIsSending(false);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          toast.error("Failed to submit pitch ❌ Try again later.", {
            position: "bottom-right",
            style: { background: "black", color: "white"},
          });
          setIsSending(false);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-md text-gray-800"
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <X className="h-6 w-6 cursor-pointer" />
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center text-primary">
          Submit Your Pitch
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Tell us about your startup idea and how you’re shaping the future.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name" // ← EmailJS param
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="user_email" // ← EmailJS param
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            name="startup_name" // ← Custom param for startup name
            placeholder="Startup Name"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message" // ← EmailJS param
            rows="4"
            placeholder="Describe your idea..."
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
          <Button
            type="submit"
            size="lg"
            disabled={isSending}
            className="w-full bg-primary text-white hover:opacity-90 transition"
          >
            {isSending ? "Sending..." : "Submit Pitch"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}