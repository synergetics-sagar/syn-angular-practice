import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataEntryHttpComponent } from "./data-entry-http/data-entry-http.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, DataEntryHttpComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  routeMapping = [
    {
      path: "/simple-counter",
      text: "Simple Counter"
    },
    {
      path: "/data-entry",
      text: "Data Entry"
    },
    {
      path: "/data-entry-fetch",
      text: "Data Entry With fetch()"
    },
    {
      path: "/data-entry-http",
      text: "Data Entry With HttpClient"
    },
    {
      path: "/parent-child",
      text: "Parent - Child"
    },
    {
      path: "/elements-ref",
      text: "#ref"
    },
    {
      path: "template-driven-form",
      text: "Template Driven Form"
    },
    {
      path: "pipes",
      text: "Pipes"
    },
    {
      path: "directives",
      text: "Directives"
    }
  ]
}
