import AudioDetail from './component/AudioDetail';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AudioListContainer from './component/AudioList';

const Router = createStackNavigator({
  AudioList: {
    screen: AudioListContainer,
  },
  AudioDetail: {
    screen: AudioDetail,
  },
});

export const AppRouter = createAppContainer(Router);
