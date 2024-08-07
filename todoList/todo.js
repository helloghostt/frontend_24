var todoItems; //any로 했다가 Todo[]로 바꿈
//API
function fetchTodoItems() {
    var todos = [
        { id: 1, title: "안녕", done: false },
        { id: 2, title: "타입", done: false },
        { id: 3, title: "스크립트", done: false },
    ];
    return todos;
}
//CRUD methods
function fetchTodos() {
    var todos = fetchTodoItems();
    return todos;
}
function addTodo(todo) {
    todoItems.push(todo);
}
function updateTodo(index) {
    todoItems.splice(index, 1);
}
function deleteTodo(index) {
    todoItems.splice(index, 1);
}
function completeTodo(index, todo) {
    //1. Todo 타입 변수의 첫번째 객체 전체를 바꿈
    todo.done = true;
    todoItems.splice(index, 1, todo);
    //2. Todo타입 변수의 첫 번째 배열의 요소 중 done 속성만 바꿈
    todoItems[index - 1].done = true;
}
function logFirstTodo() {
    return todoItems[0];
}
function showCompleted() {
    return todoItems.filter(function (item) { return item.done; });
}
function log() {
    console.log(todoItems);
}
function addTwoTodoItems() {
    var item1 = {
        id: 4,
        title: '아이템 4',
        done: false,
    };
    addTodo(item1);
    addTodo({
        id: 5,
        title: '아이템 5',
        done: true,
    });
}
todoItems = fetchTodoItems();
addTwoTodoItems();
log();
// [
//     { id: 1, title: '안녕', done: false },
//     { id: 2, title: '타입', done: false },
//     { id: 3, title: '스크립트', done: false },
//     { id: 4, title: '아이템 4', done: false },
//     { id: 5, title: '아이템 5', done: true }
//   ]
completeTodo(1, todoItems[1]);
log();
// [
//     { id: 1, title: '안녕', done: false },
//     { id: 2, title: '타입', done: true },
//     { id: 3, title: '스크립트', done: false },
//     { id: 4, title: '아이템 4', done: false },
//     { id: 5, title: '아이템 5', done: true }
//   ]
var completedTodoList = showCompleted();
console.log(completedTodoList);
// [
//     { id: 2, title: '타입', done: true },
//     { id: 5, title: '아이템 5', done: true }
//   ]
deleteTodo(3); //0,1,2,'3'번째 삭제
log();
// [
//     { id: 1, title: '안녕', done: false },
//     { id: 2, title: '타입', done: true },
//     { id: 3, title: '스크립트', done: false },
//     { id: 5, title: '아이템 5', done: true }
//   ]
