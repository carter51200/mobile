import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import TodayScreen from './TodayScreen';
import GraphScreen from './GraphScreen';
import FutureFitScreen from './FutureFitScreen';

const MainScreen = () => {
  const [activeTab, setActiveTab] = useState('Today');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Today' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('Today')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'Today' && styles.activeTabButtonText,
            ]}
          >
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Graph' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('Graph')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'Graph' && styles.activeTabButtonText,
            ]}
          >
            Graph
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'FutureFit' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('FutureFit')}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === 'FutureFit' && styles.activeTabButtonText,
            ]}
          >
            FutureFit
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {activeTab === 'Today' && <TodayScreen />}
        {activeTab === 'Graph' && <GraphScreen />}
        {activeTab === 'FutureFit' && <FutureFitScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#ECEFF1',
  },
  activeTabButton: {
    backgroundColor: '#007AFF',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activeTabButtonText: {
    color: '#FFF',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default MainScreen;