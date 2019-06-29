import { NEXT_PAGE, SELECT_MENU } from "./actionTypes";
import _ from "lodash";

const initialState = {
  currentPage: 1,
  selectedMenu: 0,
  menus: [
    {
      position: 1,
      name: "달걀",
      calorie: 100,
      category: "green"
    },
    {
      position: 2,
      name: "소고기",
      calorie: 100,
      category: "green"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        currentPage: action.payload,
        selectedMenu: state.selectedMenu,
        menus: state.menus
      };
    case SELECT_MENU:
      console.log(
        "page " +
          _.find(state.menus, function(o) {
            return o.position === action.payload;
          }).name +
          "menu " +
          action.payload
      );
      return {
        currentPage: state.currentPage,
        selectedMenu: action.payload,
        menus: state.menus
      };
    default:
      return state;
  }
}
