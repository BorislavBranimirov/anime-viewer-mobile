import { ErrorBoundaryProps } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import PageTitle from './PageTitle';
import InterText from './StyledText';
import Button from './Button';

const ErrorBoundary = (props: ErrorBoundaryProps) => {
  return (
    <View style={styles.container}>
      <PageTitle label="Error" />
      <View style={styles.wrapper}>
        <InterText>Something went wrong. Try again in a few minutes.</InterText>
        <Button label="Retry" onPress={props.retry} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: '10%',
  },
  button: {
    marginVertical: 25,
  },
});

export default ErrorBoundary;
