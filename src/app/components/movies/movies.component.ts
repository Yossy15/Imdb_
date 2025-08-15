import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
import { MovieService, Movie, Person } from '../../services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, RouterModule],
  providers: [MovieService],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movie?: Movie;
  castData: { type: string; people: Person[] }[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(movieId).subscribe(movie => {
      if (movie) {
        this.movie = movie;
        this.loadCastData();
      } else {
        this.location.back();
      }
    });
  }

  private loadCastData(): void {
    if (!this.movie) return;
    this.movie.cast.forEach(castGroup => {
      this.movieService.getPeopleByIds(castGroup.personIds).subscribe(people => {
        this.castData.push({ type: castGroup.type, people });
      });
    });
  }

  goBack(): void {
    this.location.back();
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

