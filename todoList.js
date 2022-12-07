const allTodo = document.getElementsByClassName("todo");

function finish() {
  // 아래 코드에서 알림창 문구를 수정할 수 있어요!
  alert("대표님 감사합니다 ^_^");
}

for (let i = 0; i < allTodo.length; i++) {
  allTodo[i].addEventListener("click", finish);
}
