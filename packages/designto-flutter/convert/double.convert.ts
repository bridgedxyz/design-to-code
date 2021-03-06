import { double } from "@bridged.xyz/flutter-builder";
import { roundNumber } from "@reflect-ui/uiutils";

export function roundDouble(double: double): double {
  if (typeof double === "number") {
    return roundNumber(double);
  } else {
    return double;
  }
}
