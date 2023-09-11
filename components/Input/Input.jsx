import { View, TextInput, Text } from "react-native";
import { style } from "./Input.style";
export function Input({ defaultValue, onChange, unit }) {
  return (
    <View style={style.container}>
      <TextInput
        style={style.inputBar}
        placeholder="Type your amount"
        defaultValue={defaultValue.toString()}
        onChangeText={(text) => {
          onChange(text);
        }}
      />
      <Text style={style.unit}>{unit}</Text>
    </View>
  );
}
