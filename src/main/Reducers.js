import { combineReducers } from 'redux';
import DashboardReducer from '../dashboard/DashboardReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer
});

export default rootReducer;