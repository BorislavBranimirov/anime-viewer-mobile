import { StyleSheet, View } from 'react-native';
import InterText from './StyledText';

const PageTitle = ({ label }: { label: string }) => {
  return (
    <View style={styles.titleWrapper}>
      <InterText style={styles.title}>{label}</InterText>
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    paddingHorizontal: '10%',
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginVertical: 25,
  },
});

export default PageTitle;
