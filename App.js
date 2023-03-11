import App from 'src/App';
import { NativeModules } from 'react-native';
NativeModules.DevSettings.setIsDebuggingRemotely(false);

export default () => <App />;
