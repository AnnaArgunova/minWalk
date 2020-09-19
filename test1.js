function minWalk(gridList, startX, startY, endX, endY) {
    let count = 0;
    let countX = startX;
    let countY = startY;

    for (let i = 0; i < gridList.length; i++) {
        gridList[i] = gridList[i].split('');

    }

    //движение по горизонтали
    function equallyX() {
        if (startY < endY) {
            countY++;
                      count++;
            console.log('countY+>>>', countX, countY, 'count>>>', count);
        } else {
            countY--;
                      count++;
            console.log('countY->>>', countX, countY, 'count>>>', count);

        }
    
    }
    //движение по вертикали
    function equallyY() {

        if (startX < endX) {
            countX++;
                       count++;
            console.log('countX+>>>', countX, countY, 'count>>>', count);

        } else {
            countX--;
                       count++;
            console.log('countX->>>', countX, countY, 'count>>>', count);
        }
        
    }

    function diagonal() {
        if (startX > endX && startY < endY) {
            while (countY !== endY || countX !== endX) {
                countX--;
                countY++;
                count++;
                console.log('diagonal>>>', countX, countY, 'count>>>', count);
                if (gridList[countX][countY] === 'X') {
                    countX++;
                    countY--;
                    count--;
                    break;
                } else if (countX === endX) {
                    while (countY !== endY) {
                        equallyX();
                    }
                    break;
                }

            }

            //движение по диагонали 
        } else if (startX > endX && startY > endY) {
            while (countY !== endY) {
                countX--;
                countY--;
                count++;
                console.log('diagonal>>>', countX, countY, 'count>>>', count);

                if (gridList[countX][countY] === 'X') {
                    countX++;
                    countY++;
                    count--;
                    break;
                } else if (countX === endX) {
                    while (countY !== endY) {
                        equallyX();
                    }
                    break;
                }
            }

        } else if (countX < endX && countY < endY) {
            while (countY !== endY) {
                countX++;
                countY++;
                count++;
                console.log('diagonal>>>', countX, countY, 'count>>>', count);

                if (gridList[countX][countY] === 'X') {
                    countX--;
                    countY--;
                    count--;
                    console.log('diagonal>>>XXX', countX, countY);
                    break;
                } else if (countX === endX) {
                    while (countY !== endY) {
                        equallyX();
                    }
                    break;
                }

            }

        } else if (startX < endX && startY > endY) {
            while (countY !== endY) {
                countX++;
                countY--;
                count++;
                console.log('diagonal>>>', countX, countY, 'count>>>', count);

                if (gridList[countX][countY] === 'X') {
                    countX--;
                    countY++;
                    count--;
                    break;
                } else if (countX === endX) {
                    while (countY !== endY) {
                        equallyX();
                    }
                    break;
                }
            }

        }
    }

    if (gridList[startX][startY] === 'X' || gridList[endX][endY] === 'X' || startX === endX && startY === endY) {
        console.log("ERROR!!!!");
    } else {
        if (startX === endX) {
            while (countY !== endY) {
                if(gridList[countX][countY] === 'X'){
                    countY--;
                    count--;
                    break;
                }
                equallyX();
               
            }
        } else if (startY === endY) {
            while (countX !== endX) {
                if(gridList[countX][countY] === 'X'){
                    countX--;
                    count--;
                    break;
                }
                equallyY();
               
            }
            //движение по диагонали 
        } else {
            diagonal()
        }
    }
    //обход заблокированой ячейки
    if (countX !== endX && countY !== endY) {
        console.log('XXX');
        equallyY();
        diagonal();
        if (countX === endX && countY !== endY) {
            while(countY !== endY){
                equallyX();
            }
        } else if (countY == endY && countX != endX) {
            while( countX !== endX){
            equallyY();
            }
        }
    }
    
    console.log('end', countX, countY);
    return count;

}

const result = minWalk(
    [
        '.....',
        '..X..',
        '.....',
        '.....',
        '.....',

    ],
    0, 0,
    0, 4
);

console.log('count>>>>', result);

