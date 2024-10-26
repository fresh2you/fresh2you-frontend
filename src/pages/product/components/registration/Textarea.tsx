import "../././../../../styles/styles.css";
import { inputUtils } from "@/utils/commonUtils";
import ShowMaxLen from "./ShowMaxLen";
import { InputWithLabelProps } from "@/types/common/commonProps";

const Textarea: React.FC<InputWithLabelProps> = ({ id, label, value, onChange, maxLength }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-custom-input font-semibold">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          inputUtils.handleMaxLengthChange(e, maxLength, onChange)
        }
        maxLength={maxLength}
        rows={4}
        className="border rounded custom-focus px-2 py-1"
        required
        aria-required="true"
        aria-labelledby={`label-${id}`}
      />
      <ShowMaxLen value={value} maxLength={maxLength} />
    </div>
  );
};

export default Textarea;
