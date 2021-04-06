import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import {Header} from 'react-native-elements';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coronaArray:[],
    };
  }

  componentDidMount() {
    return fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
    .then((response) => response.json())
    .then((json) => {
      console.log('coronavirus-tracker-api locations is = ',json.locations);
      this.setState({coronaArray:json.locations});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  actSearch(text) {}

  actionTextBlur() {}

  render() {
    
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#00ff00",
          justifyContent: "center",
        }}
      >
      <View>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Corona Tracking', style: { fontSize: 18,color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      </View>
        <FlatList
          data={this.state.coronaArray}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 0.9,
                borderRadius: 20,
                paddingRight: 6,
                paddingLeft: 6,
                paddingBottom: 0,
                paddingTop: 3,
                margin: 4,
                backgroundColor: "red",
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  color: "white",
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomEndRadius: 0,
                  borderBottomWidth: 3,

                  fontSize: 20,
                  padding: 5,
                  paddingLeft:10,
                  paddingRight: 10,
                  margin: 5,
                  fontStyle: "italic",
                }}
              >
                {item.id+1}-{item.country} -- {item.province}
              </Text>
              <Text
                style={{
                  backgroundColor: "red",
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  borderTopEndRadius: 0,
                  textAlign: "center",
                  padding: 5,
                }}
              >
                Confirmed: {item.latest.confirmed} | Deaths: {item.latest.deaths} | Recovered: {item.latest.recovered}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default App;
