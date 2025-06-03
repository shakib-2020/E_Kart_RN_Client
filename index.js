/**
 * @format
 */

import {AppRegistry, Text, TextInput} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

// to stop reanimated warning log; auto scroll package give this warning..
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

// doing it so that defaultProps do not override our font sizes.
if (Text.defaultProps) {
  Text.defaultProps.allowFontScaling = false;
} else {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps) {
  TextInput.defaultProps.allowFontScaling = false;
} else {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}

AppRegistry.registerComponent(appName, () => App);
