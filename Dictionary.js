class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class Dictionary {
  constructor() {
    this.table = {};
  }

  set(key, value) {
    if (key !== null && value !== null) {
      let tableKey = key.toString();
      this.table[tableKey] = new ValuePair(tableKey, value);
      return true;
    }
    return false;
  }

  hasKey(key) {
    key = key.toString();
    return this.table[key] !== null;
  }

  remove(key) {
    if (key !== null && key !== undefined) {
      key = key.toString();
      delete this.table[key];
      return true;
    }
    return false;
  }

  get(key) {
    if (key !== null && key !== undefined) {
      key = key.toString();
      if (this.hasKey(key)) {
        return this.table[key];
      }
    }
    return undefined;
  }

  keyValues() {
    return Object.values(this.table);
  }

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }
}

module.exports = { Dictionary };
