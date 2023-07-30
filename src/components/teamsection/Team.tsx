import React from "react";
import TeamImage1 from "../../images/teamImage1.jpg";
import TeamImage2 from "../../images/teamImage2.jpg";
import TeamImage3 from "../../images/teamImage3.jpg";
import TeamImage4 from "../../images/teamImage4.jpg";

const TeamData = [
  {
    Image: TeamImage1,
    Author: "Jeremiah Robertson",
    Position: "Chief Executive Officer",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. a ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Image: TeamImage2,
    Author: "Jeremiah Robertson",
    Position: "Chief Executive Officer",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. a ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Image: TeamImage3,
    Author: "Jeremiah Robertson",
    Position: "Chief Executive Officer",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. a ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Image: TeamImage4,
    Author: "Jeremiah Robertson",
    Position: "Chief Executive Officer",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. a ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Team = () => {
  return (
    <>
      {TeamData.map((e) => (
        <>
          <div className="px-70px mb-100px odd:last:mb-0 even:last:mb-0 w-full sm:w-6/12 group">
            <div className="text-center">
              <div className="pb-45px">
                <img
                  src={e.Image}
                  alt=""
                  className="rounded-[60px] w-full h-full"
                />
              </div>
              <div className="text-48 leading-48 font-semibold pb-30px">
                {e.Author}
              </div>
              <div className="text-28 leading-28 pb-30px font-semibold">{e.Position}</div>
              <p className="text-24px leading-24 max-w-xl mx-auto w-full font-medium">
                {e.Description}
              </p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Team;
