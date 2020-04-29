import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import WORDS from '../../configs/words';
import {thousandSeparator} from '../../helpers';
import {GRAY, ORANGE, RED, GREEN} from '../../configs/colors';
import {MoodBad, MoodGood, SentimentDissatisfied} from '../../assets/icons';

const SummaryCard = ({data}) => {
  const {confirmed, deaths, recovered} = data;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.categoriesTitle}>{WORDS.CONFIRMED}</Text>
        <SentimentDissatisfied />
        <Text style={styles.categoriesValues(ORANGE)}>
          {thousandSeparator(confirmed)}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.categoriesTitle}>{WORDS.DEATHS}</Text>
        <MoodBad />
        <Text style={styles.categoriesValues(RED)}>
          {thousandSeparator(deaths)}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.categoriesTitle}>{WORDS.RECOVERED}</Text>
        <MoodGood />
        <Text style={styles.categoriesValues(GREEN)}>
          {thousandSeparator(recovered)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  card: {
    padding: 16,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoriesTitle: {
    color: GRAY,
  },
  categoriesValues: (color) => {
    return {
      color,
    };
  },
});

export default SummaryCard;
