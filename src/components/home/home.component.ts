import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  providers: [WeatherService],
})
export class HomeComponent implements OnInit {
  weatherData: any;
  city: string = 'Madrid';
  consulta: string = '';
  resultados: string[] = [];

  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.getWeather(this.city);
  }

  getWeather(city: string): void {
    this.weatherService.getWeather(city).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        console.error('Error fetching weather data', error);
      }
    );
  }

  buscar(): void {
    if (this.consulta) {
      this.router.navigate(['/search'], {
        queryParams: { query: this.consulta },
      });
    }
  }
}
