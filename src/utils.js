const englishToUnicodeNumbers = ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'];

export const lineToTitle = ({ gurbani: { unicode }, transliteration }) => 
  `${unicode.split('॥')[0]} (${transliteration.split('|')[0]})`
;

export const findRahao = lines => lines.find(line => line.gurbani.unicode.includes('ਰਹਾਉ'));
export const findNthLine = nth => lines => lines.find(line => 
  line.gurbani.unicode.includes(`॥${englishToUnicodeNumbers[nth]}॥`)
);
export const findFirstLine = findNthLine(1);
export const findLastLine = lines => lines.slice(-1);

export const findShabadTitle = ({ lines, id, ang, sourceName }) => {
  const rahao = findRahao(lines.map(e => e.shabad));
  const lastLine = findLastLine(lines);

  if (rahao) {
    return lineToTitle(rahao);
  } else if (lastLine) {
    return lineToTitle(lastLine);
  } else { // Fallback
    return `Shabad ${id} ${sourceName} Ang ${ang}`;
  }
}

export const enterPressed = f => e => e.keyCode === 13 ? f(e) : null;
