import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Spinner from './App/components/Spinner';
import Chart from './App/components/Chart';
import WORDS from './App/configs/words';
import {GRAY, BLUE} from './App/configs/colors';
import {openLinkInOtherApp} from './App/helpers';
import SummaryCard from './App/components/SummaryCard';

const App = () => {
  const [isFetching, setFetching] = React.useState(false);
  const [isRefreshing, setRefreshing] = React.useState(false);
  const [statisticData, setStatisticData] = React.useState();

  React.useEffect(() => {
    getAllCategories();
  }, []);

  async function getAllCategories() {
    try {
      setFetching(true);
      const response = await fetch(
        'https://coronavirus-tracker-api.herokuapp.com/all',
      );
      const json = await response.json();
      setStatisticData(json);
      setFetching(false);
    } catch (error) {
      Alert.alert('Something went wrong', 'Sorry, fetch from api failed', [
        {text: 'Try Again', onPress: () => getAllCategories()},
      ]);
    }
  }

  function onSourcePressed() {
    const url = 'https://coronavirus-tracker-api.herokuapp.com';
    openLinkInOtherApp(url);
  }

  if (statisticData && !isFetching) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            color="blue"
            tintColor="blue"
            refreshing={isRefreshing}
            onRefresh={() => getAllCategories()}
          />
        }>
        <View style={styles.app}>
          {/* App Name / Title */}
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitleText}>{WORDS.HEADER_TITLE}</Text>
          </View>
          {/* App Description */}
          <View style={styles.appDescriptionContainer}>
            <Text style={styles.appDescriptionText}>
              {WORDS.APP_DESCRIPTION}
            </Text>
            <Text style={styles.appSourceText}>{WORDS.DATASOURCE}</Text>
            <TouchableOpacity onPress={() => onSourcePressed()}>
              <Text style={styles.appSourceLink}>{WORDS.APP_SOURCE_LINK}</Text>
            </TouchableOpacity>
          </View>
          {/* SummaryCard */}
          <View style={styles.summaryCardContainer}>
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitleText}>
                {WORDS.SUMMARY_CARD_HEADER}
              </Text>
            </View>
            <SummaryCard data={statisticData.latest} />
          </View>
          {/* Chart */}
          <Chart data={statisticData} />
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.spinner}>
        <Spinner />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  app: {
    marginTop: 10,
    marginHorizontal: 18,
  },
  headerTitleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  appDescriptionContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#d9d9d9',
  },
  appDescriptionText: {
    color: GRAY,
    textAlign: 'center',
    marginBottom: 10,
  },
  appSourceText: {
    color: GRAY,
    textAlign: 'center',
  },
  appSourceLink: {
    color: BLUE,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  summaryCardContainer: {
    marginBottom: 10,
  },
});

export default App;
