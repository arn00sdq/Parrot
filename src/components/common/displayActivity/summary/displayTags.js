import React from "react";

import { cross_icon } from "../../../../database/images";

function tagDisplay(tags,type) {
  if (!Array.isArray(tags)) {
    return (
      <div key={tags} className="tag-point-small">
        {tags}
      </div>
    );
  }
  const row = [];
  tags.forEach((element) => {
    row.push(
      <div className="tag-section">
        <div key={element} className={type == "small" ? "tag-point-small":"tag-point-medium"}>
          {element}
        </div>
        <img className="tag-medium-cross" src={cross_icon} />
      </div>

    );
  });
  /*if(typeof props === 'object'){
        for (const [key, value] of Object.entries(props.elt)){
            row.push(<div key={value} className="tag-point-small">{value}</div>)
        }
    }else{
        row.push(<div key={props} className="level-tag">{props}</div>)
    }*/
  return row;
}

function DisplayTags({ type, title, tags }) {
  if (title == "") {
    return (
      <>
        {tagDisplay(tags, type)}
      </>
    )
  } else {
    return (
      <div className="row-section-summary">
        <div className="title-row-summary">{title} : </div>
        <div className="row-content-summary">{tagDisplay(tags)}</div>
      </div>
    );
  }

}

export default DisplayTags;
