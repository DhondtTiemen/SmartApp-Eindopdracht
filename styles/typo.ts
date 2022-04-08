import { StyleSheet } from 'react-native';

import { colors } from './colors';
import { sizing } from './page';

export default StyleSheet.create({
    header1: {
        fontFamily: 'Abel_400Regular',
        fontSize: 32,
        lineHeight: 38,
        color: colors.black,
        marginBottom: sizing.baseLine * 2,
    },

    header2: {
        fontFamily: 'Abel_400Regular',
        fontSize: 24,
        lineHeight: 29,
        color: colors.black,
        marginBottom: sizing.baseLine,
    },

    header3: {
        fontFamily: 'Abel_400Regular',
        fontSize: 16,
        lineHeight: 19,
        color: colors.black,
        marginBottom: sizing.baseLine,
    },

    text: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 16,
        lineHeight: 21,
        color: colors.gray,
        marginBottom: sizing.baseLine,
    },
})