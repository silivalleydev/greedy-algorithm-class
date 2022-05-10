/**
 * 거스름돈 문제
 * 당신은 음식점의 계산을 도와주는 점원이다. 
 * 카운터에는 거스름돈으로 사용할 500원, 100원, 50원, 10원짜리 동전이 무한히 존재한다고 가정한다.
 * 손님한테 거슬러줘야할 돈이 N원일 때
 * 거슬러줘야 할 동전의 최소 개수를 구하라, 단, 거슬러 줘야 할 돈 N은 항상 10의 배수이다.
 * 
 * 동전을 큰 단위부터 거슬러주면 최소 개수가 나온다.
 * 
 * 이 문제의 경우 가지고 있는 동전 중에서 큰 단위가 항상 작은 단위의 배수이라는 것이다.
 * 
 */
function changeAnswer(change) {
    let answer = 0;
    console.log("거스름돈 => ", change)
    let left = change;
    const coin = [500, 100, 50, 10];

    // 이때, 화폐의 종류를 N이라고 할 때 이 알고리즘의 시간 복잡도는 O(N)이 된다.
    for (let i = 0; i < coin.length; i++) {
        // 동전 별로 몇개로 거슬러줄 수 있는지 계산한다
        const coinCount = Math.floor(left / coin[i]);
        // 동전을 거슬러준 후 남은 금액을 나머지로 계산한다
        left %= coin[i];
        // 정답에 거슬러준 코인의 개수를 더해준다.
        answer += coinCount;
    }
    return answer
}

console.log('총 코인', changeAnswer(1260));