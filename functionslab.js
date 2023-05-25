/*hello world*/
/*SCUBER*/
/*Scuber's executive want to ensure that Scuber's headquaters is near its customers.
They would like you to write a function,"distanceFromHqInBlocks," that takes in a 
pickup location for a passenger, and returns the number of blocks from Scuber headquaters
on 42nd Street. For example, if the pickup location is 50(i.e 50th Street), the return
value should be 8.*/

function distanceFromHqInBlocks(blocks){
    const hq = 42

    if (blocks > hq){
        return blocks - hq
    }

    else if (blocks < hq){
        return hq - blocks
    }
}


const result = distanceFromHqInBlocks(50);
console.log(result);

/*The distanceFromHqInBlocks function's return value can then be used for another function,
distanceFromHqInFeet, that translates the number of blocks from headquaters to the distance
in feet. Each block in Manhattan is 264 feet long.*/

function distanceFromHqInFeet(feet){
    
    return distanceFromHqInBlocks(feet)*264;
      
}

const myResult = distanceFromHqInFeet(43)
console.log(myResult);

/*Customers want Scuber to calculate the number of feet travelled based on the distance. 
Write a function called "distanceTravelledInFeet" that takes in both the start and destination
blocks, and returns the number of feet travelled. Remember, each block in Manhattan is 264 feet long.
For example distanceTravelledInFeet(34,38) representing 34th St to 38th St, returns 1056((38-34) * 264)
You can assume that we are only calculating distance uptown/downtown, not from river to river.*/

function distanceTravelledInFeet(start, destination){
    if(start > destination){
        return (start - destination) * 264;
    }

    else if (start < destination){
        return (destination - start) * 264;
    }
}

const myDistance = distanceTravelledInFeet(34, 38);
console.log(myDistance);

/*Given the same starting and ending block as the above test, return the fare for the customer.
The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2
cents per foot(not including 400, which are free!). Then scuber charges a flat fare for a distance
over 2000 feet and under 25000 feet. Finally, Scuber does not allow any rides over 2500 feet - the 
functions returns 'cannot travel that far' if a ride over 2500 feet is requested.*/

function calculateFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400){
        return 0;
    }

    else if(distance >= 400 && distance <= 2000){
        return (distance-400)* 0.02;
    }

    else if(distance >= 2000 && distance <= 2500){
        return 25;
    }

    else if(distance > 2500){
        return "cannot travel that far"
    }
}

const lastOne = calculateFarePrice(30, 80);
console.log(lastOne)
