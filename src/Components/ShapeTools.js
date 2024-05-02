import React from 'react';

function ShapeTools({ onSelectShape }) {
    return (
        <div className="ShapeTools">
            <h2>Shape Tools</h2>
            <button onClick={() => onSelectShape('line')}>Line</button>
            <button onClick={() => onSelectShape('circle')}>Circle</button>
            <button onClick={() => onSelectShape('rectangle')}>Rectangle</button>

            {/* Add more buttons for other shape tools as needed */}
        </div>
    );
}

export default ShapeTools;
