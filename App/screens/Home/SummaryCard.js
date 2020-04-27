import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CONFIRMED, DEATHS, RECOVERED} from '../../configs/words';

const SummaryCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.categoriesTitle}>{CONFIRMED}</Text>
        <Text style={styles.categoriesValues('orange')}>10000</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.categoriesTitle}>{CONFIRMED}</Text>
        <Text style={styles.categoriesValues('orange')}>10000</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.categoriesTitle}>{CONFIRMED}</Text>
        <Text style={styles.categoriesValues('orange')}>10000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    padding: 16,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesTitle: {
    color: '#616161',
  },
  categoriesValues: (color) => {
    return {
      color,
    };
  },
});

export default SummaryCard;
