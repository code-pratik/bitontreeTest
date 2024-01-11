import React from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rick and Morty</title>
      </Helmet>
      <div className="bg-[#E4E7EB] dark:bg-gray-900 min-h-[92.5vh] py-3 px-6">
        <div className="container mx-auto ">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Welcome to Rick and Morty
          </h1>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-md rounded-lg overflow-hidden shadow-lg">
              <img className="w-full" src={img1} alt="Rick And Morty Img" />
              <div className="p-4 dark:text-white dark:bg-gray-800 ">
                <h2 className="text-xl font-semibold mb-2">First Image</h2>
                <p className="text-gray-700 dark:text-white ">
                  A scene from the amazing adventures of Rick and Morty.
                </p>
              </div>
            </div>
            <div className="max-w-md rounded-lg overflow-hidden shadow-lg">
              <img className="w-full" src={img2} alt="Rick And Morty Img 2" />
              <div className="p-4 dark:text-white dark:bg-gray-800 ">
                <h2 className="text-xl font-semibold mb-2">Second Image</h2>
                <p className="text-gray-700 dark:text-white">
                  Another exciting moment from the Rick and Morty universe.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              About the Show
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              "Rick and Morty" is a popular animated sci-fi sitcom created by
              Dan Harmon and Justin Roiland. The series follows the adventures
              of an eccentric and alcoholic scientist, Rick Sanchez, and his
              good-hearted but easily influenced grandson, Morty Smith.
            </p>
            <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
              Each episode is packed with humor, adventure, and clever
              references to science fiction and pop culture.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
