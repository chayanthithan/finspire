import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../reusable-components/header/header.component";
import { FooterComponent } from "../reusable-components/footer/footer.component";
import { HomeComponent } from "../pages/home/home.component";
import { ContactComponent } from "../pages/contact/contact.component";
import { ServiceComponent } from "../pages/service/service.component";
import { AboutComponent } from "../pages/about/about.component";
import { ProjectsComponent } from "../pages/projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'finspire-solutions';
}
