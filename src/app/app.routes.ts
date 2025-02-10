import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { DetailsComponent } from './details/details.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { DataEntryFetchComponent } from './data-entry-fetch/data-entry-fetch.component';
import { DataEntryHttpComponent } from './data-entry-http/data-entry-http.component';
import { DirectivesComponent } from './directives/directives.component';

export const routes: Routes = [
    {
        path: "simple-counter",
        component: CounterComponent
    },
    {
        path: "data-entry",
        component: DataEntryComponent
    },
    {
        path: "data-entry-fetch",
        component: DataEntryFetchComponent
    },
    {
        path: "data-entry-http",
        component: DataEntryHttpComponent
    },
    {
        path: "data-entry/details/:id",
        component: DetailsComponent
    },
    {
        path: "parent-child",
        component: ParentChildComponent
    },
    {
        path: "elements-ref",
        component: ElementRefComponent
    },
    {
        path: "template-driven-form",
        component: TemplateDrivenFormComponent
    },
    {
        path: "pipes",
        component: PipesComponent
    },
    {
        path: "directives",
        component: DirectivesComponent
    }
];
