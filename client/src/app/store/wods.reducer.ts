import { createReducer, on } from '@ngrx/store';
import { loadWods, loadWodsSuccess, loadWodsFailure } from './wods.actions';
import { Wod } from '../interfaces/wod.interface';

export interface WodsState {
    wods: Wod[];
    loading: boolean;
    error: any;
}

export const initialState: WodsState = {
    wods: [],
    loading: false,
    error: null,
};

export const wodsReducer = createReducer(
    initialState,
    on(loadWods, state => ({ ...state, loading: true, error: null })),
    on(loadWodsSuccess, (state, { wods }) => ({ ...state, wods, loading: false })),
    on(loadWodsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);