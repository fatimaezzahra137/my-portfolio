// components/ContactForm.tsx - النسخة الكاملة المعدلة
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Mail, MessageSquare, User } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // التحقق من الحقول
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);

    try {
      // إرسال الإيميل عبر EmailJS
      const result = await emailjs.send(
        'service_osh46n7',     // Service ID
        'template_9b9lcmo',    // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        'n_QLoEzV3_QG2Ygh0'    // Public Key
      );

      console.log('Email sent successfully:', result);

      toast.success("Message sent successfully!", {
        description: "I'll be back within 24h",
      });

      // إعادة تعيين الفورم
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(' Email sending error:', error);
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
      {/* Name Field */}
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
          placeholder="Your full name"          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900 placeholder-gray-500 transition-smooth"
          aria-required="true"
        />
      </div>

      {/* Email Field */}
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
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900 placeholder-gray-500 transition-smooth"
          aria-required="true"
        />
      </div>

      {/* Message Field */}
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
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900 placeholder-gray-500 resize-none transition-smooth"
          aria-required="true"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 transition-smooth hover:shadow-red-200"
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