import './globals.css';

import Header from '../app/_components/Header';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false); // State to control the popup visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send form data to backend)
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Show the popup
    setShowPopup(true);
    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div>
       <Header />
       <div className="flex items-center justify-center h-screen">
      <div>
       
        <div className="container px-10 py-8 bg-gray-200 rounded-lg shadow-lg"> {/* Adding gray background color */}
          <h1 className="text-3xl font-bold mb-4 text-blue-600">Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 text-gray-800"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 text-gray-800"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border rounded px-4 py-2 text-gray-800"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
          </form>
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="bg-white rounded-lg p-8">
                <p className="text-xl text-center text-green-600">Your query has been submitted!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
