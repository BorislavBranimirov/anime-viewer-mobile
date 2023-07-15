import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import Colors from '../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        unmountOnBlur: true,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          borderTopColor: Colors.border,
        },
        tabBarInactiveTintColor: 'silver',
        tabBarActiveTintColor: Colors.text,
        tabBarInactiveBackgroundColor: Colors.background,
        tabBarActiveBackgroundColor: Colors.accent,
        tabBarItemStyle: {
          paddingVertical: 5,
        },
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: { fontFamily: 'Inter_400Regular', fontSize: 16 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
          title: 'Top',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="medal" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="seasonal"
        options={{
          href: '/seasonal',
          title: 'Seasonal',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          href: '/search',
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
