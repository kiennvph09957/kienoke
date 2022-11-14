import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import AppHeader from '../../../components/AppHeader';
import Item_category from '../../../components/category/Itemcategory';

import ListItemcategory from '../../../components/category/ListItemcategory';
import Searchcategory from '../../../components/category/Searchcategory';
import Title_edit from '../../../components/category/Titleedit';
import Toptabcategory from '../../../components/category/Toptabcategory';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import svgs from '../../../res/svgs';

interface Props {
  navigation?: any;
}

interface State {
  clickd: any;
}

export default class CategoryHome extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      clickd: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <AppHeader
          back={true}
          title
          textTittle="Danh mục"
          onBackPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.form_container}>
          <View style={styles.search_container}>
            <Searchcategory />
          </View>
          <View style={styles.edit_container}>
            <Title_edit
              svg={this.state.clickd ? svgs.ic_pencle : svgs.tick}
              onPress={() => {
                this.state.clickd
                  ? this.setState({clickd: false})
                  : this.setState({clickd: true});
              }}
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.item_container}>
            <View>
              <ListItemcategory
                navigation={this.props.navigation}
                minus={this.state.clickd}
              />
            </View>
            <View style={styles.tab_container}>
              <Toptabcategory
                minus={this.state.clickd}
                navigationtab={this.props.navigation}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form_container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderTopLeftRadius: sizes._20sdp,
    borderTopRightRadius: sizes._20sdp,
  },
  search_container: {
    marginLeft: sizes._16sdp,
    marginTop: sizes._26sdp,
  },
  edit_container: {
    marginLeft: sizes._16sdp,
    marginTop: sizes._66sdp,
  },
  item_container: {
    marginTop: sizes._36sdp,
  },
  tab_container: {
    height: sizes._screen_height / 1.37,
    paddingTop: 20,
    marginBottom: 20,
  },
});
