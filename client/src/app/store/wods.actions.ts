import { createAction, props } from '@ngrx/store';
import { Wod } from '../interfaces/wod.interface';

export const loadWods = createAction('[WOD] Load Wods');
export const loadWodsSuccess = createAction('[WOD] Load Wods Success', props<{ wods: Wod[] }>());
export const loadWodsFailure = createAction('[WOD] Load Wods Failure', props<{ error: any }>());