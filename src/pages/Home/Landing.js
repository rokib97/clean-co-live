import React from "react";
import bucketgirl from "../../assests/images/bucketgirl.png";
const Landing = () => {
  return (
    <dev className="relative">
      <div class="hero h-screen lg:h-[60vh] bg-accent z-10 mt-16">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-xl"
            >
              Best Quality
            </p>
            <h1
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="400"
              class="text-5xl font-bold"
            >
              Professional Cleaning Service
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="600"
              class="py-6 max-w-xl"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1200"
              class="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img src={bucketgirl} class="h-full" alt="" />
          </div>
        </div>
      </div>
      <div className="shadow-lg mx-auto p-10 bg-base-200 relative z-20 mt-[-30px] w-5/6 rounded-lg">
        <h1 className="text-2xl mb-5 text-primary">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary mt-5">REQUEST A QOUTE</button>
      </div>
    </dev>
  );
};

export default Landing;
