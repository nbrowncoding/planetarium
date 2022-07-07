import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Planet } from "./planet";

@Injectable({
    providedIn: 'root'
})

/**
 * A service to get the planet data
 */
export class PlanetData {

    // Set the internal path for the planet data
    private planetDataUrl = 'api/planets/planets.json';

    // Constructor for Http Client
    constructor(private http: HttpClient) {}

    /**
     * Returns a list of planets and properties in an array via a service.
     * @returns Observer<Planet[]> - An observer that emits an array of planetary data
     */
    getPlanetData(): Observable<Planet[]> {
        return this.http.get<Planet[]>(this.planetDataUrl).pipe(
            catchError(this.handleError)
        );
    }

    /**
     * Gets the data for a single planet and returns an observable with the data.
     * @param name - Name of the planet
     * @returns Observable<Planet> - An observerable with a data for the specified planet
     */
    getPlanet(name: string): Observable<Planet | undefined> {
        return this.getPlanetData()
          .pipe(
            map((planets: Planet[]) => planets.find(p => p.name === name))
          );
      }

    /**
     * Handles any error that is generated 
     * @param err 
     */
     private handleError(err: HttpErrorResponse) {

        let errorMessage = '';

        // If check if error is client side
        if (err.error instanceof ErrorEvent) {

            // Store the error message
            errorMessage = `An error has occurred: ${err.error.message}`;
        }
        // If error is on the server side
        else {

            // Log the server response instead
            errorMessage = `Server returned code: ${err.status} with an error message of ${err.message}`;
        }

        // Throw error
        return throwError(() => new Error(errorMessage))
    }
}