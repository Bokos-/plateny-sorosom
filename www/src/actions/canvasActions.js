import { TYPE_SET_CONTEXT_REF } from "../constants/canvasConstants";

export function setContextRef(contextRef) {
  return {
    type: TYPE_SET_CONTEXT_REF,
    context: contextRef
  };
}
