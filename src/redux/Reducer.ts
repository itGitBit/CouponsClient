
import { AppState } from "./AppState";

import { Action } from "./Action";
import { ActionType } from "./ActionType";

let appState = new AppState();
export const reduce = (oldAppState: AppState = appState, action: Action): AppState => {
    const newState = { ...oldAppState };
    switch (action.type) {
        case ActionType.SEARCH:
           let query = action.payload;
              newState.query = query;
            break;
        case ActionType.ISLOGGEDIN:
            let isLoggedIn = action.payload;
            newState.isLoggedIn = isLoggedIn;
            break;
            case ActionType.GETALLCOUPONS:
                newState.coupons = action.payload;
                break;

    }
    return newState;
}