import React from "react";

function NewsComponent(state) {
    return (
    <div className="News__popular-element">
        <div className="News__popular_element-wrapper">
            <p className="News__title" id="News__element-title">{state.title}</p>
            <p className="News__popular-subtitle">{state.subtitle}</p>
            <p className="News__tags" id="News__element-tags">{state.tags} Tweets</p>
        </div>
    </div>
    );
}

export default NewsComponent;