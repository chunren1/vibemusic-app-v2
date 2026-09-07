import { Tabs } from 'expo-router';
import { colors } from '../../src/theme/tokens';

export default function TabsLayout(): React.JSX.Element {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.surface },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
      }}
    >
      <Tabs.Screen name="index" options={{ title: '发现' }} />
      <Tabs.Screen name="search" options={{ title: '搜索' }} />
      <Tabs.Screen name="player" options={{ title: '播放' }} />
      <Tabs.Screen name="playlist" options={{ title: '歌单' }} />
      <Tabs.Screen name="me" options={{ title: '我的' }} />
    </Tabs>
  );
}
