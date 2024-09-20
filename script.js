//Checks if move if legal
function illegal([x,y]){
    return x >= 0 && y >= 0 && x <= 7 && y <= 7
}
//Checks if location is found
function locFound(x, y){
    if(x[0]===y[0] && y[1] === x[1]){
        return true;
    }
    return false;

};

//Checks for fastest way to get to location 
function knightMoves(currentL, travelL){
    //possible moves
    const moves = [[2, 1],[1, 2],[-1, 2],[-2, 1],
    [-2, -1],[-1, -2],[1, -2],[2, -1]];
    //set up queue for bfs
    const queue = [[currentL]];
    const visited = []; 
    //Special case if current = target
    if(locFound(currentL, travelL)){
        console.log("On target!");
        return currentL;
    }
    //sets the current to true
    visited[currentL] = true;

    //loops while queue has something in it
    while(queue.length){
        //removes instance 
        let curr = queue.shift();
        //Get current
        let currPos = curr[curr.length - 1];

    //Loops through all moves
    for(const move of moves){
        //goes though and adds move to current
        let newCurr = [currPos[0] + move[0], currPos[1] + move[1]];

        if(illegal(newCurr)){
            if(locFound(newCurr, travelL)){
                //Displays results
                curr.push(newCurr)
                console.log(`=> You made it in ${curr.length - 1} moves! Here's your path:`);
                curr.forEach(c => console.log(c));
                return curr;

            }else{
                if(!visited[newCurr]){     
                    //Marks visited  
                    visited[newCurr] = true;
                    //Creates a new path to keep track of path taken
                    let newPath = [...curr, newCurr]
                    //replaces instance
                    queue.push(newPath)                        
                }    
            }
        }
    }
}
}


knightMoves([3,3],[4,3]);