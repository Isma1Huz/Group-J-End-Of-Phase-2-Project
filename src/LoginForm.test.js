import { render, screen } from '@testing-library/react';
import LoginForm from './components/LoginForm';

test('renders the login form', () => {
  render(<LoginForm />);
});
