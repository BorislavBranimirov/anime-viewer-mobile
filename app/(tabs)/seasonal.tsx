import { StyleSheet, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { useFetchSeasonalAnime } from '../../utils/hooks';
import InterText from '../../components/StyledText';
import Viewer from '../../components/Viewer';
import Spinner from '../../components/Spinner';

export default function SeasonalAnime() {
  const { data, loading } = useFetchSeasonalAnime();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <InterText style={styles.title}>Current Anime Season</InterText>
        {!data || loading ? <Spinner /> : <Viewer data={data} />}
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
    flex: 1,
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
