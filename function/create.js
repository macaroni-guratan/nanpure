//入力する数字
let boxNumber = [];
//入力した位置を保存用
let RBlist = [];
//背景を初期の色に
function boxColor() {
    for (let i = 0; i < 81; i++) {
        let defaultState;
        let a = (Math.floor(i / 9));//商
        let b = (Math.floor(i % 9));//余り
        if (Math.floor(a / 3) !== 1) {
            if (Math.floor(b / 3) !== 1) {
                document.querySelector(`[data-index='${i}']`).setAttribute("data-state", 1)
            } else {
                document.querySelector(`[data-index='${i}']`).setAttribute("data-state", 2)
            }
        } else {
            if (Math.floor(b / 3) === 1) {
                document.querySelector(`[data-index='${i}']`).setAttribute("data-state", 1)
            } else {
                document.querySelector(`[data-index='${i}']`).setAttribute("data-state", 2)
            }
        }
    }
};
function nanpureCreate() {
    let flag = true;
    //順番を混ぜる
    function lineCreate(line) {
        for (let i = (line.length - 1); 0 < i; i--) {
            let r = Math.floor(Math.random() * (i + 1));
            let tmp = line[i];
            line[i] = line[r];
            line[r] = tmp;

        }
        return line;
    }
    while (flag) {
        //完成用
        let createBoxNumber = [[], [], [], [], [], [], [], [], []];
        //横用
        let tmpNumber0 = [[], [], [], [], [], [], [], [], []];
        //縦用
        let heightLine = [[], [], [], [], [], [], [], [], []];
        //3 * 3 のボックス用
        let box33 = [[], [], [], [], [], [], [], [], []];
        const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        //９までで入っていない数字を返す
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
        //1行目
        createBoxNumber[0] = createBoxNumber[0].concat(lineCreate(number));
        heightLine[0] = createBoxNumber[0]
        //縦用のに入れる
        for (let i = 0; i < 9; i++) {
            tmpNumber0[i] = tmpNumber0[i].concat(createBoxNumber[0][i])
            box33[Math.floor(i / 3)] = box33[Math.floor(i / 3)].concat(createBoxNumber[0][i])
        }
        let bp;
        //全ての数字をたす
        let totalAll = 45;
        //2~9行目
        for (let j = 1; j < 9; j++) {
            for (let i = 0; i < 9; i++) {
                let tmpA = [] //候補用
                let tmpBox;
                //同じ箱
                tmpBox = box33[Math.floor(j / 3) * 3 + Math.floor(i / 3)]
                //使われていない数字を探す
                inBox((tmpNumber0[i].concat(heightLine[j], tmpBox)), tmpA)
                let tmpB = lineCreate(tmpA);
                // ランダムで決めていくと9個目が被ってしまう場合があるから
                if (isNaN(tmpB[0])) {
                    bp = 0;
                    break;
                }
                //縦・横・３×３用の配列に入れる
                heightLine[j] = heightLine[j].concat(tmpB[0])
                tmpNumber0[i] = tmpNumber0[i].concat(tmpB[0])
                box33[Math.floor(j / 3) * 3 + Math.floor(i / 3)] = box33[Math.floor(j / 3) * 3 + Math.floor(i / 3)].concat(tmpB[0])
                //トータルにたす
                totalAll += tmpB[0]
                //9個目なら完成用の配列に入れる
                if (i === 8) {
                    createBoxNumber[j] = createBoxNumber[j].concat(heightLine[j])
                }
            }
            //やり直し
            if (bp === 0) {
                bp = [];
                break
            }
        };
        //完成していたら終わらせる
        if (totalAll === 405) {
            return nanpureNumber = createBoxNumber, tmpNumber = tmpNumber0, widthLine = heightLine, allTotal = totalAll, box9 = box33;
        }
    };
};
//答えを保存
function answerAbCreate() {
    let answera = [];

    for (let i = 0; i < 81; i++) {
        a = (Math.floor(i / 9));
        b = (Math.floor(i % 9));
        answera.push(nanpureNumber[a][b]);
    }
    return answerA = answera, nanpureA = []; //問題作成用
};
//　問題作成　level × 9個消す
function mondai(level) {
    //正解の配列を保存
    for (let i = 0; i < 81; i++) {
        let a = (Math.floor(i / 9));//商
        let b = (Math.floor(i % 9));//余り
        nanpureA.push(nanpureNumber[a][b]);
    }
    //消した数の確認用
    let pt1 = 0; let pt2 = 0; let pt3 = 0; let pt4 = 0; let pt5 = 0; let pt6 = 0; let pt7 = 0; let pt8 = 0; let pt9 = 0;
    //let spacePt = [[0],[0],[0],[0],[0],[0],[0],[0],[0]]
    let flag = true
    while (flag) {
        let pt = pt1 + pt2 + pt3 + pt4 + pt5 + pt6 + pt7 + pt8 + pt9;
        //let pt = 0;
        /** 
         * 
         for(let j = 0; j < 9; j++){
             pt = pt + spacePt[j];
            }
            */
        if (pt === (level * 9)) {
            break;
        }
        a = Math.floor(Math.random() * (81));
        //b = Math.floor( Math.random() * (8 + 1 - 0) ) + 0 ;

        if (nanpureA[a] !== []) {
            if (nanpureA[a] === 1) {
                if (pt1 !== level) {
                    nanpureA[a] = [];
                    pt1++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 2) {
                if (pt2 !== level) {
                    nanpureA[a] = [];
                    pt2++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 3) {
                if (pt3 !== level) {
                    nanpureA[a] = [];
                    pt3++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 4) {
                if (pt4 !== level) {
                    nanpureA[a] = [];
                    pt4++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 5) {
                if (pt5 !== level) {
                    nanpureA[a] = [];
                    pt5++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 6) {
                if (pt6 !== level) {
                    nanpureA[a] = [];
                    pt6++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 7) {
                if (pt7 !== level) {
                    nanpureA[a] = [];
                    pt7++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 8) {
                if (pt8 !== level) {
                    nanpureA[a] = [];
                    pt8++;
                } else {
                    continue;
                }
            }
            if (nanpureA[a] === 9) {
                if (pt9 !== level) {
                    nanpureA[a] = [];
                    pt9++;
                } else {
                    continue;
                }
            }
            /**
            if (spacePt[nanpureA[a]] !== level){
                spacePt[nanpureA[a]] =  spacePt[nanpureA[a]] + 1;
                nanpureA[a] = [];
            }else {
                continue;
            }
            */
        }
    }
    return magicLimit = level, magicPoint = 0, colorIdNumber = 11;
};
//ボックス作成
const createSquares = () => {
    for (let i = 0; i < 81; i++) {
        const square = squareTemplate.cloneNode(true); //テンプレートから要素をクローン
        square.removeAttribute("id"); //テンプレート用のid属性を削除
        gameBox.appendChild(square); //マス目のHTML要素を追加

        const number = square.querySelector('.number');

        //目標をつける
        number.setAttribute("data-index", i);
        //問題を入力
        document.querySelector(`[data-index='${i}']`).innerHTML = `<p>${nanpureA[i]}</p>`;
        document.querySelector(`[data-index='${i}']`).classList.add('numberColor');

        //クリック時の設定
        square.addEventListener('click', () => {
            onClickSquare(i);
        })
    }
};
//再生成
function reset(level) {
    if (RBlist.length !== 0) {
        for (let i = 0; i < RBlist.length; i++) {
            document.querySelector(`[data-index='${RBlist[i]}']`).classList.remove('redColor', 'DColor')
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
    document.getElementById('buttonId10').classList.remove('noneButton');
    document.getElementById('buttonId10').classList.add('buttons3');
    N(1);
};