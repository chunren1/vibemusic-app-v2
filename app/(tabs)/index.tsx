import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabErrorBoundary } from '../../src/components/TabErrorBoundary';
import { fetchGuestStatus, type MeResult } from '../../src/api/client';
import { colors, fontSize, spacing } from '../../src/theme/tokens';
function DiscoverBody(): React.JSX.Element {
  const [api, setApi] = useState<MeResult>({ status: 'checking', detail: '正在连接后端…' });
  useEffect(() => {
    let alive = true;
    fetchGuestStatus().then((r) => {
      if (alive) setApi(r);
    });
    return () => { alive = false; };
  }, []);
  return (
    <View style={styles.page}>
      <Text style={styles.title}>发现</Text>
      <Text style={styles.desc}>P0 亮机占位，后续在此接推荐内容</Text>
      <Text style={styles.api}>{api.detail}</Text>
    </View>
  );
}

export default function DiscoverPage(): React.JSX.Element {
  return (
    <TabErrorBoundary tabName="发现">
      <DiscoverBody />
    </TabErrorBoundary>
  );
}

const styles = StyleSheet.create({
  api: { color: colors.champagne, fontSize: 14, marginTop: spacing.small },
  desc: { color: colors.textMuted, fontSize: 14, marginTop: spacing.small },
  page: {
    alignItems: 'center', backgroundColor: colors.background,
    flex: 1, justifyContent: 'center', padding: spacing.large,
  },
  title: { color: colors.text, fontSize: fontSize.title, fontWeight: '700' },
});
