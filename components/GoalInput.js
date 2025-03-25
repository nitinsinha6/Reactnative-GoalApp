import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';
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
    <Modal visible = {props.visible} animationType='slide'> 
    <View style={styles.inputContainer} >
    <TextInput  
     style={styles.textInput}
     placeholder= "My Goals..."
     onChangeText={goalInputHandler} 
     value = {enteredGoalText}
     />
     <View style={styles.buttonContainer}>
        <View style={styles.button}> 
            <Button title='Add Goal' onPress={addGoalHandler}></Button>
        </View>
        <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} ></Button>
        </View>
     </View>
   
  </View>
  </Modal>
);
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems :'center',
        marginBottom: 4,
        borderBottomWidth:2,
        borderBottomColor: '#cccccc',
        padding:16,
    
      },
      textInput :{
        borderWidth:1,
        borderColor:'#cccccc',
        width : '100%',
        marginBottom:10,
        padding:8,
      },
      buttonContainer:{
        marginTop:16,
        flexDirection : 'row',
      },
      button :{
        width: 100,
        marginHorizontal :8
      }
});