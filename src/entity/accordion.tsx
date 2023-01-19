import { entity, persistence } from "simpler-state";
type defaultStateProps = {
  imageIndex: number;
};
const defaultState = 0
export const storedData =
  typeof window !== "undefined" && window.localStorage.getItem("imageIndex");
export const imgIndex = storedData ? JSON.parse(storedData) : defaultState;
export const accordionImg = entity(imgIndex, [persistence("imageIndex")]);
// console.log(accordionImg, "work");
export const setImg = (value: number) => {
  accordionImg.set(value);
};
