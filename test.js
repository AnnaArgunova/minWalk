function minWalk(gridList, startX, startY, endX, endY) {
    let count = 0;
    let countX = startX;
    let countY = startY;
    const checkBlock = gridList[countX][countY] === 'X';

    for (let i = 0; i < gridList.length; i++) {
        gridList[i] = gridList[i].split('');

    }

    //движение по горизонтали
    function equallyX() {
        while (countY !== endY) {
            if (startY < endY) {
                countY++;
                if (checkBlock) {
                    countY--;
                    break;
                }
                count++;
                console.log('countY+>>>', countY);
            } else {
                countY--;
                if (checkBlock) {
                    countY++;
                    break;
                }
                count++;
                console.log('countY->>>', countY);
            }

        }
    }
    //движение по вертикали
    function equallyY() {
        while (countX !== endX) {
            if (startX < endX) {
                countX++;
                if (checkBlock) {
                    countX--;
                    break;
                }
                count++;
                console.log('countX+>>>', countX);

            } else {
                countX--;
                if (checkBlock) {
                    countX++;
                    break;
                }
                count++;
                console.log('countX->>>', countX);
            }
        }
    }

    if (gridList[startX][startY] === 'X' || gridList[endX][endY] === 'X' || startX === endX && startY === endY) {
        console.log("ERROR!!!!");
    } else {
        if (startX === endX) {
            equallyX();
        } else if (startY === endY) {
            equallyY();
            //движение по диагонали 
        } else if (startX > endX && startY < endY) {
            while (countY !== endY) {
                countX--;
                countY++;
                if (gridList[countX][countY] === 'X') {
                    countX++;
                    countY--;
                    break;
                }
                count++;
            }
            if(checkBlock){
                equallyY();
                }
                //движение по диагонали 
        } else if (startX > endX && startY > endY) {
            while (countY !== endY) {
                countX--;
                countY--;

                if (gridList[countX][countY] === 'X') {
                    countX++;
                    countY++;
                    break;
                }
                count++;
                console.log('diag>>>', countX, countY);
            }
            if(checkBlock){
            equallyY();
            }
            //движение по диагонали 
        } else if (startX < endX && startY < endY) {
            while (countY !== endY) {
                countX++;
                countY++;
                console.log('gggg', gridList[countX][countY], countX, countY);

                if (gridList[countX][countY] === 'X') {
                    countX--;
                    countY--;
                    break;
                }
                count++;
            }
            if(checkBlock){
                equallyY();
                }
//движение по диагонали 
        } else if (startX < endX && startY > endY) {
            while (countY !== endY) {
                countX++;
                countY--;
                if (gridList[countX][countY] === 'X') {
                    countX--;
                    countY++;
                    break;
                }
                count++;
            }
            if(checkBlock){
                equallyY();
                }
        }
    }
    //обход заблокированой ячейки
    if(countX !== endX && countY !== endY){
        console.log('sfdsf');
        
        equallyY();
        equallyX();
    }
    console.log('end', countX, countY);

    return count;

}

const result = minWalk(
    [
        '.....',
        '.....',
        '.....',
        '.....',
        '.....',

    ],
    0, 0,
    4, 4
);

console.log('count>>>>', result);

