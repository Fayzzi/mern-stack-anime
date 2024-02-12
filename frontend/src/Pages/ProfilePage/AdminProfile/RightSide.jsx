import React, { useState, useEffect } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import AllUsers from "./AllUsers/AllUsers";
import FileUploads from "./UploadFiles/FileUploads";
import Character from "../../Character/Character";

export default function RightSide({ active }) {
  const { admin } = useSelector((state) => state.admin);
  const [name, setName] = useState(admin && admin.name);
  const [email] = useState(admin && admin.email); // email is set as readonly
  const [address, setAddress] = useState(admin && admin.address);
  const [contact, setContact] = useState(admin && admin.contact);
  const [picture, setPicture] = useState();

  const handleImageChange = (e) => {
    setPicture(e.target.files[0]);
  };

  const updateProfile = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("changedImage", picture ? picture : admin.avatar);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("contact", contact);

    axios
      .put("/api/v2/admin/updateAdmin", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };

  return (
    <div className="w-full mt-[10vh] ">
      {active === 1 && (
        <>
          <div className="flex justify-center ">
            <div className="relative">
              {picture ? (
                <img
                  src={URL.createObjectURL(picture)}
                  alt="Picture"
                  className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                />
              ) : (
                <img
                  src={"http://localhost:3000/" + admin?.avatar}
                  alt=""
                  className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                />
              )}

              <div className="h-[30px] w-[30px] cursor-pointer absolute bottom-[5px] right-2 bg-[white] rounded-full flex items-center justify-center">
                <label htmlFor="image-selector">
                  <span>
                    {" "}
                    <AiOutlineCamera className="cursor-pointer" />
                  </span>
                  <input
                    type="file"
                    name="image-selector"
                    id="image-selector"
                    className="w-full h-full hidden"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-[80%] mb-8 mx-auto">
            <div className="flex gap-2 flex-col 800px:flex-row w-full">
              <div className="w-full 800px:w-[50%]">
                <h1 className="mb-2 text-white font-bold">Name</h1>
                <input
                  type="text"
                  className="px-2 py-2 w-full rounded-md bg-white "
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full 800px:w-[50%]">
                <h1 className="mb-2 text-white font-bold">Email</h1>
                <input
                  type="email"
                  readOnly
                  className="px-2 py-2 w-full rounded-md bg-white "
                  name="email"
                  value={email}
                  id="email"
                  onChange={(e) => e.preventDefault()}
                />
              </div>
            </div>
          </div>
          <div className="w-[80%] mb-8 mx-auto">
            <div className="flex gap-2 flex-col 800px:flex-row w-full">
              <div className="w-full 800px:w-[50%]">
                <h1 className="mb-2 text-white font-bold">Address</h1>
                <input
                  type="text"
                  className="px-2 py-2 w-full rounded-md bg-white "
                  name="address"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="w-full 800px:w-[50%]">
                <h1 className="mb-2 text-white font-bold">Contact</h1>
                <input
                  type="text"
                  className="px-2 py-2 w-full rounded-md bg-white "
                  name="contact"
                  value={contact}
                  id="contact"
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={updateProfile}
              className="bg-darkRed px-6 py-3 rounded-md text-white"
            >
              Update
            </button>
          </div>
        </>
      )}
      {active === 2 && <AllUsers />}
      {active === 3 && <FileUploads />}
      {active === 4 && <Character />}
    </div>
  );
}
