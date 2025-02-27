import { ErrorType } from '../types/ErrorType';

type Props = {
  error: ErrorType | null;
};

export const Error = ({ error }: Props) => (
  <div
    data-cy="ErrorNotification"
    className={`notification is-danger is-light has-text-weight-normal ${!error && 'hidden'}`}
  >
    <button data-cy="HideErrorButton" type="button" className="delete" />
    {error}
  </div>
);
