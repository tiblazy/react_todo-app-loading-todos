import { Todo as TodoType } from '../../types/Todo';

type Props = {
  todo: TodoType;
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

export const TodoInfo = ({ todo, checked, setChecked }: Props) => (
  <>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label className="todo__status-label">
      <input
        data-cy="TodoStatus"
        type="checkbox"
        className="todo__status"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </label>
    <span data-cy="TodoTitle" className="todo__title">
      {todo.title}
    </span>
    {/* Remove button appears only on hover */}
    <button type="button" className="todo__remove" data-cy="TodoDelete">
      ×
    </button>
  </>
);
