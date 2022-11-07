import Image from "next/image";
import React, { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      }
    })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:p-10">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 my-auto cursor-pointer "
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none "
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={ placeholder || "Start your search"}
        />
        <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full md:inline-flex md:mx-2" />
      </div>
      {/*  right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500 ">
        <p className="hidden cursor-pointer md:inline-flex ">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center p-2 space-x-2 border-2 rounded-full ">
          <MenuIcon className="h-6 " />
          <UserCircleIcon className="h-6 " />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center mb-4 border-b ">
            <h2 className="flex-grow text-2xl font-semibold ">
              Number of Guests
            </h2>
            <UserCircleIcon className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              min={-1}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-12 pl-2 text-lg text-red-400 outline-none "
            />
          </div>
          <div className="flex ">
            <button onClick={resetInput} className="flex-grow text-gray-500 ">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400 ">Search </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
