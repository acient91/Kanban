export const dragDrop = () => {
  let draggedItem = null;

  function dragNdrop() {
    const boardColumns = document.querySelectorAll('.board__column');
    const boardItem = document.querySelectorAll('.board__item');

    for (let i = 0; i < boardItem.length; i++) {
      const item = boardItem[i];

      item.addEventListener('dragstart', () => {
        draggedItem = item;
        setTimeout(() => {
          item.style.display = 'none';
        }, 0)
      })

      item.addEventListener('dragend', () => {
        setTimeout(() => {
          item.style.display = 'block';
          draggedItem = null
        }, 0)
      })
    }

    for (let j = 0; j < boardColumns.length; j++) {
      const list = boardColumns[j];

      list.addEventListener('dragover', e => e.preventDefault());

      list.addEventListener('drop', function (e) {
        this.append(draggedItem)
      })
    }
  }

  dragNdrop()
}