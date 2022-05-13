const prompt = require("prompt");
prompt.start();
/**
 * 동빈이의 큰수의 법칙은 다양한 수로 이루어진 배열이 있을 떄
 * 주어진 수들을 M번 더하여 가장 큰수를 만드는 법칙이다.
 * 
 * 단, 베열의 특정한 인덱스에 해당하는 수가 연속해서 K번 초과해서 더해질 수 없다.
 * 
 * 배열의 크기 N, 숫자가 더해지는 횟수 M 그리고 초과 제한 개수 K이다.
 * 
 * 첫째 줄에 N(2 <= N <= 1000), M(1 <= M <= 10000), K(1 <= K <= 10000)의 자연수가 주어지며,
 * 각 자연수는 공백으로 구분한다.
 * 
 * 둘째 줄에 N개의 자연수가 주어진다. 각 자연수는 공백으로 구분한다.
 * 단, 각각의 자연수는 1이상 10000 이하의 수로 주어진다.
 * 
 * 입력으로 주어지는 K는 항상 M보다 작거나 같다.
 * 
 * 첫째줄에 동빈이의 큰수의 법칙에 따라 더해진 답을 출력한다.
 */
 prompt.get(["input", "numbers"], function(err, res){
     let answer = 0;
    const { input, numbers } = res;
    const inputSplit = input.split(' ');

    const M = Number(inputSplit[1]);
    const K = Number(inputSplit[2]);

    const numbersArray = numbers
        .split(' ')
        .map(nStr => Number(nStr))
        .sort((a, b) => a - b);

    const last = numbersArray[numbersArray.length - 1];
    const second = numbersArray[numbersArray.length - 2];

    let addCount = 0;
    for (let i = 0; i < M; i++) {
        if (addCount === K) {
            addCount = 0;
            answer += second;
        } else {
            addCount++;
            answer += last;
        }
    }
    console.log(answer);
});


