import React from "react";
import Reward from "../reward/Reward";
import { Link, useNavigate } from "react-router-dom";

function CardContainer({ paper, handles }) {
    console.log(`paper`, paper)
    const navigate = useNavigate();
    const handleButtonClick = (e) => {
        e.preventDefault();

        const {
            target: { value },
        } = e;
        handles.handleExerciseRedirection(value)
        navigate('/paperPage');
    }
  return (
    <div className="paperCard">
      <div className="box">
        <div className="content-paperCard">
          <img src={paper.icon} className="img-paperCard" />
          <div className="date-paperCard">{paper.date}</div>
          <div className="title-paperCard">{paper.title}</div>
          <div className="text-paperCard">{paper.description}</div>
          <button
            className="btn-paperCard"
            value={paper.id}
            onClick={(e) => handleButtonClick(e)}
          >
            READ
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
