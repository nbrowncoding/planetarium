import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Planet } from "./planet";
import { PlanetData } from "./planet-data.service";

@Component({
    selector: 'planet-list',
    templateUrl: './planet-list.component.html',
    styleUrls: ['./planet-list.component.css']
})

/**
 * Defins the the Planet List Compent that lists all of the planets in a table format
 */
export class PlanetListComponent implements OnInit, OnDestroy {

    // Constructor for planet data service
    constructor(private planetDataService: PlanetData) {}

    // Page Title and disclaimers
    pageTitle = "List of Planets in our Solar System";
    titleDisclaimer = "includes notable minor planets";

    // Image settings for planet table
    imageWidth = 150;
    imageMargin = 5;

    // Planet data
    planetInfo: Planet[] = [];

    // Observer subscription
    sub!: Subscription;

    // Observer error message
    errorMessage = "";

    // Planet information that is displayed on the table
    displayedColumns: string[] = ['imageUrl', 'name', 'type', 'category', 'distance'];

    /**
     * Configure initialization events
     */ 
    ngOnInit(): void {

        // Subscrine to the planet data observer
        this.sub = this.planetDataService.getPlanetData().subscribe({
            
            // Get the emited planet data from the observer
            next: planets => this.planetInfo = planets,
            
            // Catch and handle HTTP errors
            error: err => this.errorMessage = err

        });
    }

    /**
     * Configure on the on destory events
     */
    ngOnDestroy(): void {
        
        // Unsubscribe from the observer when component is destroyed
        this.sub.unsubscribe;
    }
    
}