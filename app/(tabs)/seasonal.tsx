import { StyleSheet, View } from 'react-native';
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
    <View style={styles.container}>
      <PageTitle label="Current Anime Season" />
      {!data || loading ? <Spinner /> : <Viewer data={data} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
