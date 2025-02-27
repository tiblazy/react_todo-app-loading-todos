/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Error } from './components/Error';
import { Loader } from './components/Loader';
import { Todo } from './components/Todo';
import { ErrorType } from './types/ErrorType';
import { TodoFilter, Todo as TodoType } from './types/Todo';
import { client } from './utils/fetchClient';

export const App: React.FC = () => {
  const [data, setData] = useState<TodoType[] | null>(null);
  const [error, setError] = useState<ErrorType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [title, setTitle] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const [selected, setSelected] = useState<TodoFilter>('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setData(null);
        setError(null);

        const response = await client.get<TodoType[]>('/todos');

        setData(response.slice(0, 20));
      } catch (e) {
        if (e) {
          setError('Unable to load todos');

          // setError('Unable to add a todo');
          // setError('Unable to delete a todo');
          // setError('Unable to update a todo');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (title.trim() === '') {
  //   setError('Title should not be empty');
  // }

  // if (!USER_ID) {
  //   return <UserWarning />;
  // }

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      {loading && <Loader />}

      {!loading && !error && data?.length > 0 && (
        <div className="todoapp__content">
          <Todo
            title={title}
            setTitle={setTitle}
            todos={data!}
            selected={selected}
            setSelected={setSelected}
            checked={checked}
            setChecked={setChecked}
          />
        </div>
      )}

      <Error error={error} setError={setError} />
    </div>
  );
};
