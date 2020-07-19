export const calculate = (values) => {
  if (values.length === 0) return 0;
  if (values.length === 1) return getValue(values[0]);
  return values.reduce((acc, cur) => {
    if (typeof acc === "object") {
      return getValue(acc) + getValue(cur);
    } else {
      return acc + getValue(cur);
    }
  });
};

const getValue = (value) => {
  return value.daysOfWork * value.numberOfPointsByDay * (1 - value.discount);
};
