import ShowData from "../components/ShowData";
import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/style';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <ShowData />
            </View>
        </View>
    )
}