import { useState } from "react";
import BreadCrumb from "../../../components/Breadcrumb";
import Container from "../../../components/Container";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormStatus("Submitting...");
    setTimeout(() => {
      setFormStatus(
        "Thank you for reaching out! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <Container>
      <BreadCrumb currentPageTitle={"Contact Us"} />
      <div className="min-h-screen py-10 px-5">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
          <p className="text-lg text-center mb-8">
            We’d love to hear from you! Fill out the form below and we’ll get
            back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message here"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
          {formStatus && (
            <p className="text-center mt-4 text-green-600 font-semibold">
              {formStatus}
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
