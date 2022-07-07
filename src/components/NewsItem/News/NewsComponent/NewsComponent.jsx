import React from "react";

function NewsComponent(props) {
    return (
    <div className="News__popular-element">
        <div className="News__popular_element-wrapper">
        <p className="News__title" id="News__element-title">{props.title}</p>
        <p className="News__popular-subtitle">{props.subtitle}</p>
        <p className="News__tags" id="News__element-tags">{props.tags}</p>
        </div>
    </div>
    );
}

export default NewsComponent;