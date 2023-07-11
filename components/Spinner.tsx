import { StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const Spinner = () => {
  return (
    <View style={styles.spinnerWrapper}>
      <FontAwesome name="spinner" size={48} color={Colors.accent} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
