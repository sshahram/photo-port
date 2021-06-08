import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

describe('About component', () => {
    // renders About test
    // First test
    // The first test will be the baseline to verify that the component is rendering.
    it('renders', () => {
        render(<About />);
    });

    // Second test
})