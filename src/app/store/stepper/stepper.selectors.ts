import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StepperState } from './stepper.reducer';

export const getStepperState = createFeatureSelector<StepperState>('stepper');

export const getActiveStepIndex = createSelector(
  getStepperState,
  stepper => stepper.activeStepIndex
);

export const getStepsData = createSelector(
  getStepperState,
  stepper => stepper.stepsData
);

export const getActiveStepData = createSelector(
  getStepsData,
  getActiveStepIndex,
  (stepsData, activeStepIndex) => stepsData[activeStepIndex]
);

export const getIsStepperValid = createSelector(
  getStepsData,
  stepsData => stepsData.every(step => step.value !== '')
);

export const getIsFormSubmitted = createSelector(
  getStepperState,
  stepperState => stepperState.isFormSubmitted
);
