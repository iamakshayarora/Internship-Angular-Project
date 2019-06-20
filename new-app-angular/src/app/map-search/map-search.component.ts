import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../pipes'

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { GoogleMapsComponent } from '../maps/google-maps.component'
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.css']
})

export class MapSearchComponent implements OnInit {
  id: any;
  varid = 1;
  public href: string = "";
  //heroes$: Observable<Hero[]>;
  staticHeros = [
    { id: 1, name: 'Delhi', lat: 28.6139, lng: 77.2090, desc: 'Capital of India' },
    { id: 2, name: 'Mumbai', lat: 19.0760, lng: 72.8777, desc: 'City in India' },
    { id: 3, name: 'Moscow', lat: 55.75, lng: 37.62, desc: 'Capital of Russia' },
    { id: 4, name: 'Tokyo	', lat: 35.6895, lng: 139.6917, desc: 'Capital of Japan' },
    { id: 5, name: 'New York', lat: 40.7128, lng: -74.0060, desc: 'City in USA' },
    { id: 6, name: 'London', lat: 51.5074, lng: -0.1278, desc: 'Capital of England' },
    { id: 7, name: 'Singapore	', lat: 1.3521, lng: 103.8598, desc: 'Capital of Singapore' },
    { id: 8, name: 'Los Angeles', lat: 34.0522, lng: -118.2437, desc: 'City in USA' },
    { id: 9, name: 'Cape Town', lat: -33.9249, lng: 18.4241, desc: 'Capital of South Africa' },
    { id: 10, name: 'Madrid', lat: 40.4168, lng: -3.7038, desc: 'Capital of Spain' }
  ];
  @Output() description: EventEmitter<any> = new EventEmitter<any>();
  @Output() description2: EventEmitter<any> = new EventEmitter<any>();
  @Output() description3: EventEmitter<any> = new EventEmitter<any>();
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService,
    private router: Router) { }

  // Push a search term into the observable stream.
  // search(term: string): void {
  //   this.searchTerms.next(term);
  // }

  ngOnInit(): void {
    // this.heroes$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(50),

    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),

    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.heroService.searchHeroes(term)),
    // );
    this.href = this.router.url;
  }

  public descriptionTest(place: any, i): void {

    document.getElementById("demo" + this.varid).style.backgroundColor = "white";
    this.varid = i;
    document.getElementById("demo" + i).style.backgroundColor = "lightgreen";

    if (this.href == "/maps") {
      this.description.emit(place);
    }
    else if (this.href == "/dashboard") {
      var myurl = `/detail/${place.id}`;
      this.router.navigateByUrl(myurl);
    }
  }
  public descriptionChange(place2: any): void {
    if (this.href == "/maps") {
      this.description2.emit(place2);
    }
  }
  public descriptionOriginal(): void {
    if (this.href == "/maps") {
      this.description3.emit();
    }
  }
  public showlist(event): void {
    setTimeout(function () {
      for (var i = 0; i < 100; i++) {
        if (document.getElementById("demo" + i)) {
          document.getElementById("demo" + i).style.display = "block";
        }
      }
    }, 100);

  }
}