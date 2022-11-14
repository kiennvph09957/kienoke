import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import sizes from '../../../res/sizes';
import colors from '../../../res/colors';
import Meal from './Meal';
import Ratting from './Ratting';
import Feedback from './Feedback';
import AppHeader from '../../../components/AppHeader';
import RatingVote from './RatingVote';
import {SafeAreaProvider} from 'react-native-safe-area-context';
interface Props {
  navigation?: any;
}

interface State {}
const emptyData: any = [];
const renderNullItem = () => null;
export default class MealReview extends Component<Props, State> {
  renderEmty = () => (
    <>
      <View style={{flex: 1}}>
        <View>
          <Meal />
        </View>
        <View style={{}}>
          <RatingVote />
        </View>
        <View>
          <Feedback />
        </View>
        <View style={{flex: 1, marginBottom: 20, left: sizes._32sdp}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#D30026',
              height: sizes._48sdp,
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: sizes._128sdp,
            }}>
            <Text style={{color: 'white'}}>Gửi đánh giá</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
  render() {
    return (
      <SafeAreaProvider style={styles.container}>
        <AppHeader
          title
          textTittle="Đánh giá xuất ăn"
          back
          onBackPress={() => this.props?.navigation?.goBack()}
        />
        <View style={styles.contentContainer}>
          <FlatList
            data={emptyData}
            renderItem={renderNullItem}
            ListEmptyComponent={this.renderEmty()}
          />
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: colors._color_white,
    width: '100%',
    borderTopRightRadius: sizes._20sdp,
    borderTopLeftRadius: sizes._20sdp,
    height: sizes._screen_height,
  },
  container: {
    flex: 1,
  },
});
