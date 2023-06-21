/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, FlatList,ImageBackground, Modal ,TouchableOpacity, Alert} from 'react-native';
import React, {Component} from 'react';
import Context from '../context/Context';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';




const musicData = [
  {
    title: 'Death Bed',
    artist: 'Powfu',
    artwork: 'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
    url: 'https://samplesongs.netlify.app/Death%20Bed.mp3',
    id: '1',
  },
  {
    title: 'Bad Liar',
    artist: 'Imagine Dragons',
    artwork: 'https://samplesongs.netlify.app/album-arts/bad-liar.jpg',
    url: 'https://samplesongs.netlify.app/Bad%20Liar.mp3',
    id: '2',
  },
  {
    title: 'Faded',
    artist: 'Alan Walker',
    artwork: 'https://samplesongs.netlify.app/album-arts/faded.jpg',
    url: 'https://samplesongs.netlify.app/Faded.mp3',
    id: '3',
  },
  {
    title: 'Hate Me',
    artist: 'Ellie Goulding',
    artwork: 'https://samplesongs.netlify.app/album-arts/hate-me.jpg',
    url: 'https://samplesongs.netlify.app/Hate%20Me.mp3',
    id: '4',
  },
  {
    title: 'Solo',
    artist: 'Clean Bandit',
    artwork: 'https://samplesongs.netlify.app/album-arts/solo.jpg',
    url: 'https://samplesongs.netlify.app/Solo.mp3',
    id: '5',
  },
  {
    title: 'Without Me',
    artist: 'Halsey',
    artwork: 'https://samplesongs.netlify.app/album-arts/without-me.jpg',
    url: 'https://samplesongs.netlify.app/Without%20Me.mp3',
    id: '6',
    },
];
interface IState {
  isModelOpen:boolean;
  modelData: any;
  isCheck: boolean;
}
const firstData =   {
    title: 'Death Bed',
    artist: 'Powfu',
    artwork: 'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
    url: 'https://samplesongs.netlify.app/Death%20Bed.mp3',
    id: '0',
  };
export class Home extends Component<IState> {
  state = {
    isModelOpen: false,
    modelData:  firstData,
    isCheck: false,
  };
  render() {
    const {modelData, isModelOpen} = this.state;

    return (
        <Context.Consumer>
            {context => { 
                let favCheck = false;
                context.favData.map((each: any) => {
                    if (each.id === modelData.id){
                        favCheck = true;
                                        }
                });
                return (
                <View style={Styles.homeMAinContainer}>
                {isModelOpen && (
                    <Modal
                        visible={this.state.isModelOpen}
                        onRequestClose={() => {
                            this.setState({isModelOpen: false});
                        }}>
                        <View style={Styles.modelCard}>
                                <View style={Styles.topHomeCard}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({isModelOpen: false});
                                }}>
                                    <AntDesignIcons name="down" size={30} color="#fff" />
                                </TouchableOpacity>
                                <Text style={Styles.top100Text}>“Top 100 Nigeria”</Text>
                                <AntDesignIcons name="ellipsis1" size={40} color="#fff"  />
                            </View>
                            <Image style={Styles.modelImageData} source={{uri:`${modelData.artwork}`}} />
                            <View style={{...Styles.topHomeCard , margin: 15,}}>
                                <View>
                                    <Text  style={Styles.top100Text}>{modelData.title}</Text>
                                    <Text  style={Styles.top100Text}>{modelData.artist}</Text>
                                </View>
                                <TouchableOpacity onPress={() => {
                                    let check = false;
                                    context.favData.map((each: any) => {
                                        if (each.id === modelData.id){
                                            check = true;
                                        }
                                    });
                                    console.log(check);
                                    if (check) {
                                        Alert.alert('PlayList', 'Sorry Song Already Added to PlayList');
                                        context.deleteCartData(modelData.id);
                                    } else {
                                        Alert.alert('PlayList', 'Successfully Song Added to PlayList');
                                        context.addCartData(this.state.modelData);
                                    }
                                }}>
                                    {favCheck? (
                                        <AntDesignIcons name="heart" size={30} color="#cf281f" />
                                    ) : (
                                        <AntDesignIcons name="hearto" size={30} color="#fff" />
                                    ) }
                                </TouchableOpacity>
                            </View>
                            <Image
                                resizeMode="contain"
                                style={Styles.SongStatusImg}
                                source={require('../images/SongStatusImg.png')}
                            />
                            <View style={{...Styles.topHomeCard , margin: 15,}}>
                                <Text style={Styles.top100Text}>2.01</Text>
                                <Text style={Styles.top100Text}>-1.07</Text>
                            </View>
                            <View style={{...Styles.topHomeCard , margin: 15,}}>
                                <AntDesignIcons name="retweet" size={30} color="#fff" />
                                <AntDesignIcons name="stepbackward" size={30} color="#fff" />
                                <AntDesignIcons name="pausecircle" size={60} color="#fff" />
                                <AntDesignIcons name="stepforward" size={30} color="#fff" />
                                <AntDesignIcons name="reload1" size={30} color="#fff" />
                            </View>
                            <View style={{...Styles.topHomeCard , marginLeft: 15, marginRight: 15}}>
                                <View style={Styles.iconsCrad}>
                                    <Image
                                        resizeMode="contain"
                                        style={Styles.BlutoothImg}
                                        source={require('../images/BlutoothImg.png')}
                                    />
                                    <Text style={{...Styles.top100Text, marginLeft: 10}}>Earpods</Text>
                                </View>
                                <View style={Styles.iconsCrad}>
                                    <Image
                                        resizeMode="contain"
                                        style={Styles.uploadeImg}
                                        source={require('../images/UploadImg.png')}
                                    />
                                    <Image
                                        resizeMode="contain"
                                        style={Styles.uploadeImg}
                                        source={require('../images/PlayImg.png')}
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
                )}

                <View style={Styles.topHomeCard}>
                    <View style={Styles.topTextCrad}>
                    <Text style={Styles.forYouText}>For You</Text>
                    <Text style={Styles.textTop}>Trending</Text>
                    </View>
                    <View style={Styles.iconsCrad}>
                    <IoniconsIcons
                        name="notifications-outline"
                        size={30}
                        color="#FFFFFF"
                    />
                    <IoniconsIcons name="settings-outline" size={30} color="#FFFFFF" />
                    </View>
                </View>
                <View>
                    <Text style={Styles.RecentlyPlayedText}>Recently Played</Text>
                    <Image
                    resizeMode="contain"
                    style={Styles.recentImg}
                    source={require('../images/RecentImg.png')}
                    />
                </View>
                <View>
                    <Text style={Styles.RecentlyPlayedText}>Daily Mix</Text>
                    <FlatList
                    horizontal
                    keyExtractor={item => item.id.toString()}
                    data={musicData}
                    renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            style={Styles.mixImagCard}
                            onPress={()=> {
                                this.setState({isModelOpen: true, modelData: item});
                            }}>
                        <ImageBackground resizeMode="contain" style={Styles.mixImags} source={{uri:`${item.artwork}`}}>
                            <View style={Styles.playIcon}>
                                <IoniconsIcons
                                name="play-circle-outline"
                                size={37}
                                color="#251741"
                                />
                            </View>
                        </ImageBackground>
                        <Text style={Styles.titleText}>{item.title}</Text>
                        <Text style={Styles.titleText}>{item.artist}</Text>
                        </TouchableOpacity>
                    );
                    }}
                />
                </View>
                <View>
                    <View style={Styles.bottomCardtop}>
                        <Text style={Styles.RecentlyPlayedText}>Charts</Text>
                        <View style={Styles.moreIconCrad}>
                            <Text style={Styles.forYouText}>More </Text>
                            <AntDesignIcons name="right" size={20} color="#844DFB" />
                        </View>
                    </View>
                    <View style={Styles.bottomCard}>
                    <View style={Styles.topHomeCard}>
                        <Text style={Styles.top100Text}>Top 100 Nigeria</Text>
                        <View style={Styles.moreIconCrad}>
                            <Text style={Styles.moreText}>More </Text>
                            <AntDesignIcons name="right" size={20} color="#D9D9D9" />
                        </View>
                    </View>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={musicData}
                        renderItem={({item}) => {
                            return (
                            <View style={Styles.musicItemCard}>
                                <TouchableOpacity style={Styles.musicItemImageCard} onPress={() => {
                                    this.setState({isModelOpen: true, modelData: item});
                                }}>
                                    <Text  style={Styles.top100Text}>{item.id}</Text>
                                    <Image style={Styles.mixItemImags} source={{uri:`${item.artwork}`}} />
                                    <View>
                                    <Text style={Styles.titleText2}>{item.title}</Text>
                                    <Text style={Styles.titleText2}>{item.artist}</Text>
                                </View>
                                </TouchableOpacity>
                                {modelData.id === item.id && (
                                    <AntDesignIcons name="pausecircle" size={30} color="#fff" />
                                )}
                                <IoniconsIcons name="arrow-down-circle-outline" size={30} color="#844DFB" />
                            </View>
                            );
                        }}
                    />
                    </View>
                </View>
                </View>
            )}}
        </Context.Consumer>
    );
  }
}
const Styles = StyleSheet.create({
  homeMAinContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingLeft: 20,
  },
  modelCard: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingRight: 10,
  },
  topHomeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  iconsCrad: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 75,
  },
  topTextCrad: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 170,
  },
  textTop: {
    fontSize: 19,
    color: '#ffff',
    marginLeft: 10,
    fontWeight: '800',
  },
  forYouText: {
    fontSize: 19,
    color: '#844DFB',
    fontWeight: '800',
  },
  RecentlyPlayedText: {
    fontSize: 20,
    color: '#ffff',
    fontWeight: '800',
    marginBottom: 10,
  },
  recentImg: {
    height: 140,
    width: 320,
    marginBottom: 10,
  },
  mixImagCard: {
    marginRight: 10,
    marginBottom: 5,
  },
  mixImags: {
    height: 110,
    width: 110,
    borderRadius: 35,
    marginBottom: 5,
  },
  playIcon: {
    position: 'absolute',
    top: 72,
    left: 72,
  },
  titleText: {
    color: '#E4DEEF',
    fontSize: 10,
    textAlign: 'center',
  },
  bottomCard: {
    height: 175,
    width: 330,
    backgroundColor: 'linear-gradient(99.4deg, rgba(217, 217, 217, 0.23) 0%, rgba(217, 217, 217, 0.06) 97.51%)',
    borderRadius: 10,
  },
  bottomCardtop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 7,
    paddingRight: 20,
  },
  top100Text: {
    fontSize: 17,
    color: '#ffff',
    fontWeight: '600',
  },
  moreText: {
    color: '#D9D9D9',
    fontSize: 16,
  },
  moreIconCrad: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 55,
  },
  musicItemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  musicItemImageCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mixItemImags: {
    height: 60,
    width: 60,
    marginLeft: 7,
  },
  titleText2: {
    color: '#E4DEEF',
    fontSize: 12,
    marginLeft: 10,
  },
  modelImageData: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  SongStatusImg: {
    width: 300,
    height: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  BlutoothImg: {
    height: 30,
    width: 30,
  },
  uploadeImg: {
    height: 25,
    width: 25,
  }
});
export default Home;
