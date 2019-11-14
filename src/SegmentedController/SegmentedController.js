import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Animated, { Easing } from "react-native-reanimated";

export const SegmentedControllerContext = React.createContext(null);

const SegmentedController = ({ style, children, onSegmentSelected }) => {
  const [items, setItems] = useState([]);
  const [pages, setPages] = useState([]);
  const [maskWidth, setMaskWidth] = useState(0);
  const [maskXPosition, setMaskXPosition] = useState(new Animated.Value(0));
  const styles = useStyles(items.length);

  const handleMaskViewReady = ({ width }) => {
    setMaskWidth(width);

    const updatedItems = [];
    const pages = [];
    children.forEach((item, index) => {
      updatedItems.push(React.cloneElement(item, { key: index, index: index }));
      if (item.props.page) {
        pages.push(item.props.page);
      }
    });
    setItems(updatedItems);
    setPages(pages);
  };

  const handleItemStateChange = index => {
    Animated.timing(maskXPosition, {
      toValue: maskWidth * index,
      easing: Easing.linear,
      duration: 120
    }).start(() => onSegmentSelected && onSegmentSelected(index));
  };

  return (
    <SegmentedControllerContext.Provider value={handleItemStateChange}>
      <View style={[styles.container, style]}>
        <Animated.View style={{ ...styles.activeMask, transform: [{ translateX: maskXPosition }] }} onLayout={event => handleMaskViewReady(event.nativeEvent.layout)} />
        {items}
      </View>
    </SegmentedControllerContext.Provider>
  );
};

const useStyles = childrenCount => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignContent: "stretch",
      alignItems: "stretch",
      height: 30,
      padding: 2,
      borderRadius: 8,
      backgroundColor: "#eee"
    },
    activeMask: {
      position: "absolute",
      left: 0,
      width: `${100 / childrenCount}%`,
      height: "100%",
      backgroundColor: "#fff",
      borderRadius: 6,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowRadius: 2,
      shadowOpacity: 0.2,
      margin: 2
    }
  });
};

export default SegmentedController;
