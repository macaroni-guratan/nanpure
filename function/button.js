//消しゴム用
function N0() {
    boxNumber = []
    //前に押したボタンの色を変える
    if (colorIdNumber === 0) {
        document.getElementById('eraser').classList.remove('eraser2');
        document.getElementById('eraser').classList.add('eraser');
    } else if (10 > colorIdNumber) {
        document.getElementById('buttonId' + `${colorIdNumber}`).classList.remove('buttons2');
        document.getElementById('buttonId' + `${colorIdNumber}`).classList.add('buttons');
    }
    if (colorIdNumber === 10) {
        document.getElementById('buttonId' + `${colorIdNumber}`).classList.remove('buttons4');
        document.getElementById('buttonId' + `${colorIdNumber}`).classList.add('buttons3');
    }
    colorIdNumber = 0;
    document.getElementById('eraser').classList.remove('eraser');
    document.getElementById('eraser').classList.add('eraser2');
    boxColor()
}
//ボタン用
function N(Num) {
    boxNumber = Num;
    //数字の背景を戻す
    boxColor();
    //ボタンと同じ数字の背景の色を変える
    for (let i = 0; i < 9; i++) {
        a = nanpureNumber[i].indexOf(Num)
        b = 9 * i + a
        if (nanpureA[b].length !== 0) {
            document.querySelector(`[data-index='${b}']`).setAttribute("data-state", 3)
        }
    }
    //前と今押したボタン色変えと保存
    if (colorIdNumber === 0) {
        document.getElementById('eraser').classList.remove('eraser2');
        document.getElementById('eraser').classList.add('eraser');
    } else if (10 > colorIdNumber) {
        document.getElementById('buttonId' + `${colorIdNumber}`).classList.remove('buttons2');
        document.getElementById('buttonId' + `${colorIdNumber}`).classList.add('buttons');
    }
    if (colorIdNumber === 10) {
        document.getElementById('buttonId' + `${colorIdNumber}`).classList.remove('buttons4');
        document.getElementById('buttonId' + `${colorIdNumber}`).classList.add('buttons3');
    }
    colorIdNumber = boxNumber
    document.getElementById('buttonId' + `${colorIdNumber}`).classList.remove('buttons');
    document.getElementById('buttonId' + `${colorIdNumber}`).classList.add('buttons2');
}
//魔法のボタン用
function magicButton() {
    if (magicLimit > magicPoint) {
        boxNumber = 10;
        if (colorIdNumber === 0) {
            document.getElementById('eraser').classList.remove('eraser2');
            document.getElementById('eraser').classList.add('eraser');
        } else if (10 > colorIdNumber) {
            document.getElementById('buttonId' + `${colorIdNumber}`).classList.remove('buttons2');
            document.getElementById('buttonId' + `${colorIdNumber}`).classList.add('buttons');
        }
        if (colorIdNumber === 10) {
            document.getElementById('buttonId' + `${colorIdNumber}`).classList.remove('buttons4');
            document.getElementById('buttonId' + `${colorIdNumber}`).classList.add('buttons3');
        }
        colorIdNumber = boxNumber
        document.getElementById('buttonId' + `${colorIdNumber}`).classList.remove('buttons');
        document.getElementById('buttonId' + `${colorIdNumber}`).classList.add('buttons2');
    }
    colorIdNumber = boxNumber;
    document.getElementById('buttonId' + `${colorIdNumber}`).classList.remove('buttons3');
    document.getElementById('buttonId' + `${colorIdNumber}`).classList.add('buttons4');
    boxColor();
}
//クリック時に
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
            if (nanpureA[index] !== answerA[index]) {
                //魔法のボタン
                if (boxNumber === 10) {
                    //使用回数以下なのか
                    if (magicLimit > magicPoint) {
                        document.querySelector(`[data-index='${index}']`).classList.add('DColor');
                        RBlist.push(index);
                        document.querySelector(`[data-index='${index}']`).classList.remove('redColor');
                        document.querySelector(`[data-index='${index}']`).innerHTML = `<p>${answerA[index]}</p>`;
                        //答えのリストに入れる
                        nanpureA[index] = answerA[index]

                        boxColor();
                        for (let i = 0; i < 9; i++) {
                            a = nanpureNumber[i].indexOf(answerA[index])
                            b = 9 * i + a
                            if (nanpureA[b].length !== 0) {
                                document.querySelector(`[data-index='${b}']`).setAttribute("data-state", 3)
                            }
                        }

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
                        alert(`使用可能回数　残り${magicLimit - magicPoint - 1}回`)
                        boxColor();
                        magicPoint++;
                        //使用上限
                        if (magicLimit === magicPoint) {
                            boxNumber = [];
                            //前に選択していたボタンの色もどし
                            if (colorIdNumber === 0) {
                                document.getElementById('eraser').classList.remove('eraser2');
                                document.getElementById('eraser').classList.add('eraser');
                            }
                            if (10 > colorIdNumber > 0) {
                                document.getElementById('buttonId' + `${colorIdNumber}`).classList.remove('buttons2');
                                document.getElementById('buttonId' + `${colorIdNumber}`).classList.add('buttons');
                            }
                            if (colorIdNumber === 10) {
                                document.getElementById('buttonId' + `${colorIdNumber}`).classList.remove('buttons4');
                                document.getElementById('buttonId' + `${colorIdNumber}`).classList.add('buttons3');
                            }
                            document.getElementById('buttonId' + `${colorIdNumber}`).classList.remove('buttons3');
                            document.getElementById('buttonId' + `${colorIdNumber}`).classList.add('noneButton');
                            colorIdNumber = 1;
                            N(1);
                        }
                    }
                }
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
    }

};