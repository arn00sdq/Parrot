import React from "react";
import {PickerImg } from "../../../database/images";

export default function KeywordFilter({handles, from}) {
  return (
    <div className="section-filter-search">
              <p className="title-search-section">
                <img src={PickerImg.key} className="icon-filter"/>
                <span className="title-search">Keys Words</span>
              </p>
              <div className="search-bar">
                <div className="search-form">
                  <input name="keywords" type="text" placeholder="Research" className="search-field"></input>
                  <button className="search-send"><img src={PickerImg.search_icon} className="icon-filter-button"/></button>
                </div>
              </div>
            </div>
  );
}
