import { StyleSheet, TextInput, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Colors from '../../constants/Colors';
import { useFetchSearchAnime } from '../../utils/hooks';
import Button from '../../components/Button';
import Viewer from '../../components/Viewer';
import Spinner from '../../components/Spinner';
import { useLocalSearchParams } from 'expo-router';

export default function SearchAnime() {
  const { q, page } = useLocalSearchParams<{ q?: string; page?: string }>();
  const { data, loading } = useFetchSearchAnime(q, page);
  const [text, setText] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search&#8230;"
            onChangeText={(newText) => {
              setText(newText);
            }}
            value={text}
            placeholderTextColor="darkgray"
          />
          <Button
            label="Search"
            onPress={() => {
              alert('searching');
            }}
          />
        </View>
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
  inputWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    width: '100%',
    gap: 12,
  },
  searchInput: {
    paddingHorizontal: 12,
    paddingVertical: 8,
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
