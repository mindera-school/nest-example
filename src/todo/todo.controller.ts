import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from './dtos/createTodoDto';
import { Todo } from './schema/todo.schema';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/todo')
  async getTodos(): Promise<Todo[]> {
    this.todoService.getTodos();
    this.todoService.getTodos();
    this.todoService.getTodos();

    return await this.todoService.getTodos();
  }

  @Post('/todo')
  async createTodos(@Body() createTodoDto: CreateTodoDto) {
    return await this.todoService.createTodo(createTodoDto);
  }
}
