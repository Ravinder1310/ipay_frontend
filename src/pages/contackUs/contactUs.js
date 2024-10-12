import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import emailjs from 'emailjs-com'; // Import EmailJS
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false); // State to manage sending status

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to true

    // Ensure the form data matches the variables defined in your EmailJS template
    const emailParams = {
      to_name: 'I-pay Team',
      from_name: formData.name,
      from_email: formData.email,  // This will be used in the email content (optional)
      message: formData.message,
      reply_to: formData.email,    // This will set the Reply-To field
    };

    emailjs
      .send(
        'service_x68skyi', // Your EmailJS service ID
        'template_i0ai2lf', // Your EmailJS template ID
        emailParams, // The object that matches your template variables
        '0W2nvi-xfFXyB2fvV' // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.status, result.text);
          toast.success('Your message has been sent successfully!'); // Show success toast
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.log('Failed to send email.', error);
          toast.error('Failed to send the message. Please try again later.'); // Show error toast
        }
      )
      .finally(() => {
        setIsSending(false); // Reset sending state
      });
  };

  return (
    <Layout>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
      <div className= "py-10 w-[100%] m-auto mt-0 sm:mt-0 bg-transparent pt-20 px-4 sm:px-0 bg-blue-200">
        <div className="max-w-lg mx-auto bg-blue-200 px-4 py-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Feel free to reach out to us anytime! At I-pay, we value your
            feedback, queries, and concerns. Our dedicated support team is ready
            to assist you on your financial journey. Contact us at{" "}
            <a href="mailto:info@ipaysolutions.com" className="text-red-600">
              info@ipaysolutions.com,
            </a>
            , and let's make your experience with I-pay exceptional. Your
            satisfaction is our priority!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Email fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            {/* Subject field */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />

            {/* Message field */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            ></textarea>

            {/* Submit button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSending} // Disable button while sending
                className={`w-full sm:w-auto ${isSending ? 'bg-gray-400' : 'bg-red-600'} text-white py-3 px-8 rounded-md font-bold hover:bg-red-700 transition-colors duration-300`}
              >
                {isSending ? 'Sending...' : 'Send Message'} {/* Change button text */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
