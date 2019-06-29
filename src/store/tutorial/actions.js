import { NEXT_PAGE, SELECT_MENU } from "./actionTypes";

export const nextPage = page => ({
  type: NEXT_PAGE,
  payload: page + 1
});

export const selectMenu = position => ({
  type: SELECT_MENU,
  payload: position
});
