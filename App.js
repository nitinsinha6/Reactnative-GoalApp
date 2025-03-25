import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const[modalisVisible,setModalIsVisible] = useState(false);
 const [courseGoals,setCourseGoals] = useState([]);

 function startAddGoalhandler(){
  setModalIsVisible(true);
 }
 function endAddGoalhandler(){
  setModalIsVisible(false);
 }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text:enteredGoalText,id :Math.random().toString()},
    ]);
    endAddGoalhandler();
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
    console.log('Delete')
  }

  return (
    <View style ={styles.appContainer}>
      <Button 
        title='Add new Goal' 
        color="#5e0acc"
        onPress={startAddGoalhandler}
        />
     <GoalInput visible={modalisVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalhandler}/>
      <View style={styles.goalsContainer}>
      <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {
        return (
          <GoalItem 
            text={itemData.item.text}
            onDeleteItem={deleteGoalHandler}
            id={itemData.item.id}
            />
          );
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
  goalsContainer: {
    flex:5,
  },
});
