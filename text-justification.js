/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
 var fullJustify = function(words, maxWidth) {
    const res = [];
    let lineWords = [];
    let width = maxWidth;
    
    for (let word of words) {
        if (width - lineWords.length >= word.length) {
            lineWords.push(word);
            width -= word.length;
        } else {
            addLineToResults(res, lineWords, width);
            lineWords = [word];
            width = maxWidth - word.length;
        }
    }
    
    if (lineWords.length) {
        let lastLine = lineWords.join(' ');
        lastLine += ' '.repeat(maxWidth - lastLine.length);
        res.push(lastLine);
    }
    
    return res;
};

const addLineToResults = (res, lineWords, width) => {
    if (lineWords.length === 1) {
        const line = lineWords[0] + ' '.repeat(width);
        res.push(line);
        return;
    }
    
    const end = lineWords.length - 1;
    let index = 0;
    while (width > 0) {
        lineWords[index] += ' ';
        index = (index + 1) % end;
        width--;
    }
    
    res.push(lineWords.join(''));
}