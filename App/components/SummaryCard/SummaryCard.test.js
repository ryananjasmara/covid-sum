import React from 'react';
import renderer from 'react-test-renderer';
import SummaryCard from './index';

describe('SummaryCard Component', () => {
  const initialProps = {
    data: {
      confirmed: 3116398,
      deaths: 217153,
      recovered: 928658,
    },
  };

  test('renders with data', () => {
    const tree = renderer.create(<SummaryCard {...initialProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders without data', () => {
    const tree = renderer.create(<SummaryCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
