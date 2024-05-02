import React from 'react';

function Shape({ shape, onDelete }) {
    const { type, color, ...attributes } = shape;

    let shapeComponent = null;

    switch (type) {
        case 'line':
            shapeComponent = <line {...attributes} />;
            break;
        case 'circle':
            shapeComponent = <circle {...attributes} />;
            break;
        case 'rectangle':
            shapeComponent = <rect {...attributes} />;
            break;
        // Add more cases for other shape types (e.g., polygon)
        default:
            break;
    }

    return (
        <g fill={color}>
            {shapeComponent}
            <button onClick={onDelete}>Delete</button>
        </g>
    );
}

export default Shape;
