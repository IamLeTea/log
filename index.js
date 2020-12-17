// node modules
import getRandomValueInArray from "@letea/functions/getRandomValueInArray";
import checkIsString from "@letea/functions/checkIsString";

const DEFAULT_LABEL_STYLE =
  "font-weight: bold; padding: .1rem .25rem; margin-right: .25rem;";
const DEFAULT_COLORS = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1"
];

const defaultProps = {
  label: "",
  labelColor: "#ffffff",
  labelBackgroundColor: "",
  messageColor: ""
};

class Log {
  constructor(props = defaultProps) {
    if (checkIsString(props)) {
      props = { label: props };
    }

    const { label, labelColor, labelBackgroundColor, messageColor } = {
      ...defaultProps,
      ...props
    };

    this.label = label;
    this.labelColor = labelColor;
    this.labelBackgroundColor =
      labelBackgroundColor || getRandomValueInArray(DEFAULT_COLORS);
    this.messageColor = messageColor;
  }

  setLabel(label = "") {
    this.label = label;
  }

  setLabelColor(labelColor = "") {
    this.labelColor = labelColor;
  }

  setLabelBackgroundColor(labelBackgroundColor = "") {
    this.labelBackgroundColor = labelBackgroundColor;
  }

  setMessageColor(messageColor = "") {
    this.messageColor = messageColor;
  }

  print(message = "", data = "") {
    console.log(
      `%c${this.label}%c${message}`,
      this.getLabelStyle(),
      this.getMessageStyle(),
      data
    );
  }

  warn(message = "", data = "") {
    console.warn(
      `%c${this.label}%c${message}`,
      this.getLabelStyle(),
      this.getMessageStyle(),
      data
    );
  }

  error(message = "", data = "") {
    console.error(
      `%c${this.label}%c${message}`,
      this.getLabelStyle(),
      this.getMessageStyle(),
      data
    );
  }

  getLabelStyle() {
    return `color: ${this.labelColor}; background-color: ${this.labelBackgroundColor}; ${DEFAULT_LABEL_STYLE}`;
  }

  getMessageStyle() {
    return this.messageColor ? `color: ${this.messageColor}` : "";
  }
}

export default Log;
