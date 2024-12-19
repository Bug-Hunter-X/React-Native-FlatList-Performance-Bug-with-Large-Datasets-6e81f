// FlatListBugSolution.js
import React, { useMemo, memo } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const Item = memo(({ item }) => {
  return (
    <View style={styles.item}>
      <Text>{item.text}</Text>
    </View>
  );
});

const data = useMemo(() => {
  const arr = [];
  for (let i = 0; i < 10000; i++) {
    arr.push({ text: `Item ${i}` });
  }
  return arr;
}, []);

const FlatListSolution = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default FlatListSolution;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});