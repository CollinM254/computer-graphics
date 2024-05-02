import React from 'react';

function ColorPicker({ setCurrentColor }) {
    const colors = ['black', 'red', 'blue', 'green', 'yellow'];

    return (
        <div className="ColorPicker">
            <h2>Color Picker</h2>
            {colors.map(color => (
                <button key={color} style={{ backgroundColor: color }} onClick={() => setCurrentColor(color)} />

            ))}
        </div>
    );
}

export default ColorPicker;
