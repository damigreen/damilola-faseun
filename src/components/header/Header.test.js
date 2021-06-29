import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header';

test('render contents', () => {
  const headerName = 'Damilola Faseun'
  const headerTitle = 'Full Stack Web Developer'
  const headerDescription = 'Engineering top-notch custom website with a mix of creative ideas and digital technology'

  const component = render(<Header />);

  expect(component.container).toHavaText(headerName)
})
