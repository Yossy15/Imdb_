import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
import { MovieService, Movie, Person } from '../../services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-person',
  imports: [CommonModule, RouterModule],
  providers: [MovieService],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent implements OnInit {
  person?: Person;

  constructor(
    private route: ActivatedRoute,
    // private router: Router,
    private movieService: MovieService,
    private location: Location,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const personId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.movieService.getPerson(personId).subscribe(person => {
      if (person) {
        this.person = person;
      } else {
        this.location.back();
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}