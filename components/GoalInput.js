import {StyleSheet, View, TextInput, Button} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
     const [enteredGoalText,setEnteredGoalText] = useState('');

     function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }; 

      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      };

return(
    <View style={styles.inputContainer} >
    <TextInput  
     style={styles.textInput}
     placeholder= "My Goals..."
     onChangeText={goalInputHandler} 
     value = {enteredGoalText}
     />
    <Button title='Add Goal' onPress={addGoalHandler}></Button>
  </View>
);

}

export default GoalInput

const styles = StyleSheet.create({
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
});