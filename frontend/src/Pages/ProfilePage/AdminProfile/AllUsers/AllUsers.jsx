// AllUsers.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersAsync,
  deleteUserAsync,
  selectUsers,
} from "../../../../ProfileAllUserRedux/Reducers/AlluserReducers";
import { MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
export default function AllUsers() {
  const dispatch = useDispatch();
  const { alluserloading, error, users } = useSelector(
    (state) => state.alluser
  );
  const [Search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [data, setData] = useState([]);

  const handleRemoveItem = (id) => {
    dispatch(deleteUserAsync(id));
    toast.success("User has been deleted");
  };

  useEffect(() => {
    // Fetch user data
    dispatch(getUsersAsync());
  }, [dispatch]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    if (searchTerm === "") {
      setSearchData([]); // Clear the search results
    } else {
      const searched = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchData(searched);
    }
  };

  if (alluserloading) {
    return (
      <div className="min-h-full flex flex-col items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="text-white w-[80%] mx-auto relative">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-bold mb-4">All Users({users.length})</h1>
        <div className="w-[50%] relative">
          <input
            type="text"
            value={Search}
            placeholder="Search user "
            onChange={handleSearch}
            className=" border p-2 hidden 1000px:block rounded-md w-full active:border-yellow-500 text-black outline-none"
          />
          {searchData && searchData.length !== 0 ? (
            <div className="absolute   z-[1] w-full h-fit p-2 shadow-md rounded-md bg-white">
              {searchData.map((d, i) => (
                <div
                  className="text-black bg-gray-400 rounded-md select-none p-2 relative border-b mt-2 mb-2 flex items-center"
                  key={i}
                >
                  <img
                    src={"http://localhost:3000/" + d.avatar}
                    alt=""
                    className="w-[40px] h-[40px] object-cover mr-[10px]"
                  />

                  <p>{d.email}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <Link
          to={"/addminadduser"}
          className=" bg-darkRed p-3 rounded-md text-white cursor-pointer"
        >
          Add&nbsp;User
        </Link>
      </div>

      <div className="grid mt-6 w-fit grid-cols-1 md:grid-cols-2 1100px:grid-cols-3 gap-10 ">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white relative h-[350px] shrink-0 w-full  px-2 py-10 rounded shadow"
          >
            <img
              src={"http://localhost:3000/" + user?.avatar}
              className="h-[75%] aspect-square object-center object-contain"
              alt=""
            />
            <h2 className="text-lg text-black font-bold">{user?.name}</h2>
            <p className="text-md  text-black font-bold">
              Email: {user?.email}
            </p>
            <button
              className="text-darkRed  absolute bottom-4 right-4 cursor-pointer"
              onClick={() => handleRemoveItem(user._id)}
            >
              <MdDelete size={25} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
