export class Todo {
  postId: number;
  todoTitle: string;
  todoText: string;
  start: number;
  constructor(data: any) {
    this.postId = data.postId;
    this.todoTitle = data.todoTitle;
    this.todoText = data.todoText;
    this.start = data.start;
  }
}