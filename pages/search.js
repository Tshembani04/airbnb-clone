import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Search() {
  return (
    <div>
      <Header />

      {/* search page  */}

      <main className="flex">
        <section className="flex-grow px-6 pt-14" >
          <p className="text-xs">300+ Stays for 5 number of guests </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays in mars</h1>
          <div className="hidden space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap ">
            <p className="button"> Cancellation Flexibility </p>
            <p className="button"> Type of place </p>
            <p className="button"> Rooms and Beds </p>
            <p className="button"> More filters </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
