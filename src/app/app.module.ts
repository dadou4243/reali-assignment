import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepComponent } from './components/step/step.component';
import { ResultComponent } from './components/result/result.component';
import { StepLabelPipe } from './shared/stepLabel.pipe';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { stepperReducer } from './store/stepper/stepper.reducer';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    StepComponent,
    ResultComponent,
    StepLabelPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ stepper: stepperReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
