import React from "react";
import { Link } from "react-router-dom";
import emojipedia from "./emojipedia"; // Assuming your emojipedia data is in a file named "emojipedia.js"

const EmojipediaLinks = () => {
  return (
    <div className="emojipedia-container">
      {emojipedia.map(({ id, province, iconicPlace, link }) => (
        <Link key={id} to={link}>
          <img
            src={iconicPlace}
            alt={province}
        
          />
        </Link>
      ))}
    </div>
  );
};

export default EmojipediaLinks;
