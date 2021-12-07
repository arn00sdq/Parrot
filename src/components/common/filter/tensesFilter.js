import { data as tenses } from "../../../database/tenses";
import Checkbox from '../tool/Checkbox'
import React from "react";

export default function TensesFilter({handles, from}) {
  return (
    <div className="filter-container">
      <div className="title-filter-container">Filter by tense:</div>
      <ul>{listTenses(from)}</ul>
    </div>
  );

  function listTenses(from) {
    let row = [];
    for (const tensesName in tenses) {
      if (Object.hasOwnProperty.call(tenses, tensesName)) {
        const tense = tenses[tensesName];
        row.push(<Checkbox key = {tense} from={from} label={tense} />);
      }
    }
    return row;
  }
}