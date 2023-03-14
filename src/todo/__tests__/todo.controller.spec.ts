import { TodoController } from '../todo.controller';
import { TodoService } from '../todo.service';

describe('todoController', () => {
  let todoController: TodoController;
  let todoService: TodoService;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    todoService = new TodoService({});
    todoController = new TodoController(todoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getTodos', () => {
    it('should get all todos', async () => {
      const mockedResult = [
        { todo: 'todo1', isCompleted: false },
        { todo: 'todo2', isCompleted: false },
      ];
      const getTodosSpy = jest
        .spyOn(todoService, 'getTodos')
        .mockResolvedValue(mockedResult);

      const result = await todoController.getTodos();
      console.log(getTodosSpy);
      expect(result).toStrictEqual(mockedResult);
      expect(getTodosSpy).toHaveBeenCalledTimes(1);
      expect(getTodosSpy).toHaveBeenNthCalledWith(1);
    });
  });
});
