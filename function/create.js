//入力する数字
let boxNumber = [];
//入力した位置を保存用
let RBlist = [];
//背景を初期の色に
function boxColor() {
    for (let i = 0; i < 81; i++) {
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
// 正解の配列を作成
function nanpureCreate() {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    firstNumber = lineCreate(number);
    let flag = true;
    while (flag) {
        //完成用
        let createBoxNumber = [firstNumber, [], [], [], [], [], [], [], []];
        //横用
        let tmpNumber0 = [[], [], [], [], [], [], [], [], []];
        //縦用
        let heightLine = [[], [], [], [], [], [], [], [], []];
        //3 * 3 のボックス用
        let box33 = [[], [], [], [], [], [], [], [], []];
        //1行目
        heightLine[0] = createBoxNumber[0]
        //縦用のに入れる
        for (let i = 0; i < 9; i++) {
            tmpNumber0[i] = tmpNumber0[i].concat(createBoxNumber[0][i])
            box33[Math.floor(i / 3)] = box33[Math.floor(i / 3)].concat(createBoxNumber[0][i])
        }
        let bp;
        //2~9行目
        for (let j = 1; j < 9; j++) {
            for (let i = 0; i < 9; i++) {
                let tmpA = [] //候補用
                let tmpBox;
                //入力位置把握用
                let whileNumberJ = Math.floor(j / 3)
                let whileNumberI = Math.floor(i / 3)
                //同じ箱
                tmpBox = box33[whileNumberJ * 3 + whileNumberI]
                //使われていない数字を探す
                inBox((tmpNumber0[i].concat(heightLine[j], tmpBox)), tmpA)
                let tmpB = lineCreate(tmpA);
                // 候補の中からランダムで決めていくと9個目が被ってしまう場合があるので
                if (isNaN(tmpB[0])) {
                    bp = 0;
                    break;
                }
                //縦・横・３×３用の配列に入れる
                heightLine[j] = heightLine[j].concat(tmpB[0])
                tmpNumber0[i] = tmpNumber0[i].concat(tmpB[0])
                box33[whileNumberJ * 3 + whileNumberI] = box33[whileNumberJ * 3 + whileNumberI].concat(tmpB[0])
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
            if (j === 8) {
                //完成をしたものを返す
                return nanpureNumber = createBoxNumber;
            }
        };
    };
};
//正解のリストを作成　
function answerCreate() {
    let answera = [];

    for (let i = 0; i < 81; i++) {
        a = (Math.floor(i / 9));
        b = (Math.floor(i % 9));
        answera.push(nanpureNumber[a][b]);
    }
    return answerNumber = answera, nanpureA = []; //問題作成用
};
//　問題作成　level × 9個消す
function question(level) {
    //正解の配列の形を変える
    for (let i = 0; i < 81; i++) {
        let a = (Math.floor(i / 9));//商
        let b = (Math.floor(i % 9));//余り
        nanpureA.push(nanpureNumber[a][b]);
    }
    //消した数の確認用
    let spacePt = [[], [], [], [], [], [], [], [], []]
    let flag = true
    while (flag) {
        pt = 0;
        a = Math.floor(Math.random() * (81));
        //空白ではない時
        if (nanpureA[a].length !== 0) {
            //上限以下か？
            if (spacePt[nanpureA[a] - 1].length !== level) {
                spacePt[nanpureA[a] - 1].push(0)
                nanpureA[a] = [];
            } else {
                continue;
            }
        }
        if (nanpureA[a].length === 0) {
            let pt = 0;
            for (let j = 0; j < 9; j++) {
                pt += spacePt[j].length;
            }
            if (pt === (level * 9)) {
                break;
            }
        }

    };
    return magicLimit = level, magicPoint = 0, colorIdNumber = 0;
}
//ボックス作成
const createSquares = () => {
    const gameBox = document.getElementById("gameBox");
    const squareTemplate = document.getElementById("square-template");
    for (let i = 0; i < 81; i++) {
        const square = squareTemplate.cloneNode(true); //テンプレートから要素をクローン
        square.removeAttribute("id"); //テンプレート用のid属性を削除
        gameBox.appendChild(square); //マス目のHTML要素を追加

        const number = square.querySelector('.number');

        //目印をつける
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
    //色を剥がす
    if (RBlist.length !== 0) {
        for (let i = 0; i < RBlist.length; i++) {
            document.querySelector(`[data-index='${RBlist[i]}']`).classList.remove('redColor', 'DColor')
        }
    }
    RBlist = [];
    boxColor();
    nanpureA = [];
    nanpureCreate();
    answerCreate();
    question(level);
    for (let i = 0; i < 81; i++) {
        document.querySelector(`[data-index='${i}']`).innerHTML = `<p>${[]}</p>`;
        document.querySelector(`[data-index='${i}']`).innerHTML = `<p>${nanpureA[i]}</p>`;
    }
    //魔法のボタン表示
    document.getElementById('buttonId10').classList.remove('noneButton');
    document.getElementById('buttonId10').classList.add('buttons3');
    N(1);
};