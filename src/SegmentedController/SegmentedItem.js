import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SegmentedControllerContext } from "./SegmentedController";

const SegmentedItem = ({ index, style, title }) => {
  const handleItemStateChange = useContext(SegmentedControllerContext);

  return (
    <View style={[style, styles.container]}>
      <TouchableWithoutFeedback
        onPress={() => {
          handleItemStateChange(index);
        }}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    height: "100%",
    borderRadius: 6
  },
  title: {
    textAlign: "center",
    fontWeight: "500"
  }
});

export default SegmentedItem;
