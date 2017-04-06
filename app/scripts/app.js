import { createStore, applyMiddlware } from 'redux'
import thunk from './middleware/thunk.js'
import logger from './middleware/logger.js'

export default function app() {

    const reducer = function (state, action) {
        switch (action.type) {
            case "START":
                return state;

            default:
                console.debug(`Unhandled Action: ${action.type}!`);
                return state;
        };
    };

    const store = createStore(
        reducer,
        applyMiddleware(
            thunk,
            logger
        )
    );
}
