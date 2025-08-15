import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MovieService, Movie, Person } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [MovieService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('moviesGrid') moviesGrid!: ElementRef;
  @ViewChild('peopleGrid') peopleGrid!: ElementRef;

  movies: Movie[] = [];
  people: Person[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: movies => this.movies = movies,
      error: err => console.error('Error loading movies:', err)
    });

    this.movieService.getPeople().subscribe({
      next: people => this.people = people.slice(0, 12),
      error: err => console.error('Error loading people:', err)
    });
  }

  scrollLeft() { this.moviesGrid?.nativeElement.scrollBy({ left: -300, behavior: 'smooth' }); }
  scrollRight() { this.moviesGrid?.nativeElement.scrollBy({ left: 300, behavior: 'smooth' }); }
  scrollLeft1() { this.peopleGrid?.nativeElement.scrollBy({ left: -300, behavior: 'smooth' }); }
  scrollRight1() { this.peopleGrid?.nativeElement.scrollBy({ left: 300, behavior: 'smooth' }); }
}
