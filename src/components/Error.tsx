import { ErrorType } from '../types/ErrorType';

type Props = {
  error: ErrorType | null;
  setError: (error: ErrorType | null) => void;
};

export const Error = ({ error, setError }: Props) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={`notification is-danger is-light has-text-weight-normal ${!error && 'hidden'}`}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => setError(null)}
      />
      {error}
    </div>
  );
};
