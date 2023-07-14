import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InterText from '../../components/StyledText';
import Spinner from '../../components/Spinner';
import { Stack, useLocalSearchParams } from 'expo-router';
import Colors from '../../constants/Colors';
import { useFetchAnime } from '../../utils/hooks';
import { AntDesign } from '@expo/vector-icons';

const AnimePage = () => {
  const { id = '1' } = useLocalSearchParams<{ id?: string }>();
  const { data: anime, loading } = useFetchAnime(id);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Anime Page',
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.text,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: 'Inter_400Regular',
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.text,
          },
        }}
      />
      <View style={styles.wrapper}>
        {!anime || loading ? (
          <Spinner />
        ) : (
          <View style={styles.animeWrapper}>
            <View style={styles.animeCover}>
              <Image
                source={{ uri: anime.images.jpg.large_image_url }}
                alt="Anime image"
                style={styles.animeImage}
              />
              {anime.airing && (
                <View style={styles.animeAiringStatus}>
                  <InterText>Airing</InterText>
                </View>
              )}
            </View>
            <View style={styles.animeBody}>
              <InterText style={styles.animeTitle}>{anime.title}</InterText>
              <View style={styles.animeTwoColumn}>
                <InterText>#{anime.rank}</InterText>
                <View style={styles.animeStatsCounters}>
                  <View style={styles.animeStatsCounter}>
                    <AntDesign name="star" size={14} color="orange" />
                    <InterText>{anime.score}</InterText>
                  </View>
                  <View style={styles.animeStatsCounter}>
                    <AntDesign name="heart" size={14} color="rgb(244,63,94)" />
                    <InterText>{anime.favorites}</InterText>
                  </View>
                </View>
              </View>
              <View style={styles.animeTwoColumn}>
                {!!anime.year && (
                  <InterText>
                    <InterText style={{ fontWeight: 'bold' }}>Year: </InterText>
                    {anime.year}
                  </InterText>
                )}
                {!!anime.episodes && (
                  <InterText>
                    <InterText style={{ fontWeight: 'bold' }}>
                      Episodes:{' '}
                    </InterText>
                    {anime.episodes}
                  </InterText>
                )}
              </View>
              {!!anime.synopsis && <InterText>{anime.synopsis}</InterText>}
              <InterText>
                <InterText style={{ fontWeight: 'bold' }}>Studios: </InterText>
                {anime.studios.map((studio) => studio.name).join(', ')}
              </InterText>
              <View style={styles.animeTags}>
                {anime.genres.map((genre) => {
                  return (
                    <InterText key={genre.mal_id} style={styles.animeTag}>
                      {genre.name}
                    </InterText>
                  );
                })}
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: Colors.background,
  },
  wrapper: {
    width: '80%',
    minHeight: '100%',
    marginHorizontal: 'auto',
  },
  animeWrapper: {
    width: '100%',
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: Colors.accent,
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
  },
  animeCover: {
    width: '100%',
    overflow: 'hidden',
  },
  animeImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  animeAiringStatus: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomLeftRadius: 6,
    backgroundColor: Colors.accent,
    fontSize: 14,
    lineHeight: 20,
  },
  animeBody: {
    width: '100%',
    minHeight: 130,
    paddingHorizontal: 20,
    paddingVertical: 28,
    gap: 12,
  },
  animeTitle: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  animeTwoColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  animeStatsCounters: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  animeStatsCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  animeTags: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  animeTag: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: Colors.accent,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default AnimePage;
