import Editor from "../shared/editor";
import TextExtenderForm from "../textextanderForm";
import { ToolSlider } from "../toolslider";

const TextExtender = () => {
  return (
    <div className="p-4 ">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side: Slider + Editor */}
        <div className="flex flex-col gap-4 lg:w-2/3 w-full">
          {/* Slider should go full width across the editor */}
          <div className="-mx-4 px-4">
            <ToolSlider />
          </div>

          {/* Editor */}
          <Editor />
        </div>

        {/* Right Side: Humanizer Form */}
        <div className="lg:w-1/3 w-full">
          <TextExtenderForm />
        </div>
      </div>
    </div>
  );
};

export default TextExtender;
