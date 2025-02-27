import { Todo as TodoType } from '../../types/Todo';
import { TodoInfo } from './TodoInfo';

type Props = {
  todos: TodoType[];
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

export const List = ({ todos, checked, setChecked }: Props) => {
  return todos.map(todo => (
    <div
      key={todo.id}
      data-cy="Todo"
      className={`todo ${todo.completed && 'completed'}`}
    >
      <TodoInfo todo={todo} checked={checked} setChecked={setChecked} />
    </div>
  ));
};
