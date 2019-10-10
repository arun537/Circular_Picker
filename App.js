/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import { Svg, G, Path, Text } from 'react-native-svg';

import CircularSlider from './components/CircularSlider';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {

  state = { startAngle: 0, angleLength: 0 }

  render() {
    var date = new Date();
    var currentDate = date.getDate();
    return (
      <SafeAreaView>
        <CircularSlider
          startAngle={this.state.startAngle}
          angleLength={this.state.angleLength}
          onUpdate={({ startAngle, angleLength }) => this.setState({ startAngle, angleLength })}
          segments={5}
          strokeWidth={10}
          radius={145}
          gradientColorFrom="white"
          gradientColorTo="white"
          showClockFace
          clockFaceColor="#9d9d9d"
          bgCircleColor="transparent"
          stopIcon={<G scale="1" transform={{ translate: "0, 4" }}><G>
            <Text textAnchor="middle">{currentDate}</Text>
          </G></G>}
          startIcon={<G scale="1" transform={{ translate: "0, 4" }}><G>
            <Text textAnchor="middle">13</Text>
          </G></G>}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
