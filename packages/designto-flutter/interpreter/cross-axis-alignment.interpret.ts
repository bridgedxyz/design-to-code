import { CrossAxisAlignment } from "@bridged.xyz/flutter-builder";
import { CrossAxisAlignment as ReflectCrossAxisAlginment } from "@reflect-ui/core/lib";
/**
 * returns CrossAxisAlignment by counterAxisAlignItems
 * @param counterAxisAlignItems
 */
export function interpretCrossAxisAlignment(
  counterAxisAlignItems: ReflectCrossAxisAlginment
): CrossAxisAlignment {
  switch (counterAxisAlignItems) {
    case ReflectCrossAxisAlginment.start:
      return CrossAxisAlignment.start;
    case ReflectCrossAxisAlginment.end:
      return CrossAxisAlignment.end;
    case ReflectCrossAxisAlginment.stretch:
      return CrossAxisAlignment.stretch;
    case ReflectCrossAxisAlginment.center:
      return CrossAxisAlignment.center;
    default:
      return undefined;
  }
}
