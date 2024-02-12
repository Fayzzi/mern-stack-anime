import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CiStar } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
export default function CharLeft() {
  const [selectedValue, setSelectedValue] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [description, setdescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [selectedImages, setselectedImages] = useState([]);
  const uploadbyLink = (e) => {
    axios
      .post("/api/v2/admin/upload-by-link", {
        link: imageLink,
      })
      .then((response) => {
        setImageLink("");
        setselectedImages((prev) => {
          return [response.data, ...prev];
        });
      });
  };
  const uploadFromGallery = (e) => {
    e.preventDefault();
    const files = e.target.files;
    const formdata = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append("photos", files[i]);
    }

    axios
      .post("/api/v2/admin/upload-from-gallery", formdata)
      .then((response) => {
        setImageLink("");
        setselectedImages((prev) => {
          return [...response.data.generatedFileNames, ...prev];
        });
      });
  };
  const selectFirst = (imagesele) => {
    setselectedImages((prev) => {
      return [imagesele, ...prev.filter((d, i) => d !== imagesele)];
    });
  };
  const uploadCharacter = (e) => {
    e.preventDefault();
    axios
      .post("/api/v2/admin/add-character", {
        name: name,
        age: age,
        gender: selectedValue,
        description: description,
        photos: selectedImages,
      })
      .then((response) => {
        setname("");
        setselectedImages([]);
        setage("");
        setSelectedValue("");
        setdescription("");
        toast.success("Character added successfully");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const removeSelectedImage = (selectedToRemove) => {
    setselectedImages((prev) => {
      return prev.filter((image) => image !== selectedToRemove);
    });
  };

  return (
    <div className="py-4 w-[80%] mx-auto">
      <h1 className="pt-6 text-white text-[20px] 800px:text-[30px] mb-5 font-bold">
        Add Character
      </h1>
      <form onSubmit={uploadCharacter} action="" className="gap-y-4">
        <div className="gap-2 my-6 flex flex-col">
          <label className="text-white text-[19px]" htmlFor="">
            Name
          </label>
          <input
            name="name-selector"
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            className="p-2 w-full outline-none active:border-darkRed rounded-md shadow-md"
          />
        </div>
        <div className="gap-2 my-6 flex flex-col">
          <label className="text-white text-[19px]" htmlFor="">
            Age
          </label>
          <input
            name="age-selector"
            required
            value={age}
            onChange={(e) => setage(e.target.value)}
            type="number"
            className="p-2 w-full outline-none active:border-darkRed rounded-md shadow-md"
          />
        </div>{" "}
        <div className="gap-2 my-6 flex flex-col">
          <label className="text-white text-[19px]" htmlFor="">
            Gender
          </label>
          <select
            required
            className="p-2 outline-none active:border-darkRed rounded-md"
            id="dropdown"
            name="dropdown"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option disabled value="">
              Select
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="gap-2 my-6 flex flex-col">
          <label className="text-white text-[19px]" htmlFor="">
            Images
          </label>
          <div className="flex gap-2">
            <input
              value={imageLink}
              placeholder="paste image link...."
              onChange={(e) => setImageLink(e.target.value)}
              type="text"
              className="p-2 w-full outline-none active:border-darkRed rounded-md shadow-md"
            />
            <button
              onClick={uploadbyLink}
              className="bg-darkRed p-2 rounded-md text-white"
            >
              Get&nbsp;Image
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 my-6">
          {selectedImages &&
            selectedImages.map((d, i) => {
              return (
                <div className="relative" key={i}>
                  <img
                    className="h-[120px] w-full aspect-square object-contain"
                    src={"http://localhost:3000/" + d}
                    alt=""
                  />
                  <div className="absolute bottom-2 left-3">
                    {d === selectedImages[0] ? (
                      <IoStar size={25} color="white" />
                    ) : (
                      <CiStar
                        onClick={(e) => selectFirst(d)}
                        className="cursor-pointer"
                        color="white"
                        size={25}
                      />
                    )}
                  </div>
                  <div className="absolute bottom-2 right-3">
                    <MdDelete
                      onClick={(e) => {
                        removeSelectedImage(d);
                      }}
                      size={25}
                      color="red"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          <div className="bg-white h-[120px] items-center rounded-md flex">
            <label
              className="w-full cursor-pointer h-full flex items-center justify-center"
              htmlFor="images-sel"
            >
              Upload
            </label>
            <input
              multiple
              type="file"
              id="images-sel"
              accept=".jpg,.png,.jpeg"
              onChange={uploadFromGallery}
              className="w-full h-full hidden"
            />
          </div>
        </div>
        <div className="gap-2 my-6 flex flex-col">
          <label className="text-white text-[19px]" htmlFor="">
            Description
          </label>
          <textarea
            required
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            rows={6}
            type="number"
            className="p-2 resize-none w-full outline-none active:border-darkRed rounded-md shadow-md"
          />
        </div>{" "}
        <button className="my-2 py-2 px-4 rounded-md text-white bg-darkRed">
          Upload
        </button>
      </form>
    </div>
  );
}
