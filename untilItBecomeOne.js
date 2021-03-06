const prompt = require("prompt");
prompt.start();
/**
 * 어떠한 수 N이 1이 될 때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행하려고한다.
 * 단, 두번째 연산은 N이 K로 나누어 떨어질 때만 선택할 수 있다.
 * 
 * 1. N에서 1을 뺀다
 * 2. N을 K로 나눈다.
 * 
 * 예를 들어 N이 17, K가 4라고 가정하면 이때 1번의 과정을 한번 수행하면 N은 16이 되고,
 * 이후 2번과정을 2번 수행하면 N은 1이된다.
 * 결과적으로 전체 과정을 수행한 횟수는 3이된다.
 * 
 * N과 K가 주어질때 N이 1이 될때까지 1번 혹은 2번의 과정을 수행해야하는 최소 횟수를 구하는 프로그램을 작성하시오
 * 
 * 입력: 25 5
 * 답: 2
 */
prompt.get(["input"], function(err, res){
    let answer = 0;
    const { input } = res;
    function spaceStrToArray (str) {
        return str.split(" ");
    }
    const splitInput = spaceStrToArray(input);
    let N = Number(splitInput[0]);
    const K = Number(splitInput[1]);

    // N이 1이 아니면 반복
    while(N !== 1) {
        // N을 K로 나눈 나머지가 0이면 N을 K로 나눈다.
        if (N % K === 0) {
            N /= K;
        } else {
            // 위조건이 아니면 1번 조건인 -1하는 것으로 처리
            N -= 1;
        }
        // 한번 수행할때마다 +1 씩 해준다
        answer++;
    }

    console.log('answer??', answer)
});