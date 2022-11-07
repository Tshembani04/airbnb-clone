import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import Mapp from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate} `;

  console.log(searchResults);
  console.log(router.query);

  return (
    <div>
      <Header placeholder={`${location} | ${range} ${noOfGuests} guests `} />

      {/* search page  */}

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} number of guests{" "}
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>
          <div className="hidden space-x-3 text-gray-800 lg:inline-flex whitespace-nowrap ">
            <p className="button"> Cancellation Flexibility </p>
            <p className="button"> Type of place </p>
            <p className="button"> Rooms and Beds </p>
            <p className="button"> More filters </p>
          </div>
          <div className=" flex flex-col ">
            {searchResults.map(
              ({ img, location, description, title, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  description={description}
                  title={title}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className=" hidden xl:inline-flex xl:min-w-[600px] ">
          <Mapp />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
