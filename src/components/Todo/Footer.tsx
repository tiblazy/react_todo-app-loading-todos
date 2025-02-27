import { TodoFilter } from '../../types/Todo';

type Filter = {
  href: string;
  cy: string;
  text: TodoFilter;
};

const filters: Filter[] = [
  {
    href: '#/',
    cy: 'FilterLinkAll',
    text: 'All',
  },
  {
    href: '#/active',
    cy: 'FilterLinkActive',
    text: 'Active',
  },
  {
    href: '#/completed',
    cy: 'FilterLinkCompleted',
    text: 'Completed',
  },
];

type Props = {
  undone: number;

  selected: TodoFilter;
  setSelected: (selected: TodoFilter) => void;
};

export const Footer = ({ undone, selected, setSelected }: Props) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {undone} items left
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        {filters.map(item => (
          <a
            key={item.text}
            href={`${item.href}`}
            className={`filter__link ${item.text === selected && 'selected'}`}
            data-cy={`${item.cy}`}
            onClick={() => setSelected(item.text)}
          >
            {item.text}
          </a>
        ))}
      </nav>

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};
