import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectSeatComponent } from "./seat-display/select-seat/select-seat.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectSeatComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-client';
}
