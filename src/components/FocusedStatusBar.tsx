import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const FocusedStatusBar = (props: any) => {
    const isFocused = useIsFocused();

    // StatusBar doesn't change background color on IOS
    return isFocused ? <StatusBar animated barStyle="dark-content" {...props} /> : null;
};

export default FocusedStatusBar;
