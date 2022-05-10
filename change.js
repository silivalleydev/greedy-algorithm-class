/**
 * 거스름돈 문제
 * 당신은 음식점의 계산을 도와주는 점원이다. 
 * 카운터에는 거스름돈으로 사용할 500원, 100원, 50원, 10원짜리 동전이 무한히 존재한다고 가정한다.
 * 손님한테 거슬러줘야할 돈이 N원일 때
 * 거슬러줘야 할 동전의 최소 개수를 구하라, 단, 거슬러 줘야 할 돈 N은 항상 10의 배수이다.
 */
function changeAnswer(change) {
    let answer = 0;
    console.log("거스름돈 => ", change)
    let left = change;

    if (left >= 500) {
        const division = Math.floor(left / 500);
        left -= division * 500;
        answer += division;
    } 
    if (left >= 500) {
        const division = Math.floor(left / 500);
        left -= division * 500;
        answer += division;
    } 
    if (left >= 100) {
        const division = Math.floor(left / 100);
        left -= division * 100;
        answer += division;
    } 
    if (left >= 50) {
        const division = Math.floor(left / 50);
        left -= division * 50;
        answer += division;
    } 
    if (left >= 10) {
        const division = Math.floor(left / 10);
        left -= division * 10;
        answer += division;
    } 

    return answer
}

console.log('총 코인', changeAnswer(1250));
console.log('총 코인', changeAnswer(1000));