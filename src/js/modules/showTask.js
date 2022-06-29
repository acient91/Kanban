export const showTask = () => {
  const branchBtn = document.querySelectorAll('.board__start-branch');
  const tasksItem = document.querySelectorAll('.board__tasks');

  branchBtn.forEach((item, i) => {
    item.addEventListener('click', function () {
      if (this.classList.contains('board__start-branch--active')) {
        this.classList.remove('board__start-branch--active');
        tasksItem[i].classList.remove('board__tasks--active');
      } else {
        this.classList.add('board__start-branch--active');
        tasksItem[i].classList.add('board__tasks--active');
      }
    })
  })
}