const gameBox = document.getElementById("gameBox");
const squareTemplate = document.getElementById("square-template");
let nanpureA = [];
let boxNumber = [];
let RBlist = [];
let t = [];

function N0() {
    boxNumber = []
    document.getElementById('eraser').classList.remove('eraser');
    document.getElementById('eraser').classList.add('eraser2');
    if (t >= 0) {
        if(t === 0){
            document.getElementById('eraser').classList.remove('eraser2');
            document.getElementById('eraser').classList.add('eraser');
        }
        if (t === 1) {
            document.getElementById('buttonId1').classList.remove('buttons2');
            document.getElementById('buttonId1').classList.add('buttons');
        }
        if (t === 2) {
            document.getElementById('buttonId2').classList.remove('buttons2');
            document.getElementById('buttonId2').classList.add('buttons');
        }
        if (t === 3) {
            document.getElementById('buttonId3').classList.remove('buttons2');
            document.getElementById('buttonId3').classList.add('buttons');
        }
        if (t === 4) {
            document.getElementById('buttonId4').classList.remove('buttons2');
            document.getElementById('buttonId4').classList.add('buttons');
        }
        if (t === 5) {
            document.getElementById('buttonId5').classList.remove('buttons2');
            document.getElementById('buttonId5').classList.add('buttons');
        }
        if (t === 6) {
            document.getElementById('buttonId6').classList.remove('buttons2');
            document.getElementById('buttonId6').classList.add('buttons');
        }
        if (t === 7) {
            document.getElementById('buttonId7').classList.remove('buttons2');
            document.getElementById('buttonId7').classList.add('buttons');
        }
        if (t === 8) {
            document.getElementById('buttonId8').classList.remove('buttons2');
            document.getElementById('buttonId8').classList.add('buttons');
        }
        if (t === 9) {
            document.getElementById('buttonId9').classList.remove('buttons2');
            document.getElementById('buttonId9').classList.add('buttons');
        }
    }
    t = 0;
    boxColor()
}
function N(Num) {
    let tmpList = [];
    boxNumber = Num;
    if(boxNumber === 1){
        if (t >= 0) {
            if (t === 0) {
                document.getElementById('eraser').classList.remove('eraser2');
                document.getElementById('eraser').classList.add('eraser');
            }
            if (t === 1) {
                document.getElementById('buttonId1').classList.remove('buttons2');
                document.getElementById('buttonId1').classList.add('buttons');
            }
            if (t === 2) {
                document.getElementById('buttonId2').classList.remove('buttons2');
                document.getElementById('buttonId2').classList.add('buttons');
            }
            if (t === 3) {
                document.getElementById('buttonId3').classList.remove('buttons2');
                document.getElementById('buttonId3').classList.add('buttons');
            }
            if (t === 4) {
                document.getElementById('buttonId4').classList.remove('buttons2');
                document.getElementById('buttonId4').classList.add('buttons');
            }
            if (t === 5) {
                document.getElementById('buttonId5').classList.remove('buttons2');
                document.getElementById('buttonId5').classList.add('buttons');
            }
            if (t === 6) {
                document.getElementById('buttonId6').classList.remove('buttons2');
                document.getElementById('buttonId6').classList.add('buttons');
            }
            if (t === 7) {
                document.getElementById('buttonId7').classList.remove('buttons2');
                document.getElementById('buttonId7').classList.add('buttons');
            }
            if (t === 8) {
                document.getElementById('buttonId8').classList.remove('buttons2');
                document.getElementById('buttonId8').classList.add('buttons');
            }
            if (t === 9) {
                document.getElementById('buttonId9').classList.remove('buttons2');
                document.getElementById('buttonId9').classList.add('buttons');
            }
        }
        document.getElementById('buttonId1').classList.remove('buttons');
        document.getElementById('buttonId1').classList.add('buttons2');
        t = 1
    }
    if(boxNumber === 2){
        if (t >= 0) {
            if(t === 0){
                document.getElementById('eraser').classList.remove('eraser2');
                document.getElementById('eraser').classList.add('eraser');
            }
            if (t === 1) {
                document.getElementById('buttonId1').classList.remove('buttons2');
                document.getElementById('buttonId1').classList.add('buttons');
            }
            if (t === 2) {
                document.getElementById('buttonId2').classList.remove('buttons2');
                document.getElementById('buttonId2').classList.add('buttons');
            }
            if (t === 3) {
                document.getElementById('buttonId3').classList.remove('buttons2');
                document.getElementById('buttonId3').classList.add('buttons');
            }
            if (t === 4) {
                document.getElementById('buttonId4').classList.remove('buttons2');
                document.getElementById('buttonId4').classList.add('buttons');
            }
            if (t === 5) {
                document.getElementById('buttonId5').classList.remove('buttons2');
                document.getElementById('buttonId5').classList.add('buttons');
            }
            if (t === 6) {
                document.getElementById('buttonId6').classList.remove('buttons2');
                document.getElementById('buttonId6').classList.add('buttons');
            }
            if (t === 7) {
                document.getElementById('buttonId7').classList.remove('buttons2');
                document.getElementById('buttonId7').classList.add('buttons');
            }
            if (t === 8) {
                document.getElementById('buttonId8').classList.remove('buttons2');
                document.getElementById('buttonId8').classList.add('buttons');
            }
            if (t === 9) {
                document.getElementById('buttonId9').classList.remove('buttons2');
                document.getElementById('buttonId9').classList.add('buttons');
            }
        }
        document.getElementById('buttonId2').classList.remove('buttons');
        document.getElementById('buttonId2').classList.add('buttons2');
        t = 2
    }
    if(boxNumber === 3){
        if (t >= 0) {
            if(t === 0){
                document.getElementById('eraser').classList.remove('eraser2');
                document.getElementById('eraser').classList.add('eraser');
            }
            if (t === 1) {
                document.getElementById('buttonId1').classList.remove('buttons2');
                document.getElementById('buttonId1').classList.add('buttons');
            }
            if (t === 2) {
                document.getElementById('buttonId2').classList.remove('buttons2');
                document.getElementById('buttonId2').classList.add('buttons');
            }
            if (t === 3) {
                document.getElementById('buttonId3').classList.remove('buttons2');
                document.getElementById('buttonId3').classList.add('buttons');
            }
            if (t === 4) {
                document.getElementById('buttonId4').classList.remove('buttons2');
                document.getElementById('buttonId4').classList.add('buttons');
            }
            if (t === 5) {
                document.getElementById('buttonId5').classList.remove('buttons2');
                document.getElementById('buttonId5').classList.add('buttons');
            }
            if (t === 6) {
                document.getElementById('buttonId6').classList.remove('buttons2');
                document.getElementById('buttonId6').classList.add('buttons');
            }
            if (t === 7) {
                document.getElementById('buttonId7').classList.remove('buttons2');
                document.getElementById('buttonId7').classList.add('buttons');
            }
            if (t === 8) {
                document.getElementById('buttonId8').classList.remove('buttons2');
                document.getElementById('buttonId8').classList.add('buttons');
            }
            if (t === 9) {
                document.getElementById('buttonId9').classList.remove('buttons2');
                document.getElementById('buttonId9').classList.add('buttons');
            }
        }
        document.getElementById('buttonId3').classList.remove('buttons');
        document.getElementById('buttonId3').classList.add('buttons2');
        t = 3
    }
    if(boxNumber === 4){
        if (t >= 0) {
            if(t === 0){
                document.getElementById('eraser').classList.remove('eraser2');
                document.getElementById('eraser').classList.add('eraser');
            }
            if (t === 1) {
                document.getElementById('buttonId1').classList.remove('buttons2');
                document.getElementById('buttonId1').classList.add('buttons');
            }
            if (t === 2) {
                document.getElementById('buttonId2').classList.remove('buttons2');
                document.getElementById('buttonId2').classList.add('buttons');
            }
            if (t === 3) {
                document.getElementById('buttonId3').classList.remove('buttons2');
                document.getElementById('buttonId3').classList.add('buttons');
            }
            if (t === 4) {
                document.getElementById('buttonId4').classList.remove('buttons2');
                document.getElementById('buttonId4').classList.add('buttons');
            }
            if (t === 5) {
                document.getElementById('buttonId5').classList.remove('buttons2');
                document.getElementById('buttonId5').classList.add('buttons');
            }
            if (t === 6) {
                document.getElementById('buttonId6').classList.remove('buttons2');
                document.getElementById('buttonId6').classList.add('buttons');
            }
            if (t === 7) {
                document.getElementById('buttonId7').classList.remove('buttons2');
                document.getElementById('buttonId7').classList.add('buttons');
            }
            if (t === 8) {
                document.getElementById('buttonId8').classList.remove('buttons2');
                document.getElementById('buttonId8').classList.add('buttons');
            }
            if (t === 9) {
                document.getElementById('buttonId9').classList.remove('buttons2');
                document.getElementById('buttonId9').classList.add('buttons');
            }
        }
        document.getElementById('buttonId4').classList.remove('buttons');
        document.getElementById('buttonId4').classList.add('buttons2');
        t = 4
    }
    if(boxNumber === 5){
        if (t >= 0) {
            if(t === 0){
                document.getElementById('eraser').classList.remove('eraser2');
                document.getElementById('eraser').classList.add('eraser');
            }
            if (t === 1) {
                document.getElementById('buttonId1').classList.remove('buttons2');
                document.getElementById('buttonId1').classList.add('buttons');
            }
            if (t === 2) {
                document.getElementById('buttonId2').classList.remove('buttons2');
                document.getElementById('buttonId2').classList.add('buttons');
            }
            if (t === 3) {
                document.getElementById('buttonId3').classList.remove('buttons2');
                document.getElementById('buttonId3').classList.add('buttons');
            }
            if (t === 4) {
                document.getElementById('buttonId4').classList.remove('buttons2');
                document.getElementById('buttonId4').classList.add('buttons');
            }
            if (t === 5) {
                document.getElementById('buttonId5').classList.remove('buttons2');
                document.getElementById('buttonId5').classList.add('buttons');
            }
            if (t === 6) {
                document.getElementById('buttonId6').classList.remove('buttons2');
                document.getElementById('buttonId6').classList.add('buttons');
            }
            if (t === 7) {
                document.getElementById('buttonId7').classList.remove('buttons2');
                document.getElementById('buttonId7').classList.add('buttons');
            }
            if (t === 8) {
                document.getElementById('buttonId8').classList.remove('buttons2');
                document.getElementById('buttonId8').classList.add('buttons');
            }
            if (t === 9) {
                document.getElementById('buttonId9').classList.remove('buttons2');
                document.getElementById('buttonId9').classList.add('buttons');
            }
        }
        document.getElementById('buttonId5').classList.remove('buttons');
        document.getElementById('buttonId5').classList.add('buttons2');
        t = 5
    }
    if(boxNumber === 6){
        if (t >= 0) {
            if(t === 0){
                document.getElementById('eraser').classList.remove('eraser2');
                document.getElementById('eraser').classList.add('eraser');
            }
            if (t === 1) {
                document.getElementById('buttonId1').classList.remove('buttons2');
                document.getElementById('buttonId1').classList.add('buttons');
            }
            if (t === 2) {
                document.getElementById('buttonId2').classList.remove('buttons2');
                document.getElementById('buttonId2').classList.add('buttons');
            }
            if (t === 3) {
                document.getElementById('buttonId3').classList.remove('buttons2');
                document.getElementById('buttonId3').classList.add('buttons');
            }
            if (t === 4) {
                document.getElementById('buttonId4').classList.remove('buttons2');
                document.getElementById('buttonId4').classList.add('buttons');
            }
            if (t === 5) {
                document.getElementById('buttonId5').classList.remove('buttons2');
                document.getElementById('buttonId5').classList.add('buttons');
            }
            if (t === 6) {
                document.getElementById('buttonId6').classList.remove('buttons2');
                document.getElementById('buttonId6').classList.add('buttons');
            }
            if (t === 7) {
                document.getElementById('buttonId7').classList.remove('buttons2');
                document.getElementById('buttonId7').classList.add('buttons');
            }
            if (t === 8) {
                document.getElementById('buttonId8').classList.remove('buttons2');
                document.getElementById('buttonId8').classList.add('buttons');
            }
            if (t === 9) {
                document.getElementById('buttonId9').classList.remove('buttons2');
                document.getElementById('buttonId9').classList.add('buttons');
            }
        }
        document.getElementById('buttonId6').classList.remove('buttons');
        document.getElementById('buttonId6').classList.add('buttons2');
        t = 6
    }
    if(boxNumber === 7){
        if (t >= 0) {
            if(t === 0){
                document.getElementById('eraser').classList.remove('eraser2');
                document.getElementById('eraser').classList.add('eraser');
            }
            if (t === 1) {
                document.getElementById('buttonId1').classList.remove('buttons2');
                document.getElementById('buttonId1').classList.add('buttons');
            }
            if (t === 2) {
                document.getElementById('buttonId2').classList.remove('buttons2');
                document.getElementById('buttonId2').classList.add('buttons');
            }
            if (t === 3) {
                document.getElementById('buttonId3').classList.remove('buttons2');
                document.getElementById('buttonId3').classList.add('buttons');
            }
            if (t === 4) {
                document.getElementById('buttonId4').classList.remove('buttons2');
                document.getElementById('buttonId4').classList.add('buttons');
            }
            if (t === 5) {
                document.getElementById('buttonId5').classList.remove('buttons2');
                document.getElementById('buttonId5').classList.add('buttons');
            }
            if (t === 6) {
                document.getElementById('buttonId6').classList.remove('buttons2');
                document.getElementById('buttonId6').classList.add('buttons');
            }
            if (t === 7) {
                document.getElementById('buttonId7').classList.remove('buttons2');
                document.getElementById('buttonId7').classList.add('buttons');
            }
            if (t === 8) {
                document.getElementById('buttonId8').classList.remove('buttons2');
                document.getElementById('buttonId8').classList.add('buttons');
            }
            if (t === 9) {
                document.getElementById('buttonId9').classList.remove('buttons2');
                document.getElementById('buttonId9').classList.add('buttons');
            }
        }
        document.getElementById('buttonId7').classList.remove('buttons');
        document.getElementById('buttonId7').classList.add('buttons2');
        t = 7
    }
    if(boxNumber === 8){
        if (t >= 0) {
            if(t === 0){
                document.getElementById('eraser').classList.remove('eraser2');
                document.getElementById('eraser').classList.add('eraser');
            }
            if (t === 1) {
                document.getElementById('buttonId1').classList.remove('buttons2');
                document.getElementById('buttonId1').classList.add('buttons');
            }
            if (t === 2) {
                document.getElementById('buttonId2').classList.remove('buttons2');
                document.getElementById('buttonId2').classList.add('buttons');
            }
            if (t === 3) {
                document.getElementById('buttonId3').classList.remove('buttons2');
                document.getElementById('buttonId3').classList.add('buttons');
            }
            if (t === 4) {
                document.getElementById('buttonId4').classList.remove('buttons2');
                document.getElementById('buttonId4').classList.add('buttons');
            }
            if (t === 5) {
                document.getElementById('buttonId5').classList.remove('buttons2');
                document.getElementById('buttonId5').classList.add('buttons');
            }
            if (t === 6) {
                document.getElementById('buttonId6').classList.remove('buttons2');
                document.getElementById('buttonId6').classList.add('buttons');
            }
            if (t === 7) {
                document.getElementById('buttonId7').classList.remove('buttons2');
                document.getElementById('buttonId7').classList.add('buttons');
            }
            if (t === 8) {
                document.getElementById('buttonId8').classList.remove('buttons2');
                document.getElementById('buttonId8').classList.add('buttons');
            }
            if (t === 9) {
                document.getElementById('buttonId9').classList.remove('buttons2');
                document.getElementById('buttonId9').classList.add('buttons');
            }
        }
        document.getElementById('buttonId8').classList.remove('buttons');
        document.getElementById('buttonId8').classList.add('buttons2');
        t = 8
    }
    if(boxNumber === 9){
        if (t >= 0) {
            if(t === 0){
                document.getElementById('eraser').classList.remove('eraser2');
                document.getElementById('eraser').classList.add('eraser');
            }
            if (t === 1) {
                document.getElementById('buttonId1').classList.remove('buttons2');
                document.getElementById('buttonId1').classList.add('buttons');
            }
            if (t === 2) {
                document.getElementById('buttonId2').classList.remove('buttons2');
                document.getElementById('buttonId2').classList.add('buttons');
            }
            if (t === 3) {
                document.getElementById('buttonId3').classList.remove('buttons2');
                document.getElementById('buttonId3').classList.add('buttons');
            }
            if (t === 4) {
                document.getElementById('buttonId4').classList.remove('buttons2');
                document.getElementById('buttonId4').classList.add('buttons');
            }
            if (t === 5) {
                document.getElementById('buttonId5').classList.remove('buttons2');
                document.getElementById('buttonId5').classList.add('buttons');
            }
            if (t === 6) {
                document.getElementById('buttonId6').classList.remove('buttons2');
                document.getElementById('buttonId6').classList.add('buttons');
            }
            if (t === 7) {
                document.getElementById('buttonId7').classList.remove('buttons2');
                document.getElementById('buttonId7').classList.add('buttons');
            }
            if (t === 8) {
                document.getElementById('buttonId8').classList.remove('buttons2');
                document.getElementById('buttonId8').classList.add('buttons');
            }
            if (t === 9) {
                document.getElementById('buttonId9').classList.remove('buttons2');
                document.getElementById('buttonId9').classList.add('buttons');
            }
        }
        document.getElementById('buttonId9').classList.remove('buttons');
        document.getElementById('buttonId9').classList.add('buttons2');
        t = 9
    }
    boxColor()
    for (let i = 0; i < 9; i++) {
        a = nanpureNumber[i].indexOf(Num)
        b = 9 * i + a
        tmpList.push(b);
        if (nanpureA[b].length !== 0) {
            document.querySelector(`[data-index='${b}']`).setAttribute("data-state", 3)
        }
    }
}

function yoko45() {
    for (i = 0; i < 9; i++) {
        let total = 0
        for (j = 0; j < 9; j++) {
            total += nanpureNumber[i][j];
            if (j === 8) {
                if (total === 45) {
                    pt++
                }
            }
        }
    }
};

function total(num) {
    for (j = 0; j < 9; j++) {
        total += nanpure[num][j];
    }
}
function lineCreate(line) {
    for (let i = (line.length - 1); 0 < i; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = line[i];
        line[i] = line[r];
        line[r] = tmp;

    }
    return line;
}
function nanpureCreate() {
    let flag = true;
    while(flag){
    let createBoxNumber = [[],[],[],[],[],[],[],[],[]];
    let tmpNumber0 = [[],[],[],[],[],[],[],[],[]];
    let yokoLine = [[],[],[],[],[],[],[],[],[]];
    let box33 = [[],[],[],[],[],[],[],[],[]];
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    function inBox(line, box) {
        for (let i = 1; i < 10; i++) {
            if (line.indexOf(i) === -1) {
                box.push(i)
            }
        }
    };
    //順番をランダムに
    function lineCreate(line) {
        for (let i = (line.length - 1); 0 < i; i--) {
            let r = Math.floor(Math.random() * (i + 1));
            let tmp = line[i];
            line[i] = line[r];
            line[r] = tmp;
        }
        return line;
    } 
    createBoxNumber[0] = createBoxNumber[0].concat(lineCreate(number));
    yokoLine[0] = createBoxNumber[0]
    for (let i = 0; i < 9; i++) {
        tmpNumber0[i] = tmpNumber0[i].concat(createBoxNumber[0][i])
        if(Math.floor(i / 3) === 0){
            box33[0] = box33[0].concat(createBoxNumber[0][i])
        }
        if(Math.floor(i / 3) === 1){
            box33[1] = box33[1].concat(createBoxNumber[0][i])
        }
        if(Math.floor(i / 3) === 2){
            box33[2] = box33[2].concat(createBoxNumber[0][i])
        }
    }
    let bp;
    let totalAll = 45;
  for (let j = 1; j < 9; j++) {
        for (let i = 0; i < 9; i++) {
            let tmpA = []
            let tmpBox;
            if(Math.floor(j / 3) === 0){
                if(Math.floor(i / 3) === 0){
                    tmpBox = box33[0];
                }
                if(Math.floor(i / 3) === 1){
                    tmpBox = box33[1];
                }
                if(Math.floor(i / 3) === 2){
                    tmpBox = box33[2];
                }
            }
            if(Math.floor(j / 3) === 1){
                if(Math.floor(i / 3) === 0){
                    tmpBox = box33[3];
                }
                if(Math.floor(i / 3) === 1){
                    tmpBox = box33[4]
                }
                if(Math.floor(i / 3) === 2){
                    tmpBox = box33[5]
                }
            }
            if(Math.floor(j / 3) === 2){
                if(Math.floor(i / 3) === 0){
                    tmpBox = box33[6];
                }
                if(Math.floor(i / 3) === 1){
                    tmpBox = box33[7]
                }
                if(Math.floor(i / 3) === 2){
                    tmpBox = box33[8]
                }
            }
            inBox((tmpNumber0[i].concat(yokoLine[j], tmpBox)), tmpA)
            let tmpB = lineCreate(tmpA);
            if(isNaN(tmpB[0])){
                bp = 0;
                break;
            }
            yokoLine[j] = yokoLine[j].concat(tmpB[0])
            tmpNumber0[i] = tmpNumber0[i].concat(tmpB[0])
            if(Math.floor(j / 3) === 0){
                if(Math.floor(i / 3) === 0){
                    box33[0] = box33[0].concat(tmpB[0])
                }
                if(Math.floor(i / 3) === 1){
                    box33[1] = box33[1].concat(tmpB[0])
                }
                if(Math.floor(i / 3) === 2){
                    box33[2] = box33[2].concat(tmpB[0])
                }
            }
            if(Math.floor(j / 3) === 1){
                if(Math.floor(i / 3) === 0){
                    box33[3] = box33[3].concat(tmpB[0])
                }
                if(Math.floor(i / 3) === 1){
                    box33[4] = box33[4].concat(tmpB[0])
                }
                if(Math.floor(i / 3) === 2){
                    box33[5] = box33[5].concat(tmpB[0])
                }
            }
            if(Math.floor(j / 3) === 2){
                if(Math.floor(i / 3) === 0){
                    box33[6] = box33[6].concat(tmpB[0])
                }
                if(Math.floor(i / 3) === 1){
                    box33[7] = box33[7].concat(tmpB[0])
                }
                if(Math.floor(i / 3) === 2){
                    box33[8] = box33[8].concat(tmpB[0])
                }
            }
            
            totalAll += tmpB[0]
            if (i === 8) {
                createBoxNumber[j] = createBoxNumber[j].concat(yokoLine[j])
            }
        }
        if (bp === 0){
            bp = [];
            break
        }
    };
    console.log(createBoxNumber[0],createBoxNumber[1])
    console.log(createBoxNumber[2],createBoxNumber[3])
    console.log(createBoxNumber[4],createBoxNumber[5])
    console.log(createBoxNumber[6],createBoxNumber[7])
    console.log(createBoxNumber[8])
    if(totalAll === 405){
        return nanpureNumber = createBoxNumber, t = tmpNumber0, y = yokoLine, k = totalAll, c = box33;
    }
};
};


function mondai(ab) {
    for (let i = 0; i < 81; i++) {
        let a = (Math.floor(i / 9));//商
        let b = (Math.floor(i % 9));//余り
        nanpureA.push(nanpureNumber[a][b]);
    }
    let pt1 = 0; let pt2 = 0; let pt3 = 0; let pt4 = 0; let pt5 = 0; let pt6 = 0; let pt7 = 0; let pt8 = 0; let pt9 = 0;
    let flag = true
    while (flag) {
        let pt = pt1 + pt2 + pt3 + pt4 + pt5 + pt6 + pt7 + pt8 + pt9;
        if (pt === (ab * 9)) {
            break;
        }
        a = Math.floor(Math.random() * (80 + 1 - 0)) + 0;
        //b = Math.floor( Math.random() * (8 + 1 - 0) ) + 0 ;
        if (nanpureA[a] !== []) {
            if (nanpureA[a] === 1) {
                if (pt1 !== ab) {
                    nanpureA[a] = [];
                    pt1++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 2) {
                if (pt2 !== ab) {
                    nanpureA[a] = [];
                    pt2++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 3) {
                if (pt3 !== ab) {
                    nanpureA[a] = [];
                    pt3++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 4) {
                if (pt4 !== ab) {
                    nanpureA[a] = [];
                    pt4++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 5) {
                if (pt5 !== ab) {
                    nanpureA[a] = [];
                    pt5++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 6) {
                if (pt6 !== ab) {
                    nanpureA[a] = [];
                    pt6++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 7) {
                if (pt7 !== ab) {
                    nanpureA[a] = [];
                    pt7++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 8) {
                if (pt8 !== ab) {
                    nanpureA[a] = [];
                    pt8++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 9) {
                if (pt9 !== ab) {
                    nanpureA[a] = [];
                    pt9++;
                } else {
                    continue;
                }
            }
        }
    }
};
const onClickSquare = (index) => {
    //入力するのが空白の場合
    if (isNaN(boxNumber)) {
        //答えのリストと正解のリストが同じではない場合
        if (answerA[index] !== nanpureA[index]) {
            document.querySelector(`[data-index='${index}']`).innerHTML = `<p>${boxNumber}</p>`;
        }
        //入力するのが数字の場合
    } else {
        //答えのリストに数字が入っていない場合
        if (!isNaN(nanpureA[index])) {
            //正解のリストと入力する数字が同じ場合
            if (answerA[index] === boxNumber) {
                document.querySelector(`[data-index='${index}']`).classList.add('DColor');
                RBlist.push(index);
                document.querySelector(`[data-index='${index}']`).classList.remove('redColor');
                document.querySelector(`[data-index='${index}']`).innerHTML = `<p>${boxNumber}</p>`;
                document.querySelector(`[data-index='${index}']`).setAttribute("data-state", 3)
                //答えのリストに入れる
                nanpureA[index] = boxNumber
                //全部埋まっていて正解の場合に
                let totalC = 0;
                for (let i = 0; i < 81; i++) {
                    totalC += nanpureA[i];
                    if ((i + 1) % 9 === 0) {
                        if (totalC % 45 !== 0) {
                            break
                        }
                    }
                    if (totalC === 405) {
                        confirm('clear');
                    }
                }
                //正解のリストと入力する数字が同じではない場合
            } else {
                //答えのリストと正解のリストが同じではない場合
                if (answerA[index] !== nanpureA[index]) {
                    document.querySelector(`[data-index='${index}']`).classList.add('redColor')
                    document.querySelector(`[data-index='${index}']`).innerHTML = `<p>${boxNumber}</p>`;
                    RBlist.push(index);
                }
            }
        }
    }

};
function answerAbCreate() {
    let answera = [];

    for (let i = 0; i < 81; i++) {
        a = (Math.floor(i / 9));
        b = (Math.floor(i % 9));
        answera.push(nanpureNumber[a][b]);
    }
    return answerA = answera;
};

function reset(level) {
    if (RBlist.length !== 0) {
        for (let i = 0; i < RBlist.length; i++) {
            document.querySelector(`[data-index='${RBlist[i]}']`).classList.remove('redColor', 'numberColor')
        }
    }
    RBlist = [];
    boxColor();
    nanpureA = [];
    nanpureCreate();
    answerAbCreate();
    mondai(level);
    for (let i = 0; i < 81; i++) {
        document.querySelector(`[data-index='${i}']`).innerHTML = `<p>${[]}</p>`;
        document.querySelector(`[data-index='${i}']`).innerHTML = `<p>${nanpureA[i]}</p>`;
    }
    N(1);
};


const createSquares = () => {
    for (let i = 0; i < 81; i++) {
        const square = squareTemplate.cloneNode(true); //テンプレートから要素をクローン
        square.removeAttribute("id"); //テンプレート用のid属性を削除
        gameBox.appendChild(square); //マス目のHTML要素を追加

        const number = square.querySelector('.number');


        let defaultState;

        let a = (Math.floor(i / 9));//商
        let b = (Math.floor(i % 9));//余り

        
        if (a === 0 || a === 1 || a === 2 || a === 6 || a === 7 || a === 8) {
            if (b === 0 || b === 1 || b === 2 || b === 6 || b === 7 || b === 8) {
                defaultState = 1;
                number.setAttribute("data-state", defaultState);
            }
        } else {
            if (b === 3 || b === 4 || b === 5) {
                defaultState = 1;
                number.setAttribute("data-state", defaultState);
            }
        }
        
        //document.querySelector(`[data-index='${index}']`).setAttribute("data-state", 2)
        //number.setAttribute("data-state", defaultState);
        number.setAttribute("data-index", i); //インデックス番号をHTML要素に保持させる
        document.querySelector(`[data-index='${i}']`).innerHTML = `<p>${nanpureA[i]}</p>`;
        document.querySelector(`[data-index='${i}']`).classList.add('numberColor');

        square.addEventListener('click', () => {
            onClickSquare(i);
        })
    }
};

function boxColor() {
    for (let i = 0; i < 81; i++) {
        let defaultState;
        let a = (Math.floor(i / 9));//商
        let b = (Math.floor(i % 9));//余り
        if (a === 0 || a === 1 || a === 2 || a === 6 || a === 7 || a === 8) {
            if (b === 0 || b === 1 || b === 2 || b === 6 || b === 7 || b === 8) {
                defaultState = 1;
                document.querySelector(`[data-index='${i}']`).setAttribute("data-state", defaultState)
            } else {
                defaultState = 2;
                document.querySelector(`[data-index='${i}']`).setAttribute("data-state", defaultState)
            }
        } else {
            if (b === 3 || b === 4 || b === 5) {
                defaultState = 1;
                document.querySelector(`[data-index='${i}']`).setAttribute("data-state", defaultState)
            } else {
                defaultState = 2;
                document.querySelector(`[data-index='${i}']`).setAttribute("data-state", defaultState)
            }
        }
    }
};

explain = ("ルール       デフォルト難易度　簡単\n\nどの横の列にも１〜９が一つずつ入る\nどの縦の列にも１〜９一つずつが入る\nどの３×３ブロックにも１〜９一つずつが入る\n\n下にある数字をクリックして選択をして、空いているマスをクリックすると入力できます。\n難易度は一番下にある再生成から変更ができます")

nanpureCreate();
answerAbCreate();
mondai(3);
window.onload = () => {
    createSquares();
    N(1);
    //alert(explain)
};

/**
 *     if(boxNumber === 1){
        document.getElementById('buttonId1').classList.remove('buttons');
        document.getElementById('buttonId1').classList.add('buttons2');
        t = buttonId1
    }
    if(boxNumber === 2){
        document.getElementById('t').classList.remove('buttons');
        document.getElementById('buttonId2').classList.add('buttons2');
        t = buttonId2
    }
    if(boxNumber === 3){
        document.getElementById('t').classList.remove('buttons');
        document.getElementById('buttonId3').classList.add('buttons2');
        t = buttonId3
    }
    if(boxNumber === 4){
        document.getElementById('t').classList.remove('buttons');
        document.getElementById('buttonId4').classList.add('buttons2');
        t = buttonId4
    }
    if(boxNumber === 5){
        document.getElementById('t').classList.remove('buttons');
        document.getElementById('buttonId5').classList.add('buttons2');
        t = buttonId5
    }
    if(boxNumber === 6){
        document.getElementById('t').classList.remove('buttons');
        document.getElementById('buttonId6').classList.add('buttons2');
        t = buttonId6
    }
    if(boxNumber === 7){
        document.getElementById('t').classList.remove('buttons');
        document.getElementById('buttonId7').classList.add('buttons2');
        t = buttonId7
    }
    if(boxNumber === 8){
        document.getElementById('t').classList.remove('buttons');
        document.getElementById('buttonId8').classList.add('buttons2');
        t = buttonId8
    }
    if(boxNumber === 9){
        document.getElementById('t').classList.remove('buttons');
        document.getElementById('buttonId9').classList.add('buttons2');
        t = buttonId9
    }
 */