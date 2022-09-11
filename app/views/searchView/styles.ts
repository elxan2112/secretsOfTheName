import { StyleSheet } from "react-native";

export const getStyle = (backgroundColor: string) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: backgroundColor
        },
        indicatorContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        textInputStyle: {
            flex: 1,
            marginRight: 10,
            borderRadius: 100,
            backgroundColor: "#fff"
        },
        searchContainer: {
            margin: 10,
            alignItems: "center",
            flexDirection: "row"
        }
    });
    return styles;
};
