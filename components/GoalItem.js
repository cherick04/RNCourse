import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalLabel}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
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
