"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    companyName: "",
    websiteUrl: "",
    email: "",
    fromWhere: "Dallas",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const data = {
      name: formData.name,
      company: formData.companyName,
      website: formData.websiteUrl,
      email: formData.email,
      phone: formData.phoneNo,
      fromWhere: formData.fromWhere,
    };
    try {
      const API_TOKEN = "FgRCHG4OVv8Z1BcrjExKJcqspvTsUTCe";
      const url = "https://www.sibinfotech.com/api/send-email";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: API_TOKEN,
        },
        body: JSON.stringify(data),
      });

      console.log(response.data);
      if (response.status == 200) {
        toast.success("Email Send Successfully!");

        setFormData({
          name: "",
          companyName: "",
          websiteUrl: "",
          email: "",
          phoneNo: "",
        });

        setTimeout(() => {
          window.location.href = "https://sibinfotech.com/thanks";
        }, 2000);
      }
      if (!response.status == 200) {
        return toast.error("Somthing went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="">
      <div className="w-[100%] md:bg-white rounded-2xl md:p-6">
        <h1 className="font-bold text-[24px] md:text-[32px] leading-tight text-center font-redhat">
          Ready to boost your leads?
        </h1>
        {/* <form onSubmit={handleSubmit} className="font-poppins ">
          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              id="name2"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="name2"
              className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Name
            </label>
          </div>

          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              name="comapanyName"
              id="comapany_Name2"
              value={formData.comapanyName}
              onChange={handleChange}
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="comapany_Name2"
              className="transform transition-all text-[#999] absolute top-0  left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Comapany Name
            </label>
          </div>
          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              name="websiteUrl"
              id="websiteUrl2"
              value={formData.websiteUrl}
              onChange={handleChange}
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="websiteUrl2"
              className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Website Url
            </label>
          </div>
          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              name="email"
              id="email2"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="email2"
              className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Email
            </label>
          </div>

          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              name="phoneNo"
              id="phoneNo4"
              value={formData.phoneNo}
              onChange={handleChange}
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="phoneNo4 "
              className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Phone No
            </label>
          </div>

          <button className="py-3 rounded-xl bg-[#e31a20] mt-8 w-full  font-poppins text-white texr-[14px] md:text-xl ">
            SEND REQUEST
          </button>
        </form> */}
        <form
          className="Hero_form text-[#999] font-poppins"
          onSubmit={handleSubmit}
        >
          <div className={`grid    "}`}>
            {/* ${oneline ? "" : "grid-cols-2 gap-4 */}
            <div class="user-box mt-[23px] ">
              <input
                className=""
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name" className="">
                Name
              </label>
            </div>
          </div>
          <div class="user-box mt-[23px] ">
            <input
              className=""
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
            <label htmlFor="companyName" className="">
              Company Name
            </label>
          </div>

          <div class="user-box mt-[23px] ">
            <input
              className=""
              type="text"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              required
            />
            <label htmlFor="websiteUrl" className="">
              Website Url
            </label>
          </div>

          <div class="user-box mt-[23px] ">
            <input
              className=""
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="">
              Email
            </label>
          </div>
          <div class="user-box mt-[23px] ">
            <input
              className=""
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneNo" className="">
              Phone No
            </label>
          </div>

          <button className="py-3 rounded-xl bg-[#e31a20] mt-5 w-full  font-poppins text-white text-[16px] md:text-xl ">
            SEND REQUEST
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
