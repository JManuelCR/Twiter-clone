import React from "react";
import LeftSitebar from "./componets/LeftSideBar";
import MainComponent from "./componets/MainComponent";

export default Home;

function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/** left */}
        <LeftSitebar />
        <MainComponent />
        <section>right section</section>
      </div>
    </div>
  );
}
