import { DUCK_WIDTH } from "./constants";

const generateClassName = (className, attributes = {}) => {
  let generatedClass = `${className}`;
  if (Object.values(attributes).length === 0) {
    return className;
  }

  if (attributes.width) {
    generatedClass += ` ${generatedClass}_${DUCK_WIDTH.FULL}`;
  }

  return generatedClass;
};

export default generateClassName;
