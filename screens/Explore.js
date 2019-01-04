import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    KeyboardAvoidingView
 } from 'react-native';

import Icon from 'react-native-ionicons'

const { height, width } = Dimensions.get('window')
class Explore extends Component {

    componentWillMount() {
        this.startHeaderHeight = 30
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 50 + StatusBar.currentHeight
        }
    }

    saran = [
        {
            key:1,
            Image:require('../assets/lhoks.jpg'),
            name:"Lhokseumawe",
        },
        {
            key:2,
            Image:require('../assets/banda.jpg'),
            name:"Banda Aceh",
        },
        {
            key:3,
            Image:require('../assets/takengon.jpg'),
            name:"Takengon",
        },
        {
            key:4,
            Image:require('../assets/bireuen.jpg'),
            name:"Bireuen",
        },
        {
            key:5,
            Image:require('../assets/acut.jpg'),
            name:"Aceh Utara",
        },
        {
            key:6,
            Image:require('../assets/langsa.jpg'),
            name:"Langsa",
        }
    ]

    terdekat = [
        {
            key:1,
            Image:require('../assets/lhoks.jpg'),
            nama:"MASJID ISLAMIC CENTER",
            lokasi:"Lhokseumawe"
        },
        {
            key:2,
            Image:require('../assets/takengon.jpg'),
            nama:"BUR TELEGE",
            lokasi:"Takengon"
        },
        {
            key:3,
            Image:require('../assets/bireuen.jpg'),
            nama:"TUGU KOTA BIREUEN",
            lokasi:"Bireuen"
        },
        {
            key:4,
            Image:require('../assets/acut.jpg'),
            nama:"KANTOR BUPATI",
            lokasi:"Aceh Utara"
        },
        {
            key:5,
            Image:require('../assets/langsa.jpg'),
            nama:"GEDUNG BALEE JUANG",
            lokasi:"Langsa"
        },
        {
            key:5,
            Image:require('../assets/banda.jpg'),
            nama:"MASJID BAITURRAHMAN",
            lokasi:"Banda Aceh"
        }
    ]

    render() {
        return (
            <SafeAreaView style={{ flex:1 }}>
                <View style={{ flex:1 }}>
                    <View style={{ 
                        height: this.startHeaderHeight, 
                        backgroundColor:'#fd5c63', 
                        borderBottomWidth:1, 
                        borderBottomColor:'#dddddd' 
                    }}>
                        <View style={{ 
                            flexDirection: 'row',
                            padding: 3,
                            backgroundColor: 'white',
                            marginHorizontal: 20,
                            shadowOffset:{ width: 8, height: 8 },
                            shadowColor: 'black',
                            shadowOpacity: 0.5,
                            elevation: 8,
                            alignItems: 'center',
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: '#dddddd',
                            marginTop: Platform.OS == 'android' ? 11 : null
                        }}>
                            <Icon name="search" color='grey' size={25} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Coba Lhokseumawe"
                                placeholderTextColor="grey"
                                style={{ 
                                    flex: 1, 
                                    height: 40,
                                    fontWeight: '500', 
                                    backgroundColor: 'white',
                                }}
                            />
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ 
                            flex: 1,
                            backgroundColor: 'white',
                            paddingTop: 20
                        }}>
                            <Text style={{ 
                                fontSize:24, 
                                fontWeight:'700', 
                                paddingHorizontal:20 }}>
                                Apa yang bisa kami bantu, Makira?
                            </Text>

                            <View style={{ marginTop: 20 }}>
                                <ScrollView
                                    horizontal={ true }
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {this.saran.map(function(item){
                                        return (
                                            <View key={item.key} style={{ 
                                                height: 130, 
                                                width: 130,
                                                marginLeft: 20,
                                                borderWidth: 0.5,
                                                borderColor: '#dddddd'
                                            }}>
                                                <View style={{ flex: 2 }}>
                                                    <Image source={item.Image} style={{ 
                                                        flex: 1, 
                                                        width: null,
                                                        height: null,
                                                        resizeMode: 'cover' 
                                                    }} />
                                                </View>
                                                <View style={{ 
                                                        flex: 0.5,
                                                        paddingLeft: 10,
                                                        paddingTop: 10,
                                                    }}>
                                                    <Text>{item.name}</Text>
                                                </View>
                                
                                            </View>);
                                    })}
                                </ScrollView>
                            </View>
                            <View style={{ 
                                marginTop: 40,
                                paddingHorizontal: 20,
                            }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Memperkenalkan KiraApp
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    Solusi terbaru mencari tempat wisata di sekitar anda
                                </Text>
                                <View style={{ width: width-40, height: 200,marginTop: 20 }}>
                                    <Image
                                    style={{ 
                                        flex: 1, 
                                        height: null, 
                                        width: null, 
                                        resizeMode: 'cover',
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        borderColor: '#dddddd'
                                    }}
                                    source={require('../assets/lhoks.jpg')}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ 
                                fontSize: 24, 
                                fontWeight: '700', 
                                paddingHorizontal: 20 
                            }}>
                            Tempat wisata sekitar
                            </Text>
                            <View style={{ paddingHorizontal: 10, marginTop: 10 }}/>
                            <ScrollView
                                    horizontal={ true }
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {this.terdekat.map(function(item){
                                        return (
                                            <View key={item.key} style={{ 
                                                height: 130, 
                                                width: 130,
                                                marginLeft: 20,
                                                borderWidth: 0.5,
                                                borderColor: '#dddddd'
                                            }}>
                                                <View style={{ flex: 1 }}>
                                                    <Image source={item.Image} style={{ 
                                                        flex: 1,
                                                        flexDirection: 'row',
                                                        width: null, 
                                                        height: null, 
                                                        resizeMode: 'cover' 
                                                    }} />
                                                </View>
                                                <View style={{ 
                                                        flex: 0.5, 
                                                        alignItems: 'flex-start',
                                                        justifyContent: 'space-evenly' ,
                                                        paddingLeft: 10
                                                    }}>
                                                    <Text style={{ fontSize: 10, color: '#fd5c63' }} >{item.nama}</Text>
                                                    <Text style={{ fontSize: 8, fontWeight: 'bold' }}>{item.lokasi}</Text>
                                                </View>
                                
                                            </View>);
                                    })}
                                </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );

    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Explore;
