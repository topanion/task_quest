import React from "react";

export default function Character({ userInfo }) {
  const getImageSource = () => {
    if (userInfo.character_class === "Mage") {
      return "/sprites/mage.png";
    } else if (userInfo.character_class === "Archer") {
      return "/sprites/archer.png";
    } else {
      return "/sprites/warrior.png";
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div
        className="relative lg:w-[50%] md:w-[70%] w-[100%] h-[30vh] flex rounded-2xl"
        style={{
          backgroundImage: `url('/background/moss.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={getImageSource()}
          alt={userInfo.character_class}
          className="absolute left-[10%] bottom-[10%] lg:w-[20%] md:w-[15%] w-24 animate-bounce-short"
        />
      </div>
    </div>
  );
}
