import { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from 'src/components';

const Home = () => {
    const [nftData, setNFTData] = useState(NFTData);

    const handleSearch = (value: string) => {
        if (value.length <= 0) {
            return setNFTData(NFTData);
        }

        const filteredData = (NFTData as any).filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
        setNFTData(filteredData);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={nftData}
                        renderItem={({ item }) => <NFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    />
                </View>

                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: -1,
                    }}
                >
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
