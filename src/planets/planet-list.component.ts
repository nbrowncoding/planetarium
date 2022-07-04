import { Component, OnInit } from "@angular/core";
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
export class PlanetListComponent implements OnInit {

    // Constructor for planet data service
    constructor(private planetDataService: PlanetData) {}

    // Page Title and disclaimers
    pageTitle = "List of Planets in our Solar System";
    titleDisclaimer = "includes notable minor planets";

    // Image settings for planet table
    imageWidth = 150;
    imageMargin = 5;

    // Planet data
    // TODO: Convert to json file
    planetInfo: Planet[] = [];

    // Planet information that is displayed on the table
    displayedColumns: string[] = ['imageUrl', 'name', 'type', 'category', 'distance'];

    // Configure initialization
    ngOnInit(): void {
        // Get the planet data from the service when component initializes
        this.planetInfo = this.planetDataService.getPlanetData();
    }
}