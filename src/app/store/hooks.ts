import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispath, RootState } from ".";

export const useAppDispatch = () => useDispatch<AppDispath>();
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
