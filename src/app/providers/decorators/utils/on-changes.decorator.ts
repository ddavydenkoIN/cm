import { CmSimpleChange } from "../../../models";

export function CmOnChange<T = any>(callback: (value: T, simpleChange?: CmSimpleChange<T>) => void | T) {
  const cachedValueKey = Symbol();
  const isFirstChangeKey = Symbol();

  return (target: any, key: PropertyKey) => {
    Object.defineProperty(target, key, {
      set: function (newValue) {
        // change status of "isFirstChange"
        this[isFirstChangeKey] = this[isFirstChangeKey] === undefined;

        if (this[isFirstChangeKey] || this[cachedValueKey] !== newValue) {
          const oldValue = this[cachedValueKey];
          this[cachedValueKey] = callback.call(this, newValue, {
            firstChange: this[isFirstChangeKey],
            previousValue: oldValue,
            currentValue: newValue,
            isFirstChange: () => this[isFirstChangeKey],
          }) || newValue;
        }
      },
      get: function () {
        return this[cachedValueKey];
      },
    });
  };
}
