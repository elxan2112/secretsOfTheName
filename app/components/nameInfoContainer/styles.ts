import { StyleSheet } from "react-native";

export const getStyle = () => {
    const styles = StyleSheet.create({
        text: {
            fontSize: 18,
            color: "#fff",
            flexWrap: "wrap",
            marginBottom: 10,
            justifyContent: "center"
        },
        container: {
            flex: 1,
            marginHorizontal: 10
        },
        emptyContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        countriesContainer: {
            flexWrap: "wrap",
            alignItems: "center",
            flexDirection: "row"
        },
        flagContainer: {
            marginBottom: 10,
            marginHorizontal: 3
        }
    });
    return styles;
};
