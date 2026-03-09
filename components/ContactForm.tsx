"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Mail, MessageSquare, User } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  // État du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Gestion des changements dans les champs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification des champs obligatoires
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);

    try {
      // Envoi via EmailJS
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '' // Public Key
      );

      console.log('Email sent successfully:', result);

      toast.success("Message sent successfully!", {
        description: "I'll be back within 24h",
      });

      // Réinitialisation du formulaire
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error('Email sending error:', error);
      // @ts-ignore
      const errorMessage = error?.text || error?.message || "Something went wrong. Check console.";

      toast.error("Failed to send message", {
        description: `Error: ${errorMessage}`,
      });

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in-up"
      aria-label="Contact form"
    >
      {/* Champ Nom */}
      <div className="space-y-2">
        <label htmlFor="name" className="block font-semibold text-gray-900">
          <User className="w-4 h-4 inline mr-2" />
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#704630] text-gray-900 placeholder-gray-500 transition-smooth"
          aria-required="true"
        />
      </div>

      {/* Champ Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block font-semibold text-gray-900">
          <Mail className="w-4 h-4 inline mr-2" />
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#704630] text-gray-900 placeholder-gray-500 transition-smooth"
          aria-required="true"
        />
      </div>

      {/* Champ Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block font-semibold text-gray-900">
          <MessageSquare className="w-4 h-4 inline mr-2" />
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell me about your project..."
          rows={6}
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#704630] text-gray-900 placeholder-gray-500 resize-none transition-smooth"
          aria-required="true"
        />
      </div>

      {/* Bouton d’envoi */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-gradient-to-r from-[#704630] to-[#5a3826] text-white font-semibold rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 transition-smooth hover:shadow-[#F8E8E8]"
        aria-busy={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-sm text-gray-500 text-center mt-4">
        I typically respond within 24 hours 📧
      </p>
    </form>
  );
}
