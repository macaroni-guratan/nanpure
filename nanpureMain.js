const gameBox = document.getElementById("gameBox");
const squareTemplate = document.getElementById("square-template");
explain = ("ルール       デフォルト難易度　簡単\nどの横の列にも１〜９が一つずつ入る\nどの縦の列にも１〜９一つずつが入る\nどの３×３ブロックにも１〜９一つずつが入る\n\n下にある数字をクリックして選択をして、空いているマスをクリックすると入力できます。難易度は上にある再生成から変更ができます\n魔法のボタンを選択してクリックすると正解の数字を入力できます。　　　使用回数は難易度によって変わります。")

nanpureCreate();
answerAbCreate();
mondai(3);
createSquares();
N(1);
window.onload = () => {
    alert(explain)
};