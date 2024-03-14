import React, { useEffect, useState } from "react";

const HomeScreen = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < 100) {
      setTimeout(() => {
        setCounter((prev) => prev + 1);
      }, 100);
    }
  }, [counter]);

  console.log(counter);
  return (
    <div>
      <section className="max-w-screen-xl mx-auto mt-40 text-center">
        <h1 className="text-2xl py-4 font-semibold ">Progress Bar </h1>
        <div className="w-[450px] mx-auto border-2 rounded-xl relative h-6 ">
          <div className=" absolute left-[50%] z-10 bg-transparent"> {counter}%</div>
          <div
            style={{ width: counter + "%" }}
            className={`absolute bg-green-700 rounded-xl h-full `}
          >
            {" "}
          </div>
        </div>
        {counter < 100 ? (
          <h1 className="py-4 font-semibold text-xl top-0 text-red-600">
            Loding...
          </h1>
        ) : (
          <h1 className="py-4  font-semibold  text-xl text-green-600">
            Completed
          </h1>
        )}
      </section>
    </div>
  );
};

export default HomeScreen;
