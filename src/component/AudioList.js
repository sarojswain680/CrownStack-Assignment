import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator, RefreshControl} from 'react-native';
import styles from './AudioListStyles';
import Card from '../common/Card';
import {connect} from 'react-redux';
import {getAudioList} from '../actions/audioList.action';

 class AudioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
    };
  }

  static navigationOptions = {
    title: 'Songs',
    headdingStyle: {
      fontWeight: '300',
    },
    headerStyle: {
      backgroundColor: '#3db0f7',
    },
    headerTitleStyle: {alignSelf: 'center', color: 'white'},
  };

  onPullDown = () => {
    this.setState({refresh: true});
    this.props.getAudioList();
    this.setState({refresh: false});
  };

  componentDidMount() {
    this.props.getAudioList();
  }

  renderItem = ({item}) => {
    const {navigation} = this.props;
    return (
      <Card
        data={item}
        onPress={() => navigation.navigate('AudioDetail', {data: item})}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.loading ? (
          <ActivityIndicator
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            size="large"
            color="black"
          />
        ) : (
          <FlatList
            data={this.props.audioList}
            renderItem={(item) => this.renderItem(item)}
            keyExtractor={(item) => item.trackId.toString()}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refresh}
                onRefresh={this.onPullDown}
              />
            }
          />
        )}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    audioList: state.audioListReducer.audioList,
    loading: state.audioListReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAudioList: () => dispatch(getAudioList()),
  };
};

const AudioListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioList);
export default AudioListContainer;

