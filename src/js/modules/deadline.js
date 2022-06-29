export const deadline = () => {
  const deadLineMonth = document.querySelectorAll('.board__time-end--month');
  let deadLineDay = document.querySelectorAll('.board__time-end--day');
  const deadLineBox = document.querySelectorAll('.board__time-end');

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;

  deadLineMonth.forEach((item, i) => {

    if (item.textContent == 'января') {
      let monthNum = 1;
      let month = date.getMonth() + 1;
      if (day > +deadLineDay[i].textContent || month > monthNum) {
        deadLineBox[i].classList.add('board__time-end--orange')
      }
    } else if (item.textContent == 'февраля') {
      let monthNum = 2;
      let month = date.getMonth() + 1;
      if (day > +deadLineDay[i].textContent || month > monthNum) {
        deadLineBox[i].classList.add('board__time-end--orange')
      }
    } else if (item.textContent == 'марта') {
      let monthNum = 3;
      let month = date.getMonth() + 1;
      if (day > +deadLineDay[i].textContent || month > monthNum) {
        deadLineBox[i].classList.add('board__time-end--orange')
      }
    } else if (item.textContent == 'апреля') {
      let monthNum = 4;
      let month = date.getMonth() + 1;
      if (day > +deadLineDay[i].textContent || month > monthNum) {
        deadLineBox[i].classList.add('board__time-end--orange')
      }
    } else if (item.textContent == 'мая') {
      let monthNum = 5;
      let month = date.getMonth() + 1;
      if (day > +deadLineDay[i].textContent || month > monthNum) {
        deadLineBox[i].classList.add('board__time-end--orange')
      }
    } else if (item.textContent == 'июня') {
      let monthNum = 6;
      let month = date.getMonth() + 1;
      if (day > +deadLineDay[i].textContent || month > monthNum) {
        deadLineBox[i].classList.add('board__time-end--orange')
      }
    } else if (item.textContent == 'июля') {
      let monthNum = 7;
      let month = date.getMonth() + 1;
      if (day > +deadLineDay[i].textContent || month > monthNum) {
        deadLineBox[i].classList.add('board__time-end--orange')
      }
    } else if (item.textContent == 'августа') {
      let monthNum = 8;
      let month = date.getMonth() + 1;
      if (day > +deadLineDay[i].textContent || month > monthNum) {
        deadLineBox[i].classList.add('board__time-end--orange')
      }
    } else if (item.textContent == 'сентября') {
      let monthNum = 9;
      let month = date.getMonth() + 1;
      if (day > +deadLineDay[i].textContent || month > monthNum) {
        deadLineBox[i].classList.add('board__time-end--orange')
      }
    } else if (item.textContent == 'октября') {
      let monthNum = 10;
      let month = date.getMonth() + 1;
      if (day > +deadLineDay[i].textContent || month > monthNum) {
        deadLineBox[i].classList.add('board__time-end--orange')
      }
    } else if (item.textContent == 'ноября') {
      let monthNum = 11;
      let month = date.getMonth() + 1;
      if (day > +deadLineDay[i].textContent || month > monthNum) {
        deadLineBox[i].classList.add('board__time-end--orange')
      }
    } else if (item.textContent == 'декабря') {
      let monthNum = 12;
      let month = date.getMonth() + 1;
      if (day > +deadLineDay[i].textContent || month > monthNum) {
        deadLineBox[i].classList.add('board__time-end--orange')
      }
    }
  })
}