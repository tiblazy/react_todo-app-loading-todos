import { Todo as TodoType } from '../../types/Todo';

type Props = {
  title: string;
  setTitle: (title: string) => void;
  todos: TodoType[];
  setChecked: (checked: boolean) => void;
};

export const Header = ({ title, setTitle, todos, setChecked }: Props) => {
  return (
    <header className="todoapp__header">
      {/* this button should have `active` class only if all todos are completed */}
      <button
        type="button"
        className={`todoapp__toggle-all ${todos.every(todo => todo.completed) && 'active'}`}
        data-cy="ToggleAllButton"
        onClick={() => setChecked(todos.every(todo => todo.completed))}
      />

      {/* Add a todo on form submit */}
      <form>
        <input
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </form>
    </header>
  );
};
