import { Group } from "./group";
import { SlotIdentifier } from "./slot-identifier";

export interface Slot {
  identifier: SlotIdentifier,
  groups: Group[]
}
