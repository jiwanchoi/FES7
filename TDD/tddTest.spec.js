
//테스트 유닛들을 묶어주고, 전체적인 설명를 제공하는 함수입니다.
describe('자스민 테스트입니다!',()=>{
    if('1을 더해주는 함수입니다.',()=>{
        const num = 30;
        //expect, 기대식
        expect(plusOne(30)).toBe(num +1);
    });
});