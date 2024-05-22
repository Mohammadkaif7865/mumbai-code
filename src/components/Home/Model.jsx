import React, { useState } from "react";
import { Modal } from "antd";
import { toast } from "react-toastify";

const Model = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    companyName: "",
    websiteUrl: "",
    email: "",
    fromWhere: "mumbai",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
    const data = {
      name: formData.name,
      company: formData.companyName,
      website: formData.websiteUrl,
      email: formData.email,
      phone: formData.phoneNo,
      fromWhere: formData.fromWhere,
    };

    // console.log(data);

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
        setIsModalOpen(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data:", formData);
  //   // Here you can send the form data to your backend or perform any other necessary action
  //   // Reset the form data if needed
  //   setFormData({
  //     name: "",
  //     companyName: "",
  //     websiteUrl: "",
  //     email: "",
  //     phoneNo: "",
  //   });
  //   // Close the modal
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
        footer={null}
        centered={true}
      >
        <div className="w-[100%] md:bg-white rounded-2xl md:p-6">
          <h3 className="font-bold text-[24px] md:text-[32px] leading-tight text-center font-redhat">
            Ready to boost your leads?
          </h3>
          <form onSubmit={handleSubmit} className="font-poppins">
            <div className="w-full relative group mt-[25px]">
              <input
                type="text"
                name="name"
                id={"name3"}
                inputMode="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full  h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
              />
              <label
                htmlFor={"name3"}
                className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
              >
                Name
              </label>
            </div>

            <div className="w-full relative group mt-[25px]">
              <input
                type="text"
                name="companyName"
                id={"companyname3"}
                inputMode="text"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full  h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
              />
              <label
                htmlFor={"companyname3"}
                className="transform transition-all text-[#999] absolute top-0  left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
              >
                Company Name
              </label>
            </div>
            <div className="w-full relative group mt-[25px]">
              <input
                type="text"
                name="websiteUrl"
                id={"webUrl"}
                inputMode="url"
                value={formData.websiteUrl}
                onChange={handleChange}
                required
                className="w-full  h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
              />
              <label
                htmlFor={"webUrl"}
                className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
              >
                Website Url
              </label>
            </div>
            <div className="w-full relative group mt-[25px]">
              <input
                type="email"
                name="email"
                id={"email3"}
                inputMode="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full  h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
              />
              <label
                htmlFor={"email3"}
                className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
              >
                Email
              </label>
            </div>

            <div className="w-full relative group mt-[25px]">
              <input
                type="tel"
                name="phoneNo"
                id={"phoneNo3"}
                inputMode="tel"
                value={formData.phoneNo}
                onChange={handleChange}
                required
                className="w-full  h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
              />
              <label
                htmlFor={"phoneNo3"}
                className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
              >
                Phone No
              </label>
            </div>

            <button className="py-3 rounded-xl bg-[#e31a20] mt-8 w-full font-poppins text-white text-[14px] md:text-[14px] font-bold">
              SEND REQUEST
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Model;
