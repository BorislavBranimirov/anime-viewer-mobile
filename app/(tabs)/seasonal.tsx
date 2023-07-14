import { StyleSheet, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../constants/Colors';
import { useFetchSeasonalAnime } from '../../utils/hooks';
import Viewer from '../../components/Viewer';
import Spinner from '../../components/Spinner';
import { useLocalSearchParams } from 'expo-router';
import PageTitle from '../../components/PageTitle';

export default function SeasonalAnime() {
  const { page } = useLocalSearchParams<{ page?: string }>();
  const { data, loading } = useFetchSeasonalAnime(page);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <PageTitle label="Current Anime Season" />
        {!data || loading ? <Spinner /> : <Viewer data={data} />}
      </View>
    </SafeAreaView>
  );
}

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
});
