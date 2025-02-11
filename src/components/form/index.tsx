import { useFormContext } from "react-hook-form";
import Typography from "@/components/typography";
import Button from "@/components/button";

import { FormProps } from "./types";

const Form = ({
  title,
  onSubmit,
  children,
  onRest,
  showReset = false,
  submitText = "Submit",
}: FormProps) => {
  const { handleSubmit, reset } = useFormContext();

  const renderClearButton = () => {
    if (!showReset) return null;

    return (
      <Button
        className="text-black w-full"
        type="submit"
        theme="secondary"
        onClick={() => {
          if (onRest) {
            onRest();
          }
          reset();
        }}
      >
        clear Form
      </Button>
    );
  };

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="w-full flex flex-col justify-center gap-6 mx-auto my-4 py-2 px-4 max-w-[700px]"
    >
      <Typography className="self-center" variant="header" fontWeight="bold">
        {title}
      </Typography>
      {children}
      <div className="w-full flex flex-col sm:flex-row gap-2 max-w-[700px]">
        <Button className="text-black w-full" type="submit">
          {submitText}
        </Button>
        {renderClearButton()}
      </div>
    </form>
  );
};

export default Form;
