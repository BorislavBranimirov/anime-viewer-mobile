import { StyleSheet } from 'react-native';
import InterText from './StyledText';

const PageTitle = ({ label }: { label: string }) => {
  return <InterText style={styles.title}>{label}</InterText>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginVertical: 25,
  },
});

export default PageTitle;
