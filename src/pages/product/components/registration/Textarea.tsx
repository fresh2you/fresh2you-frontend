import "../././../../../styles/styles.css";
import { inputUtils } from "@/utils/commonUtils";
import ShowMaxLen from "./ShowMaxLen";
import { InputWithLabelProps } from "@/types/common/commonProps";

const Textarea: React.FC<InputWithLabelProps> = ({ id, label, value, onChange, maxLength }) => {
  return (
    <section className="flex flex-col mb-2.5">
      <label htmlFor={id} className="mb-1 font-semibold text-custom-input">
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
        className="px-2 py-1 border rounded custom-focus-light border-custom-gray-light"
        required
        aria-required="true"
        aria-labelledby={`label-${id}`}
      />
      <ShowMaxLen value={value} maxLength={maxLength} />
    </section>
  );
};

export default Textarea;
