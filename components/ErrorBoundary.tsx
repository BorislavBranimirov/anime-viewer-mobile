import { ErrorBoundaryProps } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import PageTitle from './PageTitle';
import InterText from './StyledText';
import Button from './Button';

const ErrorBoundary = (props: ErrorBoundaryProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <PageTitle label="Error" />
        <InterText>Something went wrong. Try again in a few minutes.</InterText>
        <Button label="Retry" onPress={props.retry} style={styles.button} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    overflow: 'scroll',
  },
  wrapper: {
    width: '80%',
    minHeight: '100%',
    marginHorizontal: 'auto',
  },
  button: {
    marginVertical: 25,
  },
});

export default ErrorBoundary;
