function halvesAreAlike(s: string): boolean {
    function isVowel(char: string): boolean {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        return vowels.indexOf(char) !== -1;
    }
    interface helper {
        index: number,
        vowels: number,
    }
    const defaultOptions = {
        vowels: 0,
    }
    const left: helper = { ...defaultOptions, index: 0 };
    const right: helper = { ...defaultOptions, index: s.length - 1 };
    while (left.index < right.index) {
        if (isVowel(s[left.index])) {
            left.vowels++
        }
        if (isVowel(s[right.index])) {
            right.vowels++
        }
        left.index++
        right.index--;
    }
    return left.vowels === right.vowels;
};