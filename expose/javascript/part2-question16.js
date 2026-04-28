let statistics = {
    redCars: 21,
    blueCars: 45, 
    greenCars: 12,
    raceCars: 5, 
    blackCars: 40,
    rareCars: 2
};

for (let variable in statistics) {
    if (variable[0] === 'r' || statistics[variable] % 2 !== 0) {
        console.log(variable);
    }
}
