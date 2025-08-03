import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WodsState } from './wods.reducer';

export const selectWodsState = createFeatureSelector<WodsState>('wods');
export const selectWods = createSelector(selectWodsState, state => state.wods);
export const selectWodsLoading = createSelector(selectWodsState, state => state.loading);
export const selectWodsError = createSelector(selectWodsState, state => state.error);