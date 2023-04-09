import { TextInput, View } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const InputLogin = ({ minWidth, label, isPasswordField, onChangeText, value }) => {
    return (
        <View style={{
            minWidth: minWidth,
            height: 50,
            borderRadius: SIZES.small,
            backgroundColor: 'white',
            marginBottom: 20,
            justifyContent: 'center',
            ...SHADOWS.light,
         }}>
            <TextInput
                style = {{
                    height: 50,
                    paddingLeft: 20,
                    borderRadius: SIZES.small,
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.font,
                    color: '#333',
                }}
                placeholder= {label}
                placeholderTextColor={COLORS.placeholder}
                secureTextEntry={isPasswordField}
                onChangeText={onChangeText}
            />
        </View>
    )
}