import React from 'react';

function RowArticle(lesson) {
    var row = []; 
    for (const [key, value] of Object.entries(lesson)) { 
        if (typeof(value) !== 'number')
            row.push(value)
    }
    return row;
}

function Article(props) {
    return (
        <div className="content-lesson-section" key={props.content.step}>
            {RowArticle(props.content.text)}
        </div>
    );
}

export default Article;