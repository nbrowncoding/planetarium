import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Planet } from "../planet";
import { PlanetData } from "../planet-data.service";

@Component({
    selector: 'planet-details',
    templateUrl: './planet-details.component.html',
    styleUrls: ['./planet-details.component.css']
})

/**
 * The details componet display detailed information about a selected planet.
 */
export class PlanetDetailsComponent implements OnInit {
    
    // Planet data
    planet: Planet | undefined;

    // Temporary Page Title
    pageTitle = "Planet Details Page";

    // Error Message
    errorMessage = "";

    constructor(private route: ActivatedRoute,
                private planetData: PlanetData) {}

    /**
     * Initializes the details page by reading the passed route parameter and getting the corresponding planet
     * information from the planet data service
     */
    ngOnInit() {
        
        // Get the passed planet name
        const planetName = this.route.snapshot.paramMap.get('name');

        // Ensure the planet is defined
        if(planetName) {

            // Get the data for the specified planet
            this.getPlanet(planetName);
        }
    }

    /**
     * Gets the data for the specified planet from the planet data service
     */
    getPlanet(planetName: string) {
        this.planetData.getPlanet(planetName).subscribe({
            next: planet => this.planet = planet,
            error: err => this.errorMessage = err
        });

    }
}