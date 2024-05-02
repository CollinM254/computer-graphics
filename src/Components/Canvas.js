import React, { useState, useRef } from 'react';
import Shape from './Shape';
import ShapeTools from './ShapeTools';
import ColorPicker from './ColorPicker';

function Canvas() {
  const [shapes, setShapes] = useState([]);
  const [currentColor, setCurrentColor] = useState('black');
  const [selectedShape, setSelectedShape] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const handleMouseDown = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const clickedShape = shapes.find(shape => {
      const { x, y, width, height } = shape;
      if (
        offsetX >= x &&
        offsetX <= x + width &&
        offsetY >= y &&
        offsetY <= y + height
      ) {
        return shape;
      }
    });

    if (clickedShape) {
      setSelectedShape(clickedShape);
      setDragging(true);
      setInitialPosition({ x: offsetX, y: offsetY });
    } else {
      const newShape = {
        type: selectedShape,
        color: currentColor,
        x: offsetX,
        y: offsetY,
      };
      drawShape(newShape);
    }
  };

  const handleMouseMove = (event) => {
    if (dragging && selectedShape) {
      const { offsetX, offsetY } = event.nativeEvent;
      const dx = offsetX - initialPosition.x;
      const dy = offsetY - initialPosition.y;

      const updatedShape = {
        ...selectedShape,
        x: selectedShape.x + dx,
        y: selectedShape.y + dy,
      };
      updateShape(shapes.indexOf(selectedShape), updatedShape);
      
      setInitialPosition({ x: offsetX, y: offsetY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    setInitialPosition({ x: 0, y: 0 });
  };

  const drawShape = (shape) => {
    setShapes([...shapes, shape]);
  };

  const updateShape = (index, newShape) => {
    const updatedShapes = [...shapes];
    updatedShapes[index] = newShape;
    setShapes(updatedShapes);
  };

  const deleteShape = (index) => {
    const updatedShapes = shapes.filter((shape, i) => i !== index);
    setShapes(updatedShapes);
  };

  const undo = () => {
    if (shapes.length > 0) {
      const lastShapeIndex = shapes.length - 1;
      const lastShape = shapes[lastShapeIndex];
      setShapes(shapes.slice(0, lastShapeIndex));
    }
  };

  return (
    <div className="Canvas">
      <ShapeTools onSelectShape={(tool) => setSelectedShape(tool)} />
<ColorPicker setCurrentColor={(color) => setCurrentColor(color)} />

      <svg
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {shapes.map((shape, index) => (
          <Shape key={index} shape={shape} onDelete={() => deleteShape(index)} />
        ))}
      </svg>
    </div>
  );
}

export default Canvas;
