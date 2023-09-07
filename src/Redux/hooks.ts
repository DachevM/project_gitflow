import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "./store";
import type { TypedUseSelectorHook } from "react-redux";

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { useAppDispatch, useAppSelector };
