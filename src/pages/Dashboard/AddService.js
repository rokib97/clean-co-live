import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../api";
const AddService = () => {
  const [imgURL, setImgURL] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const serviceData = {
      ...data,
      image: imgURL,
    };
    const res = await fetcher.post("/add-service", serviceData);
    console.log(res);
    reset();
    setImgURL("");
  };
  const handleUploadImage = (e) => {
    setLoading(true);
    const formData = new FormData();
    const image = e.target.files[0];
    formData.append("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=84ac25e6f0a66515cd8221236b78c8f9",
        formData
      )
      .then((res) => {
        // console.log(res.data.data.display_url);
        setImgURL(res.data.data.display_url);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center w-full items-center h-screen bg-accent">
      <div class="card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 className="text-2xl text-center">Add Service</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Service Name</span>
              </label>
              <input
                type="text"
                {...register("serviceName")}
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Service Charge</span>
              </label>
              <input
                type="text"
                {...register("serviceCharge")}
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label
                htmlFor="image"
                class={
                  loading
                    ? "btn btn-primary mt-4 loading"
                    : "btn btn-primary mt-4"
                }
              >
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                onChange={handleUploadImage}
                class="input input-bordered hidden"
              />
            </div>
            <div class="form-control mt-6">
              <button
                type="submit"
                class="btn btn-primary"
                disabled={!imgURL ? true : false}
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
