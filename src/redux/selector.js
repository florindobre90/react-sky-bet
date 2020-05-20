import { createSelector } from "reselect";

const reducerState = () => state => {
    return state.eventsStore;
};

export const isLoadingSelector = () =>
    createSelector(
        reducerState(),
        state => {
            return state.isLoading;
        }
    );

export const liveEventsSelector = () =>
    createSelector(
        reducerState(),
        state => {
            return state.eventsGrouped;
        }
    );

export const marketsListSelector = () =>
    createSelector(
        reducerState(),
        state => {
            return state.markets;
        }
    );

export const outcomesListSelector = () =>
    createSelector(
        reducerState(),
        state => {
            return state.outcomes;
        }
    );

