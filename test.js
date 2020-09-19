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
                console.log('countY+>>>', countX, countY, 'count>>>', count);
            } else {
                countY--;
                if (checkBlock) {
                    countY++;
                    break;
                }
                count++;
                console.log('countY->>>', countX, countY, 'count>>>', count);
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
                console.log('countX+>>>', countX, countY, 'count>>>', count);

            } else {
                countX--;
                if (checkBlock) {
                    countX++;
                    break;
                }
                count++;
                console.log('countX->>>', countX, countY, 'count>>>', count);
            }
        }
    }

    function diagonal() {
        if (startX > endX && startY < endY) {
            while (countY !== endY) {
                countX--;
                countY++;
                console.log('diagonal>>>', countX, countY, 'count>>>', count);
                if (gridList[countX][countY] === 'X') {
                    countX++;
                    countY--;
                    break;
                }
                count++;
            }
            if (checkBlock || countY === endY) {
                equallyY();
            }
            //движение по диагонали 
        } else if (startX > endX && startY > endY) {
            while (countY !== endY) {
                countX--;
                countY--;
                console.log('diagonal>>>', countX, countY, 'count>>>', count);

                if (gridList[countX][countY] === 'X') {
                    countX++;
                    countY++;
                    break;
                }
                count++;
            }
            if (checkBlock || countY === endY) {
                equallyY();
            }
            //движение по диагонали 
        } else if (countX < endX && countY < endY) {
            while (countY !== endY) {
                countX++;
                countY++;
                console.log('diagonal>>>', countX, countY, 'count>>>', count);

                if (gridList[countX][countY] === 'X') {

                    countX--;
                    countY--;
                    console.log('diagonal>>>XXX', countX, countY);

                    break;
                }
                count++;
            }
            if (checkBlock || countY === endY) {
                equallyY();
                console.log('sdfsdcsdc');
            }
            //движение по диагонали 
        } else if (startX < endX && startY > endY) {
            while (countY !== endY) {
                countX++;
                countY--;
                console.log('diagonal>>>', countX, countY, 'count>>>', count);

                if (gridList[countX][countY] === 'X') {
                    countX--;
                    countY++;
                    break;
                }
                count++;
            }
            if (checkBlock || countY === endY) {
                equallyY();
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
        } else {
            diagonal()
        }
    }
    //обход заблокированой ячейки
    if (countX !== endX && countY !== endY) {
        if(countX < endX){
            console.log('XXX');

            countX++;
            count++;
            diagonal();
        }
    }
    console.log('end', countX, countY);

    return count;

}

const result = minWalk(
    [
        '.....',
        '.X...',
        '.....',
        '.....',
        '.....',

    ],
    0, 0,
    4, 4
);

console.log('count>>>>', result);

