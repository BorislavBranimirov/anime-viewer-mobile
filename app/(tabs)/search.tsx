import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';
import Colors from '../../constants/Colors';
import { useFetchSearchAnime } from '../../utils/hooks';
import Button from '../../components/Button';
import Viewer from '../../components/Viewer';
import Spinner from '../../components/Spinner';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function SearchAnime() {
  const router = useRouter();
  const { q, page } = useLocalSearchParams<{ q?: string; page?: string }>();
  const { data, loading } = useFetchSearchAnime(q, page);
  const [query, setQuery] = useState<string>('');

  const onSubmit = () => {
    router.setParams({ q: query, page: '1' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search&#8230;"
          onChangeText={(newText) => {
            setQuery(newText);
          }}
          onSubmitEditing={onSubmit}
          value={query}
          placeholderTextColor="darkgray"
        />
        <Button label="Search" onPress={onSubmit} />
      </View>
      {!data || loading ? <Spinner /> : <Viewer data={data} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  inputWrapper: {
    paddingHorizontal: '10%',
    marginVertical: 20,
    flexDirection: 'row',
    gap: 12,
  },
  searchInput: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'rgb(39,39,42)',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.border,
    minWidth: 0,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
  },
});
