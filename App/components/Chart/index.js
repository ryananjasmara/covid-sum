/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {LineChart} from 'react-native-chart-kit';
import {thousandSeparator} from '../../helpers';
import WORDS from '../../configs/words';
import {ORANGE_ALT_1, ORANGE_ALT_2, ORANGE_ALT_3} from '../../configs/colors';

const Chart = ({data}) => {
  if (!data) {
    return null;
  }

  const [selectedCategories, setSelectedCategories] = React.useState(
    WORDS.CONFIRMED,
  );
  const [selectedCountries, setSelectedCountries] = React.useState(
    data.confirmed.locations[0].country,
  );
  const [countriesList, setCountriesList] = React.useState(
    data.confirmed.locations,
  );
  const [chartData, setChartData] = React.useState(data.confirmed.locations[0]);

  React.useEffect(() => {
    // setCountriesList(data[WORDS.CONFIRMED.toLowerCase()].locations);
    switch (selectedCategories) {
      case WORDS.CONFIRMED:
        setCountriesList(data.confirmed.locations);
        break;
      case WORDS.DEATHS:
        setCountriesList(data.deaths.locations);
        break;
      case WORDS.RECOVERED:
        setCountriesList(data.recovered.locations);
        break;
    }
  }, [selectedCategories]);

  React.useEffect(() => {
    const specificCountry = countriesList.find((item) => {
      let label = item.country;
      if (item.province) {
        label = `${item.country} - ${item.province}`;
      }
      return label === selectedCountries;
    });
    setChartData(specificCountry);
  }, [selectedCountries, countriesList]);

  function renderCategoriesPicker() {
    return (
      <Picker
        selectedValue={selectedCategories}
        style={styles.categoriesPicker}
        onValueChange={(itemValue) => {
          setSelectedCategories(itemValue);
        }}>
        <Picker.Item key label={WORDS.CONFIRMED} value={WORDS.CONFIRMED} />
        <Picker.Item label={WORDS.DEATHS} value={WORDS.DEATHS} />
        <Picker.Item label={WORDS.RECOVERED} value={WORDS.RECOVERED} />
      </Picker>
    );
  }

  function renderCountryPicker() {
    return (
      <Picker
        selectedValue={selectedCountries}
        style={styles.categoriesPicker}
        onValueChange={(itemValue) => {
          setSelectedCountries(itemValue);
        }}>
        {countriesList.map((item, index) => {
          let label = item.country;
          if (item.province) {
            label = `${item.country} - ${item.province}`;
          }
          return <Picker.Item key={index} label={label} value={label} />;
        })}
      </Picker>
    );
  }

  function getLabelData(chartData) {
    const label = Object.keys(chartData.history);
    label.reverse();
    const slicedLabel = label.slice(0, 5);
    slicedLabel.reverse();
    return slicedLabel;
  }

  function getLabelValue(chartData) {
    const value = Object.values(chartData.history);
    value.reverse();
    const slicedValue = value.slice(0, 5);
    slicedValue.reverse();
    return slicedValue;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitleText}>{WORDS.CHART_HEADER}</Text>
      </View>
      <View style={styles.pickerContainer}>
        {renderCountryPicker()}
        {renderCategoriesPicker()}
      </View>
      <Text style={styles.latestCountText}>{`Total ${thousandSeparator(
        chartData.latest,
      )} ${selectedCategories} case's in ${selectedCountries}`}</Text>
      <LineChart
        data={{
          labels: getLabelData(chartData),
          datasets: [
            {
              data: getLabelValue(chartData),
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: ORANGE_ALT_1,
          backgroundGradientFrom: ORANGE_ALT_2,
          backgroundGradientTo: ORANGE_ALT_3,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: styles.chartConfigStyle,
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: ORANGE_ALT_3,
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  chart: {
    borderRadius: 5,
    margin: 10,
  },
  chartConfigStyle: {
    borderRadius: 16,
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoriesPicker: {
    height: 50,
    width: 150,
  },
  latestCountText: {
    fontSize: 12,
  },
});

export default Chart;
