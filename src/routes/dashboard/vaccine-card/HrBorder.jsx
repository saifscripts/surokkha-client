import { StyleSheet, View } from '@react-pdf/renderer';

function HrBorder({ width, height, dashWidth, dashGap }) {
  const styles = StyleSheet.create({
    container: {
      height: height || '1px',
      width: width || '100%',
      overflow: 'hidden',
      display: 'flex',
      gap: dashGap || '5px',
    },
    dash: {
      width: dashWidth || '5px',
      height: '100px',
      backgroundColor: '#eeeeee',
    },
  });

  return (
    <View styles={styles.container}>
      {Array(20)
        .fill(null)
        .map((item, index) => (
          <View key={index} style={styles.dash} />
        ))}
    </View>
  );
}

export default HrBorder;
