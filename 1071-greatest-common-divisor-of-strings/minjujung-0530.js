var gcdOfStrings = function(str1, str2) {
    // 두 문자열을 s1 + s2와 s2 + s1로 비교해 교환 가능성 확인
    if (str1 + str2 !== str2 + str1) {
        return ""; // 나눌 수 없는 경우
    }

    // 문자열 길이의 최대 공약수 구하기
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    const gcdLength = gcd(str1.length, str2.length);
    return str1.slice(0, gcdLength);
};