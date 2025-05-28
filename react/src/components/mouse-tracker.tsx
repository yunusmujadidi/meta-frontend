import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface PanelMouseTrackerProps {
  mousePosition: MousePosition;
}

const withMousePosition = <P extends object>(
  WrappedComponent: React.ComponentType<P & PanelMouseTrackerProps>
) => {
  return (props: P) => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMousePositionChange = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

export const PanelMouseTracker = ({
  mousePosition,
}: PanelMouseTrackerProps) => {
  if (!mousePosition) return null;

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-6 m-4 max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Mouse Tracker (HOC)
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-white p-3 rounded border">
            <span className="font-medium text-gray-600">X Position:</span>
            <span className="font-mono text-blue-600 font-bold">
              {mousePosition.x}px
            </span>
          </div>
          <div className="flex justify-between items-center bg-white p-3 rounded border">
            <span className="font-medium text-gray-600">Y Position:</span>
            <span className="font-mono text-green-600 font-bold">
              {mousePosition.y}px
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MouseTracker = withMousePosition(PanelMouseTracker);
