import facilities from "../../.././data/facilities.json";
import { Button, BorderButton } from "../.././UI/Button/Button";
import Progressbar from "react-js-progressbar";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

export const Facility = ({openBookings}) => {
//   const [percentage, setPercentage] = useState(item.spaceLeft);

//   const change_progressbar_input = () => {
//     setPercentage(50);
//   };

// let navigate = useNavigate()

  return (
    <div className="w-[95%] sm:w-full overflow-x-hidden grid grid-cols-1 m-auto sm:grid-cols-4 gap-4">
      {facilities.map((item) => (
        <div key={item.id} className="  sm:mb-10 sm:mr-5 shadow-xl rounded-md">
          <div className="w-full">
            <img
              className="w-full rounded-t-md"
              src={require(`../../../${item.image}`)}
              alt=""
            />
          </div>
          <div className="w-full p-[10px]">
            <h1 className="text-lg">&#8358;{item.price}</h1>
            <p className="text-xs text-gray-500">{item.size}</p>
          </div>

          <div className="m-[10px] flex justify-between">
            <div id="progressbarContainer" className="mr-4">
              <Progressbar
                input={item.spaceLeft}
                pathWidth={20}
                // clockwise={false}
                pathColor={"#4F7F19"} // use an array for gradient color.
                trailWidth={20}
                trailColor="#7DD145" // use a string for solid color.
                textStyle={{ fill: "#00A71180" }} // middle text style
              >
              </Progressbar>
            </div>
            <p className="text-xs">{item.description}</p>
          </div>

          <div className="flex justify-between w-full px-[10px] mb-[20px]">
            <Button
              className="text-[white] text-xs sm:w-[100px] w-[70px] mx-2"
              background="#4F7F19"
              onClick={openBookings}
            >
              Book
            </Button>
            <BorderButton
              className="border-[#4F7F19] border-[2px] text-xs w-[70px] sm:w-[100px] mx-2"
              background="#ffff"
              color="#4F7F19"
              border="1px solid #4F7F19"
            >
              Watchlist
            </BorderButton>
          </div>
        </div>
      ))}
    </div>
  );
};
