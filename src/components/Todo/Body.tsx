import { Todo, TodoFilter } from '../../types/Todo';
import { List } from './List';

type Props = {
  todos: Todo[];

  selected: TodoFilter;
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

export const Body = ({ todos, selected, checked, setChecked }: Props) => {
  let filter = todos;

  switch (selected) {
    case 'Active':
      filter = todos.filter(todo => !todo.completed);
      break;

    case 'Completed':
      filter = todos.filter(todo => todo.completed);
      break;

    default:
      break;
  }

  {
    /* This is a completed todo */
  }

  return <List todos={filter} checked={checked} setChecked={setChecked} />;
};
