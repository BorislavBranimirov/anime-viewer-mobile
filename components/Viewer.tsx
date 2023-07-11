import { StyleSheet, View } from 'react-native';
import { Button } from './Button';

export const Viewer = () => {
  return (
    <>
      <View style={styles.navigationWrapper}>
        <Button label="Previous" />
        <Button label="Next" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navigationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
