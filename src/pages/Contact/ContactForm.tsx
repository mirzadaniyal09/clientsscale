import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: "" });

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log("EmailJS Credentials:", {
        SERVICE_ID,
        TEMPLATE_ID,
        PUBLIC_KEY,
      });

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("EmailJS credentials are missing");
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY,
      );

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: "Message sent successfully! We will get back to you soon.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-fields">
        <div className="contact-field">
          <label htmlFor="first-name">First Name</label>
          <input
            id="first-name"
            name="firstName"
            placeholder="Jane"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="last-name">Last Name</label>
          <input
            id="last-name"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-fields">
        <div className="contact-field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (626) 548-7517"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          placeholder="How can we help?"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about your goals, requirements, timeline, or anything else you'd like us to know..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Status Message */}
      {status.message && (
        <div
          style={{
            padding: "12px 16px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: 600,
            background: status.success
              ? "rgba(16, 185, 129, 0.12)"
              : "rgba(239, 68, 68, 0.12)",
            color: status.success ? "#059669" : "#dc2626",
            border: `1px solid ${
              status.success
                ? "rgba(16, 185, 129, 0.25)"
                : "rgba(239, 68, 68, 0.25)"
            }`,
          }}
        >
          {status.message}
        </div>
      )}

      <div className="contact-submit">
        <Button type="submit" disabled={status.loading}>
          {status.loading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
