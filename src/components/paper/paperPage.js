import React from 'react';
import DisplaySummary from "../common/displayActivity/summary/displaySummary";
import DisplayPaper from "../common/displayActivity/paper/displayPaper";
import { bush } from '../../database/images'
import { data as paperData } from "../../database/papers";

function PaperPage({ state, handles }) {
   
    var paper = paperData;
    var id = state.paperPage.paperId;
    var step = state.paperPage.step;
    var isFinished = state.paperPage.end;
    var currentpaper = paper.find((e) => {
        return e.id ==  id ;
    });
    console.log(currentpaper)
    return (
        <div id="root-css">
            <img className="bush2" src={bush} />

            <main>
                <DisplaySummary
                    name={`${id} ${": "} ${state.paperPage.paperId}`}
                    summary={currentpaper.summary}
                />
                <DisplayPaper
                    paper={currentpaper}
                    step={step}
                    handles={handles}
                    from="paperPage"
                    isFinished = {isFinished}
                />
            </main>
        </div>
    )
}

export default PaperPage;
