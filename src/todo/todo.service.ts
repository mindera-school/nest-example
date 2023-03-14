import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dtos/createTodoDto';
import { Todo, TodoDocument } from './schema/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async getTodos(): Promise<Todo[]> {
    return this.todoModel.find();
  }

  async createTodo(createTodoDto: CreateTodoDto) {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }
}
