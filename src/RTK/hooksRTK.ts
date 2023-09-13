import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

import { type RootState, type ToolkitDispatch } from "./state";

const useToolkitDispatch: () => ToolkitDispatch = useDispatch;
const useToolkitSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useToolkitDispatch, useToolkitSelector };
