import { StyleSheet } from 'react-native';

import { colors } from './colors';
import { sizing } from './page';

export default StyleSheet.create({
    header1: {
        fontFamily: 'Abel_400Regular',
        fontSize: 32,
        color: colors.black,
        marginBottom: sizing.baseLine * 2,
    },

    header2: {
        fontFamily: 'Abel_400Regular',
        fontSize: 24,
        color: colors.black,
        marginBottom: sizing.baseLine,
    },

    header3: {
        fontFamily: 'Abel_400Regular',
        fontSize: 16,
        color: colors.black,
        marginBottom: sizing.baseLine,
    },

    text: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 16,
        color: colors.gray,
        marginBottom: sizing.baseLine,
    },
})