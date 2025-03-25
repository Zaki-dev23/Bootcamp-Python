// Exercice 4 : Vacation Cost Hotel

function hotelCost() {
    const night = prompt('The number of nights you would like to stay in the hotel:');

    if (night && !isNaN(night)) {
        console.log(`The hotel costs $140 per night, so in ${night} nights, the total price of the hotel is: $${night * 140}`);
        return night * 140;
    } else {
        alert("Please enter a valid number of nights.");
        return hotelCost();
    }
}

function planeRideCost() {
    const destination = prompt('Enter your destination:');

    if (destination && typeof(destination) === 'string' && isNaN(destination)) {
        if (destination.toLowerCase() === 'london') {
            console.log(`Price for a flight to ${destination.charAt(0).toUpperCase() + destination.slice(1)} is $183.`);
            return 183;
        } else if (destination.toLowerCase() === 'paris') {
            console.log(`Price for a flight to ${destination.charAt(0).toUpperCase() + destination.slice(1)} is $220.`);
            return 220;
        } else {
            console.log(`Price for a flight to ${destination.charAt(0).toUpperCase() + destination.slice(1)} is $300.`);
            return 300;
        }
    } else {
        alert("Please enter a valid destination.");
        return planeRideCost();
    }
}

function rentalCarCost() {
    const rentCar = prompt('The number of days you would like to rent the car:');

    if (rentCar && !isNaN(rentCar)) {
        if (rentCar > 10) {
            const buy = (rentCar * 40) * 0.5;
            console.log(`The car costs $40 per day, and you are renting the car for ${rentCar} days, you should pay $${buy} with a 5% discount.`);
            return buy;
        } else {
            console.log(`The car costs $40 per day, and you are renting the car for ${rentCar} days, you should pay $${rentCar * 40}.`);
            return rentCar * 40;
        }
    } else {
        alert("Please enter a valid number of days for car rental.");
        return rentalCarCost();
    }
}

function totalVacationCost() {
    const hotel_cost = hotelCost();
    const plane_ride_cost = planeRideCost();
    const rentalCar_cost = rentalCarCost();
    const total_cost = hotel_cost + plane_ride_cost + rentalCar_cost;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `The total cost of your vacation is: $${total_cost}`;
}

function startVacationCalculation() {
    totalVacationCost();
}
