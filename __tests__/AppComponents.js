import React from 'react';
import Header from '../src/components/Header';
import {render} from '@testing-library/react-native';

let activeHeader;
const testContent = 'This is a TEST Header';

describe('Header Component', () => {
  describe('<Header>', () => {
    beforeEach(() => {
      // Render the component
      activeHeader = render(<Header content={testContent} />);
    });

    it('renders successfully', () => {
      expect(activeHeader).toBeDefined();
    });

    it('Outputs the correct text', () => {
      expect(activeHeader.getByText(testContent)).toBeTruthy();
    });
  });
});
