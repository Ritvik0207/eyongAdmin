import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const steps = [
  { id: "basic", label: "Basic Details" },
  { id: "status", label: "Status & Display" },
];

<<<<<<< HEAD
export function FormNavigation({
  currentStep,
  onStepChange,
  isBasicDetailsValid,
}) {
=======
export function FormNavigation({ currentStep, onStepChange }) {
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
  return (
    <nav className="mb-8">
      <ol className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {steps.map((step, index) => (
          <li key={step.id}>
            <Button
              variant={currentStep === step.id ? "default" : "outline"}
              className="w-full justify-start shadow-2xl"
              onClick={() => onStepChange(step.id)}
<<<<<<< HEAD
              disabled={step.id === "status" && !isBasicDetailsValid}
=======
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
            >
              <span className="mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary">
                {index < steps.findIndex((s) => s.id === currentStep) ? (
                  <Check className="h-4 w-4" />
                ) : (
                  index + 1
                )}
              </span>
              <span className="truncate">{step.label}</span>
            </Button>
          </li>
        ))}
      </ol>
    </nav>
  );
}

FormNavigation.propTypes = {
  currentStep: PropTypes.string.isRequired,
  onStepChange: PropTypes.func.isRequired,
<<<<<<< HEAD
  isBasicDetailsValid: PropTypes.bool.isRequired,
=======
>>>>>>> 962cb4ccd6966cce08ab764263b03c0d3d9bc55d
};
