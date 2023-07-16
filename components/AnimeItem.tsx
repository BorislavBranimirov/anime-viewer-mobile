import { Image, Pressable, StyleSheet, View } from 'react-native';
import InterText from './StyledText';
import Colors from '../constants/Colors';
import { IApiAnime } from '../utils/types';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { memo } from 'react';

const AnimeItem = ({ anime }: { anime: IApiAnime }) => {
  return (
    <Link href={`/anime/${anime.mal_id}`} style={styles.cardWrapper} asChild>
      <Pressable>
        <LinearGradient
          colors={['rgba(9,9,11,0.2)', 'rgba(59,7,100,0.2)']}
          locations={[0.8, 1]}
        >
          <View style={styles.card}>
            <View style={styles.cardCover}>
              <Image
                source={{ uri: anime.images.jpg.large_image_url }}
                alt="Anime image"
                style={styles.cardImage}
              />
              {anime.airing && (
                <View style={styles.cardAiringStatus}>
                  <InterText>Airing</InterText>
                </View>
              )}
            </View>
            <View style={styles.cardBody}>
              <InterText style={styles.cardTitle}>{anime.title}</InterText>
              <View style={styles.cardScore}>
                <AntDesign name="star" size={14} color="orange" />
                <InterText>{anime.score}</InterText>
              </View>
            </View>
          </View>
          <View style={styles.cardBadgeWrapper}>
            <View style={styles.cardBadge}>
              <InterText>#{anime.rank}</InterText>
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 64,
  },
  card: {
    paddingBottom: 24,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.accent,
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
  },
  cardCover: {
    width: '100%',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  cardAiringStatus: {
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
  cardBody: {
    width: '100%',
    minHeight: 130,
    padding: 12,
    gap: 12,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  cardScore: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  cardBadgeWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBadge: {
    width: '50%',
    padding: 8,
    backgroundColor: Colors.accent,
    alignItems: 'center',
    borderRadius: 9999,
    transform: [{ translateY: 20 }],
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
  },
});

export default memo(AnimeItem);
