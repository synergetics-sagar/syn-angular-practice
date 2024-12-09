import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { DetailsComponent } from './details/details.component';

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
        path: "data-entry/details/:id",
        component: DetailsComponent
    }
];
