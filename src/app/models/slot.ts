import { Group } from "./group";
import { SlotIdentifier } from "./slot-identifier";

export interface Slot {
  identifier: SlotIdentifier,
  groups: Group[]
}

export function deepCopy(slot: Slot): Slot {
  return {
    identifier: slot.identifier,
    groups: [...slot.groups.map(group => ({
      date: group.date,
      entries: [...group.entries]
    }))]
  };
}
