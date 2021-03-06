import React from 'react';
import renderer from 'react-test-renderer';
import Chart from './index';

describe('Chart Component', () => {
  const dummies = {
    country: 'Afghanistan',
    country_code: 'AF',
    province: '',
    coordinates: {
      lat: '33.0',
      long: '65.0',
    },
    history: {
      '1/22/20': 0,
      '1/23/20': 0,
      '1/24/20': 0,
      '1/25/20': 0,
      '1/26/20': 0,
      '1/27/20': 0,
      '1/28/20': 0,
      '1/29/20': 0,
      '1/30/20': 0,
      '1/31/20': 0,
      '2/1/20': 0,
      '2/2/20': 0,
      '2/3/20': 0,
      '2/4/20': 0,
      '2/5/20': 0,
      '2/6/20': 0,
      '2/7/20': 0,
      '2/8/20': 0,
      '2/9/20': 0,
      '2/10/20': 0,
      '2/11/20': 0,
      '2/12/20': 0,
      '2/13/20': 0,
      '2/14/20': 0,
      '2/15/20': 0,
      '2/16/20': 0,
      '2/17/20': 0,
      '2/18/20': 0,
      '2/19/20': 0,
      '2/20/20': 0,
      '2/21/20': 0,
      '2/22/20': 0,
      '2/23/20': 0,
      '2/24/20': 1,
      '2/25/20': 1,
      '2/26/20': 1,
      '2/27/20': 1,
      '2/28/20': 1,
      '2/29/20': 1,
      '3/1/20': 1,
      '3/2/20': 1,
      '3/3/20': 1,
      '3/4/20': 1,
      '3/5/20': 1,
      '3/6/20': 1,
      '3/7/20': 1,
      '3/8/20': 4,
      '3/9/20': 4,
      '3/10/20': 5,
      '3/11/20': 7,
      '3/12/20': 7,
      '3/13/20': 7,
      '3/14/20': 11,
      '3/15/20': 16,
      '3/16/20': 21,
      '3/17/20': 22,
      '3/18/20': 22,
      '3/19/20': 22,
      '3/20/20': 24,
      '3/21/20': 24,
      '3/22/20': 40,
      '3/23/20': 40,
      '3/24/20': 74,
      '3/25/20': 84,
      '3/26/20': 94,
      '3/27/20': 110,
      '3/28/20': 110,
      '3/29/20': 120,
      '3/30/20': 170,
      '3/31/20': 174,
      '4/1/20': 237,
      '4/2/20': 273,
      '4/3/20': 281,
      '4/4/20': 299,
      '4/5/20': 349,
      '4/6/20': 367,
      '4/7/20': 423,
      '4/8/20': 444,
      '4/9/20': 484,
      '4/10/20': 521,
      '4/11/20': 555,
      '4/12/20': 607,
      '4/13/20': 665,
      '4/14/20': 714,
      '4/15/20': 784,
      '4/16/20': 840,
      '4/17/20': 906,
      '4/18/20': 933,
      '4/19/20': 996,
      '4/20/20': 1026,
      '4/21/20': 1092,
      '4/22/20': 1176,
      '4/23/20': 1279,
      '4/24/20': 1351,
      '4/25/20': 1463,
      '4/26/20': 1531,
      '4/27/20': 1703,
      '4/28/20': 1828,
    },
    latest: 1828,
  };
  const initialProps = {
    data: {
      confirmed: {
        locations: [dummies],
      },
      deaths: {
        locations: [dummies],
      },
      recovered: {
        locations: [dummies],
      },
    },
  };

  test('renders with data', () => {
    const tree = renderer.create(<Chart {...initialProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders without data', () => {
    const tree = renderer.create(<Chart />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
