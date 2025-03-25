import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';

export default function App() {

 const [enteredGoalText,setEnteredGoalText] = useState('');
 const [courseGoals,setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }; 

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text:enteredGoalText,id :Math.random().toString()},
    ]);
  };
  return (
    <View style ={styles.appContainer}>
      <View style={styles.inputContainer} >
        <TextInput  placeholder= ' Course Goal' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
      <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
        return <GoalItem text={itemData.item.text}/>;
      }} 
      keyExtractor={(item,index) => {
        return item.id;
      }}
      alwaysBounceVertical={false} />
      

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop:50,
    paddingHorizontal : 16,
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems :'center',
    marginBottom: 4,
    borderBottomWidth:2,
    borderBottomColor: '#cccccc',

  },
  textInput :{
    borderWidth:1,
    borderColor:'#cccccc',
    width : '70%',
    marginRight: 8,
    marginBottom:10,
    padding:8,
  },
  goalsContainer: {
    flex:5,
  },
  

});
