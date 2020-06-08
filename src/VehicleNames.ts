/*
MIT License

Copyright (c) 2020 Peter Szombati

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
import {GetVehicleModel} from "./SampFunctions";

export const vehicleNames = [
    "Landstalker",
    "Bravura",
    "Buffalo",
    "Linerunner",
    "Perrenial",
    "Sentinel",
    "Dumper",
    "Firetruck",
    "Trashmaster",
    "Stretch",
    "Manana",
    "Infernus",
    "Voodoo",
    "Pony",
    "Mule",
    "Cheetah",
    "Ambulance",
    "Leviathan",
    "Moonbeam",
    "Esperanto",
    "Taxi",
    "Washington",
    "Bobcat",
    "Whoopee",
    "BF Injection",
    "Hunter",
    "Premier",
    "Enforcer",
    "Securicar",
    "Banshee",
    "Predator",
    "Bus",
    "Rhino",
    "Barracks",
    "Hotknife",
    "Trailer",
    "Previon",
    "Coach",
    "Cabbie",
    "Stallion",
    "Rumpo",
    "RC Bandit",
    "Romero",
    "Packer",
    "Monster",
    "Admiral",
    "Squalo",
    "Seasparrow",
    "Pizzaboy",
    "Tram",
    "Trailer",
    "Turismo",
    "Speeder",
    "Reefer",
    "Tropic",
    "Flatbed",
    "Yankee",
    "Caddy",
    "Solair",
    "Berkley's RC Van",
    "Skimmer",
    "PCJ-600",
    "Faggio",
    "Freeway",
    "RC Baron",
    "RC Raider",
    "Glendale",
    "Oceanic",
    "Sanchez",
    "Sparrow",
    "Patriot",
    "Quad",
    "Coastguard",
    "Dinghy",
    "Hermes",
    "Sabre",
    "Rustler",
    "ZR-350",
    "Walton",
    "Regina",
    "Comet",
    "BMX",
    "Burrito",
    "Camper",
    "Marquis",
    "Baggage",
    "Dozer",
    "Maverick",
    "News Chopper",
    "Rancher",
    "FBI Rancher",
    "Virgo",
    "Greenwood",
    "Jetmax",
    "Hotring",
    "Sandking",
    "Blista Compact",
    "Police Maverick",
    "Boxvillde",
    "Benson",
    "Mesa",
    "RC Goblin",
    "Hotring Racer A",
    "Hotring Racer B",
    "Bloodring Banger",
    "Rancher",
    "Super GT",
    "Elegant",
    "Journey",
    "Bike",
    "Mountain Bike",
    "Beagle",
    "Cropduster",
    "Stunt",
    "Tanker",
    "Roadtrain",
    "Nebula",
    "Majestic",
    "Buccaneer",
    "Shamal",
    "Hydra",
    "FCR-900",
    "NRG-500",
    "HPV1000",
    "Cement Truck",
    "Tow Truck",
    "Fortune",
    "Cadrona",
    "FBI Truck",
    "Willard",
    "Forklift",
    "Tractor",
    "Combine",
    "Feltzer",
    "Remington",
    "Slamvan",
    "Blade",
    "Freight",
    "Streak",
    "Vortex",
    "Vincent",
    "Bullet",
    "Clover",
    "Sadler",
    "Firetruck",
    "Hustler",
    "Intruder",
    "Primo",
    "Cargobob",
    "Tampa",
    "Sunrise",
    "Merit",
    "Utility",
    "Nevada",
    "Yosemite",
    "Windsor",
    "Monster",
    "Monster",
    "Uranus",
    "Jester",
    "Sultan",
    "Stratum",
    "Elegy",
    "Raindance",
    "RC Tiger",
    "Flash",
    "Tahoma",
    "Savanna",
    "Bandito",
    "Freight Flat",
    "Streak Carriage",
    "Kart",
    "Mower",
    "Dune",
    "Sweeper",
    "Broadway",
    "Tornado",
    "AT-400",
    "DFT-30",
    "Huntley",
    "Stafford",
    "BF-400",
    "News Van",
    "Tug",
    "Trailer",
    "Emperor",
    "Wayfarer",
    "Euros",
    "Hotdog",
    "Club",
    "Freight Box",
    "Trailer",
    "Andromada",
    "Dodo",
    "RC Cam",
    "Launch",
    "Police Car",
    "Police Car",
    "Police Car",
    "Police Ranger",
    "Picador",
    "S.W.A.T",
    "Alpha",
    "Phoenix",
    "Glendale",
    "Sadler",
    "Luggage",
    "Luggage",
    "Stairs",
    "Boxville",
    "Tiller",
    "Utility Trailer"
];

export function GetVehicleName(vehicleid: number) {
    return vehicleNames[GetVehicleModel(vehicleid) - 400];
}

export function GetVehicleModelId(vehicleName: string): number | null {
    vehicleName = vehicleName.toLowerCase().trim().split(' ').join('').split('.').join('').split('-').join('').split("'").join('');
    const potential = vehicleNames.map((name, i) => ({
        name: name.toLowerCase().split(' ').join('').split('.').join('').split('-').join('').split("'").join(''),
        modelid: i + 400
    })).filter(({name}) => name.indexOf(vehicleName) >= 0);
    if (potential.length === 0) {
        return null;
    }
    if (potential.length === 1) {
        return potential[0].modelid;
    }
    const ranked = potential.map(({name, modelid}, i) => {
        let rank = 0;
        if (name === vehicleName) {
            rank = 100000 - i;
        } else if (name.indexOf(vehicleName) === 0) {
            rank = 10000 - (name.length - vehicleName.length);
        } else {
            rank = 100 - (name.length - vehicleName.length);
        }
        return {
            modelid,
            rank
        }
    }).sort((a, b) => b.rank - a.rank);
    return ranked[0].modelid;
}