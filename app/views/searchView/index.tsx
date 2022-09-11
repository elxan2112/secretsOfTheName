import React, { FC, memo, useState, useMemo, useEffect, useRef } from "react";
import { Pressable, TextInput, View, ActivityIndicator } from "react-native";
import { Transition, Transitioning, TransitioningView } from "react-native-reanimated";
import { selectIsLoading, selectSearchList } from "../../modules/redux/search/selectors";
import { NameInfoContainer } from "../../components/nameInfoContainer";
import { searchFetch } from "../../modules/redux/search/slice";
import { useAppDispatch } from "../../modules/redux/hooks";
import { SearchIcon } from "../../assets/svg/searchIcon";
import { shallowEqual, useSelector } from "react-redux";
import { getStyle } from "./styles";

interface Props {

}

export const SearchView: FC<Props> = memo(() => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("#9799CC");
    const isLoading = useSelector(selectIsLoading, shallowEqual);
    const nameInfo = useSelector(selectSearchList, shallowEqual);
    const styles = useMemo(() => getStyle(backgroundColor), [backgroundColor]);

    const ref = useRef<TransitioningView>(null);

    const transition = (
        <Transition.Together>
            <Transition.In type="fade" durationMs={400} />
            <Transition.Out type="fade" durationMs={500} />
        </Transition.Together>
    );

    useEffect(() => {
        if (isLoading) {
            setIsDisabled(true);
            setBackgroundColor("#9799CC");
        }
        else {
            setName("");
            setIsDisabled(false);
            if (nameInfo.gender == "male") {
                setBackgroundColor("#4287f5");
            } else if (nameInfo.gender == "female") {
                setBackgroundColor("#f037fa");
            }
        }
        if (ref.current) {
            ref.current.animateNextTransition();
        }
    }, [isLoading]);

    return (
        <Transitioning.View style={styles.container} {...{ ref, transition }}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.textInputStyle} onChangeText={setName} value={name} />
                <Pressable disabled={isDisabled || !name} onPress={() => dispatch(searchFetch(name))} style={({ pressed }) => ({ padding: 5, opacity: pressed ? 0.5 : 1 })}>
                    <SearchIcon />
                </Pressable>
            </View>
            {isLoading
                ? <View style={styles.indicatorContainer}>
                    <ActivityIndicator size={"large"} color={"pink"} />
                </View>
                : <NameInfoContainer nameInfo={nameInfo} />
            }
        </Transitioning.View>
    );
});