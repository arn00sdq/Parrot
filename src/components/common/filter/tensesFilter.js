import { data as tenses } from "../../../database/english_tenses";
import Checkbox from "../tool/Checkbox";
import React from "react";
import {PickerImg } from "../../../database/images";


export default function TensesFilter({ handles, from, filterData }) {
  return (
    <div className="theme-container">
      <p className="title-search-section">
        <img src={PickerImg.key} className="icon-filter"/>
        <span className="title-search">Filter by tense :</span>
      </p>
      <ul>{listTenses(handles, from, filterData)}</ul>
    </div>
  );

  function listTenses(handles, from, activities) {
    let count = 0;
    let row = [];
    for (const tensesName in tenses) {
      if (Object.hasOwnProperty.call(tenses, tensesName)) {
        const tense = tenses[tensesName];
        activities.forEach(act => {
          if (act.summary.tenses.indexOf(tense) != -1) {
            count++
          }
        })
        row.push(
          <Checkbox
            key={tense}
            handles={handles}
            from={from}
            label={tense}
            type="tense"
            count={count}
          />
        );
      }
      count = 0
    }
    return row;
  }
}
