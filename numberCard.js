const prompt = require("prompt");
prompt.start();
/**
 * 숫자 카드게임은 여러개의 숫자 카드 중에서 가장 높은 숫자가 쓰인 카드 한장을 뽑는 게임이다.
 * 단, 게임의 룰을 지키며 카드를 뽑아야하고 룰은 다음과 같다.
 * 
 * 1. 숫자가 쓰인 카드들이 N x M 형태로 놓여있다. 이때 N은 행의 개수를 의미하며, M은 열의 개수를 의미한다.
 * 
 * 2. 먼저 뽑고자하는 카드가 포함되어있는 행을 선택한다.
 * 
 * 3. 그다음 선택된 행에 포함된 카드들 중 가장 숫자가 낮은 카드를 뽑아야한다.
 * 
 * 4. 따라서 처음에 카드를 골라낼 행을 선택할때 이후에 해당 행에서 가장 숫자가 낮은것을
 * 고려하여 최종적으로 가장 높은 숫자의 카드를 뽑을 수 있도록 전략을 세워야한다.
 */
 prompt.get(["rowNcol"], function(err, firstRes){
    const { rowNcol } = firstRes;
    let answer = 0;

    function spaceStrToArray (str) {
        return str.split(" ");
    }

    const rowNcolArray = spaceStrToArray(rowNcol);
    const promptRows = [];
    for (let i = 0; i < Number(rowNcolArray[0]); i++) {
        promptRows.push(`row${i + 1}`);
    }

    prompt.get(promptRows, function(err, res){
        // answer에 제일 작은 값을 넣는다.
        let answer = 0;

        Object.keys(res).forEach(key => {
            // 각 행에서 오름차순의 0번째 인덱스에 접근하여 최소값을 구한다
            const n = spaceStrToArray(res[key]).map(n => Number(n)).sort((a, b) => a - b)[0];
            // 최소값이 answer보다 크면 answer에 넣는다
            if (n > answer) {
                answer = n;
            }
        });

        console.log('answer??', answer)
    });
});
