import { useState } from 'react';
import { View, Text } from 'react-native';
import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesciption = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);

    return (
        <>
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />

                <EthPrice price={data.price} />
            </View>

            <View
                style={{
                    marginVertical: SIZES.extraLarge * 1.5,
                }}
            >
                <Text
                    style={{
                        fontSize: SIZES.font,
                        fontFamily: FONTS.medium,
                        color: COLORS.primary,
                    }}
                >
                    Description
                </Text>
                <View
                    style={{
                        marginTop: SIZES.base,
                    }}
                >
                    <Text
                        style={{
                            fontSize: SIZES.small,
                            fontFamily: FONTS.regular,
                            color: COLORS.secondary,
                            lineHeight: SIZES.large,
                        }}
                    >
                        {text + (readMore ? '' : '...')}
                    </Text>
                    <Text
                        style={{
                            fontSize: SIZES.small,
                            fontFamily: FONTS.bold,
                            color: COLORS.primary,
                            textTransform: 'uppercase',
                            textDecorationLine: 'underline',
                            marginTop: SIZES.base,
                        }}
                        onPress={() => {
                            setReadMore(!readMore);
                            readMore ? setText(data.description.slice(0, 100)) : setText(data.description);
                        }}
                    >
                        {readMore ? 'Show Less' : 'Read More'}
                    </Text>
                </View>
            </View>
        </>
    );
};

export default DetailsDesciption;
