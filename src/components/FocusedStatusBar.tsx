import { SafeAreaView, StatusBar, View, StyleSheet, Platform } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const FocusedStatusBar = ({ backgroundColor, ...props }) => {
    const isFocused = useIsFocused();

    return isFocused ? (
        <View
            style={{
                position: 'absolute',
                backgroundColor,
                height: Platform.OS === 'ios' ? 44 : 56,
                width: '100%',
            }}
        >
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    ) : null;
};

export default FocusedStatusBar;
