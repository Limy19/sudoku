const fs = require('fs');
const { EOL } = require('os');
/**
 * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
 */
// fs.readFileSync(`${__dirname}/puzzles.txt`, 'utf-8');
function read() {
  const puz = fs
    .readFileSync(`${__dirname}/puzzles.txt`, 'utf-8')
    .trim()
    .split(EOL)
    .map((el) => el.split(''));
  // console.log(puz);
  let puzRes = puz.map((el) => {
    let res = [];
    for (let i = 0; i < el.length; i += 9) {
      res.push(el.slice(i, i + 9));
    }
    return res;
  });
  return puzRes;
}

read();
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */
function solve() {
  const sudoku = read();
  const sud1 = sudoku[0];

  sud1.map((el, i) => {
    const number = {}; 
    if (el[i] !== '-') {
      number[i,];
    }
  });
}
solve();

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
// asddsd
