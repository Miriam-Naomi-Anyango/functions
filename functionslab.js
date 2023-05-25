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