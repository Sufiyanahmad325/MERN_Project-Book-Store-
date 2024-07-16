import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-cover bg-center h-64" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512820790803-83ca734da794')" }}></div>
        <div className="p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Welcome to our bookstore! At [Bookstore Name], we are dedicated to providing a wide range of books to inspire, educate, and entertain readers of all ages and interests. Our carefully curated collection includes the latest bestsellers, timeless classics, and hidden gems waiting to be discovered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Journey</h3>
              <p className="text-gray-600 mb-4">
                Since our founding in 2020, we have grown from a small, independent bookstore to a beloved community hub. Our journey has been driven by a passion for books and a commitment to fostering a love of reading in our community.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">What We Offer</h3>
              <p className="text-gray-600 mb-4">
                From fiction to non-fiction, children's books to academic texts, we have something for everyone. Our knowledgeable staff is always on hand to help you find the perfect book or suggest your next favorite read.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Community Events</h3>
              <p className="text-gray-600 mb-4">
                We regularly host author readings, book signings, and community events. Join us for our monthly book club meetings or attend a workshop to meet fellow book lovers and learn something new.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                Have questions or need assistance? Feel free to <a href="/contact" className="text-blue-500 hover:underline">contact us</a>. We look forward to helping you with all your book needs!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
