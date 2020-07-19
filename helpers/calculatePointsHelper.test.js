import { calculate } from "./calculatePointsHelper";

const values = [
  {
    daysOfWork: 5,
    numberOfPointsByDay: 3,
    discount: 0.3,
  },
];

test("calculate points for one user", () => {
  expect(calculate(values)).toBe(10.5);
});

test("calculate points for empty values", () => {
  expect(calculate([...values, ...values])).toBe(21);
});

test("calculate points for empty values", () => {
  expect(calculate([])).toBe(0);
});
