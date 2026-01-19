import { render } from '@testing-library/react';
import { afterEach } from 'vitest';
import { test } from 'vitest';

afterEach(() => {
  // pass
});

test("jsx sanity", () => {
  render(<div>Hello</div>);
});
