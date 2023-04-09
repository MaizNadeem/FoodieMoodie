import { TouchableOpacity, View, Text, Image } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const RectButton = ({ minWidth, fontSize, handlePress, title, ...props }) => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.primary,
                    borderRadius: SIZES.small,
                    minWidth: minWidth,
                    padding: SIZES.font,
                    ...SHADOWS.dark,
                    ...props,
                }}
                onPress={handlePress}
            >
                <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: fontSize,
                    color: COLORS.white,
                }}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}