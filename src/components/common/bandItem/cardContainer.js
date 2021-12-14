import React from "react";
import Reward from "../reward/Reward";
import { Link, useNavigate } from "react-router-dom";

function CardContainer({ paper, handles }) {
    var to;
    const navigate = useNavigate()
    switch ("paperPicker") {
      case "paperPicker":
        to = "/paperPage";
        break;
      case "lessonPicker":
        to = "/lessonPage";
        break;
  
      default:
        break;
    }
    
    const handleButtonClick = (e) => {
        console.log(paper.id)
        e.preventDefault();

        const {
            target: { value },
        } = e;
        handles.handlePaperStart(paper.id)
        navigate('/paperPage')
        
    }
    console.log(paper.id)
  return (
    <div className="paperCard">
      <div className="box">
        <div className="content-paperCard">
          <img src={paper.icon} className="img-paperCard" />
          <div className="date-paperCard">{paper.date}</div>
          <div className="title-paperCard">{paper.title}</div>
          <div className="text-paperCard">{paper.description}</div>
          <Link className="btn-paperCard" to={to}  onClick={(e) => handleButtonClick(e)}>
              READ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
