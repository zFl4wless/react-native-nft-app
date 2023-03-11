import { TouchableOpacity, View, Text, Image } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const CircleButton = ({ imageUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.extraLarge,
                alignItems: 'center',
                justifyContent: 'center',
                ...SHADOWS.light,
                ...props,
            }}
            onPress={handlePress}
        >
            <Image source={imageUrl} resizeMode="contain" style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
    );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                padding: SIZES.small,
                ...props,
            }}
            onPress={handlePress}
        >
            <Text
                style={{
                    fontFamily: FONTS.bold,
                    fontSize: fontSize,
                    color: COLORS.white,
                    textAlign: 'center',
                }}
            >
                Place a bid
            </Text>
        </TouchableOpacity>
    );
};
