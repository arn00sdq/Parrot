import React from "react";

function tagDisplay(tags ) {
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
      <div key={element} className="tag-point-small">
        {element}
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

function DisplayTags({ title, tags }) {
  return (
    <div className="row-section-summary">
      <div className="title-row-summary">{title} : </div>
      <div className="row-content-summary">{tagDisplay(tags)}</div>
    </div>
  );
}

export default DisplayTags;
