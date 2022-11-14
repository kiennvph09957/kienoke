import { View, Image, StyleSheet} from 'react-native';
import React from 'react';
import sizes from '../res/sizes';
interface Props {
}
export class Avatar extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <View style={styles.mStyleImage}>
        <Image
          style={{
            width: sizes._48sdp,
            height: sizes._48sdp,
            borderRadius: 48 / 2,
            borderColor: '#fff',
          }}
          source={require('../assets/images/Ellipse_1.png')}
        />
      </View>
    );
  }
}

export default Avatar;
const styles = StyleSheet.create({
  mStyleImage: {
     flex: 1,
  },
});
