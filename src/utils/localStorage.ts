import { IInitialState } from "../types/types";

export const getLocalStorage = (key: string): IInitialState => {
  const data = localStorage.getItem(key);

  if(data !== null){
    return JSON.parse(data)
  }

  return {};
}

export const setLocalStorage = (key: string, data: IInitialState) => {
  localStorage.setItem(key, JSON.stringify(data));
}