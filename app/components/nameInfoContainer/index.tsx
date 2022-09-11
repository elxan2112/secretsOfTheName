import React, { FC, memo, useMemo } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import { WomanIcon } from "../../assets/svg/womanIcon";
import CountryFlag from "react-native-country-flag";
import { ManIcon } from "../../assets/svg/manIcon";
import { INameInfo } from "../../entities";
import { IMAGES } from "../../config";
import { getStyle } from "./styles";

interface Props {
    nameInfo: INameInfo
}

export const NameInfoContainer: FC<Props> = memo(({ nameInfo }: Props) => {
    const styles = useMemo(() => getStyle(), []);
    let Icon = <></>;

    switch (nameInfo.gender) {
        case "male":
            Icon = <ManIcon />;
            break;
        case "female":
            Icon = <WomanIcon />;
            break;
        default:
            break;
    }

    return (
        <>
            {nameInfo.name && (nameInfo.count > 0) ?
                <ScrollView style={styles.container}>
                    <Text style={styles.text}>
                        Name: {nameInfo.name}
                    </Text>
                    <Text style={styles.text}>
                        Number of people with this name: {nameInfo.count}
                    </Text>
                    <Text style={styles.text}>
                        Gender: {Icon}
                    </Text>
                    <Text style={styles.text}>
                        The average age of people with this name: {nameInfo.age}
                    </Text>
                    <View style={styles.countriesContainer}>
                        <Text style={styles.text}>
                            Countries:
                        </Text>
                        {nameInfo?.country.map((item, index) => (
                            <View key={index} style={styles.flagContainer} >
                                <CountryFlag isoCode={item.country_id} size={25} />
                            </View>
                        ))}
                    </View>
                </ScrollView>
                : <View style={styles.emptyContainer}>
                    <Image source={IMAGES.EMPTY_SEARCH} />
                </View>
            }
        </>
    );
});