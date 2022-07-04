import { Injectable } from "@angular/core";
import { Planet } from "./planet";

@Injectable({
    providedIn: 'root'
})

/**
 * A service to get the planet data
 */
export class PlanetData {

    /**
     * Returns a list of planets and properties in an array via a service.
     * @returns Planet[] - An array of planetary data
     */
    getPlanetData(): Planet[] {
        return [
            {
                name: 'Mercury',
                type: 'Terrestrial',
                category: 'Planet',
                distance: '0.4 AU',
                imageUrl: 'assets/images/mercury.jpeg'
            },
            {
                name: 'Venus',
                type: 'Terrestrial',
                category: 'Planet',
                distance: '0.7 AU',
                imageUrl: 'assets/images/venus.jpeg'
            },
            {
                name: 'Earth',
                type: 'Terrestrial',
                category: 'Planet',
                distance: '1 AU',
                imageUrl: 'assets/images/earth.jpeg'
            },
            {
                name: 'Mars',
                type: 'Terrestrial',
                category: 'Planet',
                distance: '1.5 AU',
                imageUrl: 'assets/images/mars.jpeg'
            },
            {
                name: 'Ceres',
                type: 'Planetoid',
                category: 'Dwarf Planet',
                distance: '2.8 AU',
                imageUrl: 'assets/images/ceres.jpeg'
            },
            {
                name: 'Jupiter',
                type: 'Gas Giant',
                category: 'Planet',
                distance: '5.2 AU',
                imageUrl: 'assets/images/jupiter.jpeg'
            },
            {
                name: 'Saturn',
                type: 'Gas Giant',
                category: 'Planet',
                distance: '9.5 AU',
                imageUrl: 'assets/images/saturn.jpeg'
            },
            {
                name: 'Uranus',
                type: 'Ice Giant',
                category: 'Planet',
                distance: '19.8 AU',
                imageUrl: 'assets/images/uranus.jpeg'
            },
            {
                name: 'Neptune',
                type: 'Ice Giant',
                category: 'Planet',
                distance: '30.1 AU',
                imageUrl: 'assets/images/neptune.jpeg'
            },
            {
                name: 'Pluto',
                type: 'KBO (Kuiper belt object)',
                category: 'Dwarf Planet',
                distance: '39 AU',
                imageUrl: 'assets/images/pluto.jpeg'
            },
            {
                name: 'Haumea',
                type: 'KBO (Kuiper belt object)',
                category: 'Dwarf Planet',
                distance: '35 to 52 AU',
                imageUrl: 'assets/images/haumea.jpeg'
            },
            {
                name: 'Makemake',
                type: 'KBO (Kuiper belt object)',
                category: 'Dwarf Planet',
                distance: '39 to 53 AU',
                imageUrl: 'assets/images/makemake.jpeg'
            },
            {
                name: 'Eris',
                type: 'KBO (Kuiper belt object)',
                category: 'Dwarf Planet',
                distance: '38 to 68 AU',
                imageUrl: 'assets/images/eris.jpeg'
            }
        ];
    }
}