import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton, FocusedStatusBar, DetailsDescription, DetailsBid, SubInfo } from 'src/components';

const DetailsHeader = ({ data, navigation }) => (
    <View
        style={{
            width: '100%',
            height: 373,
        }}
    >
        <Image
            source={data.image}
            resizeMode="cover"
            style={{
                width: '100%',
                height: '100%',
            }}
        />

        <CircleButton imageUrl={assets.left} handlePress={() => navigation.goBack()} left={15} top={15} />
        <CircleButton imageUrl={assets.heart} handlePress={undefined} right={15} top={15} />
    </View>
);

const Details = ({ route, navigation }) => {
    const { data } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar barStyle="dark-content" backgroundColor="transparent" />

            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    paddingVertical: SIZES.large,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    zIndex: 1,
                }}
            >
                <RectButton minWidth={170} fontSize={SIZES.large} handlePress={undefined} {...SHADOWS.dark} />
            </View>

            <FlatList
                data={data.bids}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: SIZES.extraLarge * 3,
                }}
                ListHeaderComponent={() => (
                    <>
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <View
                            style={{
                                padding: SIZES.font,
                            }}
                        >
                            <DetailsDescription data={data} />

                            {data.bids.length > 0 && (
                                <Text
                                    style={{
                                        fontSize: SIZES.font,
                                        fontFamily: FONTS.medium,
                                        color: COLORS.primary,
                                    }}
                                >
                                    Current Bid
                                </Text>
                            )}
                        </View>
                    </>
                )}
            />
        </SafeAreaView>
    );
};

export default Details;
