import React, { useState } from "react";
import axios from "axios";
import { serverURL } from "../helpers/Constants.js";

function FormContainer(props) {
  const { reloadpage } = props;
  const [fullURL, setFullURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${serverURL}/shortURL`, {
        fullURL: fullURL,
      });
      setFullURL("");
    } catch (error) {
      console.log(error);
    }
    reloadpage();
  };

  return (
    <div className="container mx-auto p-2">
      <div className="bg-banner my-8 rounded-xl bg-cove bg-center">
        <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">
          <h2 className="text-white text-4xl text-center pb-4">URL SHORTNER</h2>
          <p className="text-white text-center pb-2 text-xl font-extralight">
            paste your untidy link to shorten it
          </p>
          <p className="text-white text-center pb-4 text-sm font-thin">
            free tool to shorten your urls
          </p>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slte-800">
                  urlshortner.link/
                </div>
                <input
                  type="text"
                  placeholder="add your link"
                  required
                  value={fullURL}
                  className="block w-full p-4
                  ps-32 text-sm text-gray-900 border-gray-300 rounded-lg bg-white focus:ring-blue-500
                  focus:border-blue-500"
                  onChange={(e) => {
                    setFullURL(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none"
                >
                  Shorten
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
