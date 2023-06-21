import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Context from '../context/Context';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export class PlayList extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => {
          console.log(context.favData);
          return (
            <View style={Styles.playListMainCard}>
              <Text style={Styles.FavSongsText}>Fav PlayList Songs..</Text>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={context.favData}
                renderItem={({item}: {item: any}) => {
                  return (
                    <View style={Styles.musicItemCard}>
                      <View style={Styles.musicItemImageCard}>
                        <Image
                          style={Styles.mixItemImags}
                          source={{uri: `${item.artwork}`}}
                        />
                        <View>
                          <Text style={Styles.titleText2}>{item.title}</Text>
                          <Text style={Styles.titleText2}>{item.artist}</Text>
                        </View>
                      </View>
                      <View style={Styles.deleteCard}>
                        <AntDesignIcons
                          name="playcircleo"
                          size={30}
                          color="#fff"
                        />
                        <TouchableOpacity
                          onPress={() => {
                            context.deleteCartData(item.id);
                          }}>
                          <AntDesignIcons
                            name="delete"
                            size={30}
                            color="#fff"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      </Context.Consumer>
    );
  }
}
const Styles = StyleSheet.create({
  playListMainCard: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 15,
  },
  FavSongsText: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 25,
  },
  musicItemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
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
  top100Text: {
    fontSize: 17,
    color: '#ffff',
    fontWeight: '600',
  },
  deleteCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
  },
});
export default PlayList;
