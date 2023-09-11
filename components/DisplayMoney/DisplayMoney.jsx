import { style } from "./DisplayMoney.style";
import { Text } from "react-native";
export function DisplayMoney({ money, unit }) {
  return (
    <Text style={style.moneyText}>
      {money} {unit}
    </Text>
  );
}
