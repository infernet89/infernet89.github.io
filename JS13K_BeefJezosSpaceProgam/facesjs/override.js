const override = (obj, overrides) => {
  if (!overrides || !obj) {
    return;
  }

  for (var _i = 0, _Object$entries = Object.entries(overrides); _i < _Object$entries.length; _i++) {
    const [key, value] = _Object$entries[_i];

    if (typeof value === "boolean" || typeof value === "string" || typeof value === "number" || Array.isArray(value)) {
      obj[key] = value;
    } else {
      // @ts-ignore
      override(obj[key], value);
    }
  }
};

export default override;