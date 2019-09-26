import { createAction, props } from '@ngrx/store';

export const Load = createAction(
  '[Player] Set playList',
  props<{ list: any[] }>()
);
export const SetActiveStep = createAction(
  '[Stepper] Set Active Step',
  props<{ selectedStep: number }>()
);
// export const SetSongList = createAction(
//   '[Player] Set SongList',
//   props<{ list: any[] }>()
// );
// export const SetCurrentIndex = createAction(
//   '[Player] Set CurrentIndex',
//   props<{ index: number }>()
// );