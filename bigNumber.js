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
 * 
 * 5 8 3 로 첫번째 입력
 * 2 4 5 4 6 으로 두번쨰 입력
 * 답은 46
 */
 prompt.get(["input", "numbers"], function(err, res){
     let answer = 0;
     let answer2 = 0;
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
    // 아래의 경우 M을 입력하면 M번 연산하기 때문에 시간 복잡도는 O(N)이다.
    for (let i = 0; i < M; i++) {
        if (addCount === K) {
            addCount = 0;
            answer += second;
        } else {
            addCount++;
            answer += last;
        }
    }

    /**
     * 위의 경우를 줄이는 방법이 있는데 <수열의 규칙>을 찾으면된다.
     * 예를들어, 위의 예제의 경우 제일 큰수는 6이고 두번쨰로 큰수는 5이다.
     * 
     * 그리고 8번을 더할거고 반복제한이 3이라면,
     * 6 + 6 + 6 + 5 / 6 + 6 + 6 + 5 이렇게된다.
     * 따라서 첫번째 수열의 곱하기 2를 하면된다.
     * 
     * 아래처럼하면 한번의 연산으로 끝나기 때문에 시간복잡도는 O(1)이 된다.
     */
    answer2 = ((last * K) + second) * Math.ceil(M / (K + 1)) + (M % (K + 1) * last)

    console.log('O(N) =>', answer);
    console.log('O(1) =>', answer2);
});


