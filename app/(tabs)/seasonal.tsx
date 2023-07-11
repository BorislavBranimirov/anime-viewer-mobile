import { StyleSheet, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { InterText } from '../../components/StyledText';
import Colors from '../../constants/Colors';
import { Viewer } from '../../components/Viewer';

export default function SeasonalAnime() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <InterText style={styles.title}>Current Anime Season</InterText>
        <Viewer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  wrapper: {
    width: '80%',
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginVertical: 24,
  },
});
