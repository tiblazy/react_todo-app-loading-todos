import { TodoFilter, Todo as TodoType } from '../../types/Todo';
import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  title: string;
  setTitle: (title: string) => void;

  selected: TodoFilter;
  setSelected: (selected: TodoFilter) => void;

  checked: boolean;
  setChecked: (checked: boolean) => void;

  todos: TodoType[];
};

export const Todo = ({
  title,
  setTitle,
  todos,
  selected,
  setSelected,
  checked,
  setChecked,
}: Props) => {
  const undone = todos.filter(todo => !todo.completed).length;

  return (
    <>
      <Header
        todos={todos}
        title={title}
        setTitle={setTitle}
        setChecked={setChecked}
      />

      <section className="todoapp__main" data-cy="TodoList">
        <Body
          todos={todos}
          selected={selected}
          checked={checked}
          setChecked={setChecked}
        />
      </section>

      {todos.length > 0 && (
        <Footer undone={undone} selected={selected} setSelected={setSelected} />
      )}
    </>
  );
};
