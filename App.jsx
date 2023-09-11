import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import { style } from "./App.style";
import dollar from "./assets/dollar.jpg";
import { Input } from "./components/Input/Input";
import { useState } from "react";
import { DisplayMoney } from "./components/DisplayMoney/DisplayMoney";
import { UNITS, getOppositeUnit, convertMoneyTo } from "./utils/money";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";
export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("$");
  const oppositeUnit = getOppositeUnit(currentUnit);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.page}>
        <View style={style.workspace}>
          <DisplayMoney
            unit={oppositeUnit}
            money={convertMoneyTo(inputValue, oppositeUnit)}
          />
          <Input unit={currentUnit} onChange={setInputValue} defaultValue={0} />
          <ButtonConvert
            onPress={() => {
              setCurrentUnit(oppositeUnit);
            }}
            unit={currentUnit}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
