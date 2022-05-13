import React from "react";
import bucketgirl from "../../assests/images/bucketgirl.png";
const Landing = () => {
  return (
    <div class="hero h-screen lg:h-[60vh] bg-accent mt-16">
      <div class="hero-content flex-col lg:flex-row">
        <div>
          <p className="text-xl">Best Quality</p>
          <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
          <p class="py-6 max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
        <div className="h-[60vh] shrink-0">
          <img src={bucketgirl} class="h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
