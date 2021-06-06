import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// import { HelloWordScreen } from './src/screens/HelloWordScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimentionsScreen} from './src/screens/DimentionsScreen';
// import { PositionsScreen } from './src/screens/PositionsScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
// import { HomeworkOneScreen } from './src/screens/HomeWorks/HomeworkOneScreen';
// import { HomeworkTwoScreen } from './src/screens/HomeWorks/HomeworkTwoScreen';
// import { HomeworkThreeScreen } from './src/screens/HomeWorks/HomeworkThreeScreen';
// import { HomeworkFour } from './src/screens/HomeWorks/HomeworkFour';
// import { HomeworkFiveScreen } from './src/screens/HomeWorks/HomeworkFiveScreen';
// import { HomeworkSix } from './src/screens/HomeWorks/HomeworkSix';
// import { HomeworkSevenScreen } from './src/screens/HomeWorks/HomeworkSevenScreen';
// import { HomeworkEight } from './src/screens/HomeWorks/HomeworkEight';
// import { HomeworkNineScreen } from './src/screens/HomeWorks/HomeworkNineScreen';
import { HomeworkTen } from './src/screens/HomeWorks/HomeworkTen';


export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* 
        <HelloWordScreen />
        <CounterScreen /> 
        */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimentionsScreen /> */}
      {/* <PositionsScreen /> */}
      {/* <FlexScreen /> */}
      {/* <HomeworkOneScreen /> */}
      {/* <HomeworkTwoScreen/> */}
      {/* <HomeworkThreeScreen /> */}
      {/* <HomeworkFour /> */}
      {/* <HomeworkFiveScreen /> */}
      {/* <HomeworkSix /> */}
      {/* <HomeworkSevenScreen /> */}
      {/* <HomeworkEight/> */}
      {/* <HomeworkNineScreen /> */}
      <HomeworkTen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
  },
});
