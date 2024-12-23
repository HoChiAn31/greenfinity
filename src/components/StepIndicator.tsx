import React from "react";

interface Step {
  id: number;
  label: string;
  isActive: boolean;
}

const StepIndicator: React.FC<{ steps: Step[] }> = ({ steps }) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center bg-white">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              step.isActive
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-500"
            } font-semibold`}
          >
            {step.id}
          </div>
          <div className="ml-2">
            <span
              className={`${
                step.isActive ? "text-teal-500 font-semibold" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-12 h-1 ${
                step.isActive ? "bg-teal-500" : "bg-gray-200"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
