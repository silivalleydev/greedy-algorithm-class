/**
 * 거스름돈 문제
 * 당신은 음식점의 계산을 도와주는 점원이다. 
 * 카운터에는 거스름돈으로 사용할 500원, 100원, 50원, 10원짜리 동전이 무한히 존재한다고 가정한다.
 * 손님한테 거슬러줘야할 돈이 N원일 때
 * 거슬러줘야 할 동전의 최소 개수를 구하라, 단, 거슬러 줘야 할 돈 N은 항상 10의 배수이다.
 * 
 * 동전을 큰 단위부터 거슬러주면 최소 개수가 나온다.
 */
// 1260원이라는 가정하에
function changeAnswer(change) {
    let answer = 0;
    console.log("거스름돈 => ", change)
    let left = change;

    // 500원 2개 => 남은돈 260원
    if (left >= 500) {
        const division = Math.floor(left / 500);
        left -= division * 500;
        answer += division;
    } 
    // 100원 2개 => 남은돈 60원
    if (left >= 100) {
        const division = Math.floor(left / 100);
        left -= division * 100;
        answer += division;
    } 
    // 50원 1개 => 남은돈 10원
    if (left >= 50) {
        const division = Math.floor(left / 50);
        left -= division * 50;
        answer += division;
    } 
    // 10원 1개 => 남은돈 없음
    if (left >= 10) {
        const division = Math.floor(left / 10);
        left -= division * 10;
        answer += division;
    } 

    // 총 6개
    return answer
}

console.log('총 코인', changeAnswer(1260));
console.log('총 코인', changeAnswer(1000));