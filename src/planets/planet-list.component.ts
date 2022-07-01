import { Component } from "@angular/core";
import { Planet } from "./planet";

@Component({
    selector: 'planet-list',
    templateUrl: './planet-list.component.html',
    styleUrls: ['./planet-list.component.css']
})

/**
 * Defins the the Planet List Compent that lists all of the planets in a table format
 */
export class PlanetListComponent {

    // Page Title and disclaimers
    pageTitle = "List of Planets in our Solar System (ordered by max distance from the sun)";
    titleDisclaimer = "includes notable dwarf planets";


    // Planet data
    planetInfo: Planet[] = [
        {
            name: 'Mercury',
            type: 'Terrestrial',
            category: 'Planet',
            distance: '0.4 AU'
        },
        {
            name: 'Venus',
            type: 'Terrestrial',
            category: 'Planet',
            distance: '0.7 AU'
        },
        {
            name: 'Earth',
            type: 'Terrestrial',
            category: 'Planet',
            distance: '1 AU'
        },
        {
            name: 'Mars',
            type: 'Terrestrial',
            category: 'Planet',
            distance: '1.5 AU'
        },
        {
            name: 'Ceres',
            type: 'Astroid',
            category: 'Dwarf Planet',
            distance: '2.8 AU'
        },
        {
            name: 'Jupiter',
            type: 'Gas Giant',
            category: 'Planet',
            distance: '5.2 AU'
        },
        {
            name: 'Saturn',
            type: 'Gas Giant',
            category: 'Planet',
            distance: '9.5 AU'
        },
        {
            name: 'Uranus',
            type: 'Ice Giant',
            category: 'Planet',
            distance: '19.8 AU'
        },
        {
            name: 'Neptune',
            type: 'Ice Giant',
            category: 'Planet',
            distance: '30.1 AU'
        },
        {
            name: 'Pluto',
            type: 'KBO (Kuiper belt object)',
            category: 'Dwarf Planet',
            distance: '39 AU'
        },
        {
            name: 'Haumea',
            type: 'KBO (Kuiper belt object)',
            category: 'Dwarf Planet',
            distance: '35 to 52 AU'
        },
        {
            name: 'Makemake',
            type: 'KBO (Kuiper belt object)',
            category: 'Dwarf Planet',
            distance: '39 to 53 AU'
        },
        {
            name: 'Eris',
            type: 'KBO (Kuiper belt object)',
            category: 'Dwarf Planet',
            distance: '38 to 68 AU'
        }
    ];

    // Define data source
    dataSource = this.planetInfo;

    // Planet information that is displayed on the table
    displayedColumns: string[] = ['name', 'type', 'category', 'distance'];
}