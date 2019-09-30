import { Action, createReducer, on } from '@ngrx/store';
import * as stepperActions from './stepper.actions';
// import { featureAdapter } from './state';

const initialStepsData = [
  { label: 'Name', placeholder: 'Enter your name...', value: '1' },
  { label: 'Phone', placeholder: 'Enter your phone...', value: '2' },
  { label: 'Email', placeholder: 'Enter your email...', value: '3' }
];

export interface StepperState {
  activeStep: number;
  stepsData: any;
}

export const initialState: StepperState = {
  activeStep: 1,
  stepsData: initialStepsData
};

const featureReducer = createReducer(
  initialState,
  on(stepperActions.SetActiveStep, (state, { selectedStep }) => ({
    ...state,
    activeStep: selectedStep
  }))
  //   on(featureActions.loadSuccess, (state, { user }) =>
  //     featureAdapter.addAll(user, {
  //       ...state,
  //       isLoading: false,
  //       error: null
  //     })
  //   ),
  //   on(featureActions.loadFailure, (state, { error }) => ({
  //     ...state,
  //     isLoading: false,
  //     error
  //   })),
  //   on(featureActions.select, (state, { id }) => ({
  //     ...state,
  //     selectedUserId: id
  //   })),
  //   on(featureActions.getByUserId, (state, { data }) => ({
  //     ...state,
  //     getByIdUser: data
  //   })),
  //   on(featureActions.deleteAll, state =>
  //     featureAdapter.removeAll({
  //       ...state,
  //       selectedUserId: null,
  //       getByIdUser: null
  //     })
  //   ),
  //   on(featureActions.getById, (state, { Id }) => featureAdapter.map(Id, state)),
  //   on(featureActions.deleteId, (state, { Id }) =>
  //     featureAdapter.removeOne(Id, state)
  //   )
);

export function stepperReducer(
  state: StepperState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}
