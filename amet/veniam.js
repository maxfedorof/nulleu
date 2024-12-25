const region = {
    name: "Sweden",
    coords: "140,40,160,50,170,30,150,20"
};

// Parsing the coordinates into an array of objects for easier manipulation
const parseCoords = (coordString) => {
    const coordsArray = coordString.split(',').map(Number);
    let points = [];
    for (let i = 0; i < coordsArray.length; i += 2) {
        points.push({ x: coordsArray[i], y: coordsArray[i + 1] });
    }
    return points;
};

const swedenCoords = parseCoords(region.coords);

console.log(swedenCoords);
// Outputs: [ { x: 140, y: 40 }, { x: 160, y: 50 }, { x: 170, y: 30 }, { x: 150, y: 20 } ]
