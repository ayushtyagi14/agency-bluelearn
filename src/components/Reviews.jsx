import React, { useState } from "react";

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    review: "",
  });

  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      email: "johndoe@example.com",
      rating: "4",
      review: "Great product!",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      rating: "2",
      review: "Average service. Needs to be better :(",
    },
    {
      name: "Ayush Tyagi",
      email: "janesmith@example.com",
      rating: "5",
      review: "Great Product! Customer service was also good.",
    },
  ]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    setIsReview(false);
    event.preventDefault();
    const newReview = {
      name: formData.name,
      email: formData.email,
      rating: formData.rating,
      review: formData.review,
    };
    setReviews([...reviews, newReview]);
    setFormData({
      name: "",
      email: "",
      rating: "",
      review: "",
    });
  };

  const [sortOption, setSortOption] = useState("popularity");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    switch (event.target.value) {
      case "ratingHighToLow":
        setReviews([...reviews].sort((a, b) => b.rating - a.rating));
        break;
      case "ratingLowToHigh":
        setReviews([...reviews].sort((a, b) => a.rating - b.rating));
        break;
      default:
        break;
    }
  };

  const [isReview, setIsReview] = useState(false);

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Reviews
          </h2>
          <p className="mt-2 md:text-[28px] text-[22px] leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            See what our clients have to say
          </p>
        </div>
        <div className="mt-10">
          <div className="flex justify-end items-center">
            <label className="text-gray-700 mr-2">Filter by:</label>
            <select
              className="border border-gray-300 rounded-md text-[14px] p-1"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="popularity">Popularity</option>
              <option value="ratingHighToLow">Rating: High to Low</option>
              <option value="ratingLowToHigh">Rating: Low to High</option>
            </select>
          </div>
          <div className="mt-10 flex flex-col items-center w-full">
            {/* Replace the reviews with your own */}
            <div className="bg-white shadow overflow-hidden sm:rounded-md w-full">
              <ul className="divide-y divide-gray-200">
                {reviews.map((item, index) => (
                  <li key={index}>
                    <div className="px-4 py-4 sm:px-6">
                      <h1> {item.name} </h1>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-5 text-gray-500">
                          {item.rating}/5 ★
                        </p>
                      </div>
                      <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                        <p>{item.review}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="border bg-white rounded-lg shadow py-1 px-3 mt-10"
              onClick={() => setIsReview(true)}
              id="addReview"
            >
              Add a Review +
            </button>

            {isReview && (
              <div className="mt-10 w-full">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full p-3 text-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      onChange={handleInputChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full p-3 text-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="rating"
                    >
                      Rating
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full p-3 text-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="rating"
                      name="rating"
                      onChange={handleInputChange}
                      value={formData.rating}
                    >
                      <option value="5">5 stars</option>
                      <option value="4">4 stars</option>
                      <option value="3">3 stars</option>
                      <option value="2">2 stars</option>
                      <option value="1">1 star</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="review"
                    >
                      Review
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full p-3 text-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="review"
                      rows="4"
                      placeholder="Enter your review"
                      name="review"
                      onChange={handleInputChange}
                      value={formData.review}
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
