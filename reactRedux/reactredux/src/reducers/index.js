import changeTheNumber from "./upDown";
import multTheNumber from "./multDiv";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
    // myNumber: changeTheNumber
        changeTheNumber,
        multTheNumber
    }
);

export default reducers;