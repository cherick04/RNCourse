import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  function deleteGoalHandler() {
    props.onDeleteItem(id);
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalLabel}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalLabel: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#9571c5ff",
  },
  goalText: {
    color: "white",
  },
});
