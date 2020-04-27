import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SummaryCard from './App/screens/Home/SummaryCard';

const App = () => {
  const [isFetching, setFetching] = React.useState(true);
  const [summaryStatistic, setSummaryStatistic] = React.useState({});

  React.useEffect(() => {
    getAllCategories();
  }, []);

  async function getAllCategories() {
    try {
      const response = await fetch(
        'https://coronavirus-tracker-api.herokuapp.com/all',
      );
      const json = await response.json();
      setFetching(false);
      setSummaryStatistic(json.latest);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.header}>
      <SummaryCard data={summaryStatistic} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 18,
  },
});

export default App;
