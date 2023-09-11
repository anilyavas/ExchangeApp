import { style } from "./ButtonConvert.style";
import { TouchableOpacity, Text } from "react-native";
export function ButtonConvert({ unit, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      <Text style={style.buttonText}>Covert to {unit}</Text>
    </TouchableOpacity>
  );
}
