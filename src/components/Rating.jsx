import React, { useState } from "react";

const Rating = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating) {
      setSubmitted(true);
    }
  };
  return (
    <div className="h-screen max-w-screen flex justify-center items-center">
      <div className="overpass-regular w-[30%] p-6 text-white">
        {!submitted ? (
          <div className="bg-[hsl(214,26%,12%)] p-8 rounded-[2rem] shadow-lg">
          <div className="bg-[hsl(216,12%,8%)] inline-block p-4 leading-10 mb-8 rounded-full">
          <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
          </div>

            <h2 className="text-3xl mb-4 font-semibold">How did we do?</h2>
            <p className="text-[hsl(217,12%,63%)] text-md">
            Please let us know how we did with your support request. All feedback is appreciated 
            to help us improve our offering!
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex justify-around">
                {[1, 2, 3, 4, 5].map((value) => (
                  <label key={value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={value}
                      className="hidden"
                      onChange={() => setRating(value)}
                    />
                    <span
                      className={`my-4 font-bold inline-block w-10 leading-10 text-center shadow-lg rounded-full ${
                        rating === value
                          ? "bg-white text-[hsl(216,12%,8%)]"
                          : "bg-[hsl(216,12%,8%)] hover:bg-[hsl(25,97%,53%)] hover:text-[hsl(216,12%,8%)]"
                      }`}
                    >
                      {value}
                    </span>
                  </label>
                ))}
              </div>
              <button
                type="submit"
                className="w-full font-bold tracking-wider py-2 px-4 bg-[hsl(25,97%,53%)] text-[hsl(216,12%,8%)] rounded-3xl shadow-lg hover:bg-white"
              >
                SUBMIT
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-[hsl(213,19%,18%)] text-[hsl(217,12%,63%)] p-6 rounded-lg shadow-lg text-center">
          <p>
            You selected {value} out of 5
          </p>
            <h2 className="text-2xl font-bold my-2 text-white">Thank You!</h2>
            <p className="text-md">We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rating;
