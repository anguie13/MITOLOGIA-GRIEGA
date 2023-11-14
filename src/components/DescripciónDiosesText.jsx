import React from "react";

export default function DescripciónDiosesText({
  url = "",
  text_alt = "",
  text_btn = "",
}) {
  return (
    <div className="box-menu-principal">
      <img src={url} alt={text_alt} />
      <span className="overlay-text-menu">
        <p>{text_btn}</p>
      </span>
    </div>
  );
}
