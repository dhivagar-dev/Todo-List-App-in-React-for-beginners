import React from "react";

const PriorityBadge = ({ level }) => {
  const styles = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-green-100 text-green-800",
  };

  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        styles[level] || "bg-gray-100 text-gray-800"
      }`}
    >
      {level}
    </span>
  );
};

export default PriorityBadge;
