import {StyleSheet, Text, SafeAreaView, View, FlatList} from 'react-native';
import {FocusedStatusBar, HomeHeader, NFTCard} from "../components";
import {COLORS, NFTData} from "../constants";
import {useState} from "react";
import * as _ from 'lodash'


function Home() {

    const [nftData, setNftData] = useState(NFTData);

    const handleSearch = (value) => {
        if (!value.length) return setNftData(NFTData);

        const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))

        if (filteredData.length)
            setNftData(filteredData)
        else setNftData(NFTData)
    }

    return(
        <SafeAreaView style={styles.container}>
            <FocusedStatusBar background={COLORS.primary} />

            <View style={styles.container}>
                <View style={styles.listPosition}>
                    <FlatList
                        data={nftData}
                        renderItem={({item}) => <NFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader handleSearch={handleSearch} />}
                    />
                </View>
                <View style={styles.listBackground} >
                    <View style={styles.top}/>
                    <View style={styles.bottom}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listPosition: {
        zIndex: 0
    },
    listBackground: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: -1
    },
    top: {
      height: 300,
      backgroundColor: COLORS.primary
    },
    bottom: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    }
});
