import {StyleSheet, Text, View} from 'react-native';
function GoalItem(props) {

    return (
        <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem:{
        margin :8,
        borderradius :6,
        backgroundColor: '#5e0acc',
        padding:8,
        borderRadius: 6,
      },
      goalText : {
        color:'white'
      }
});