/** Practice private-pay fee schedule. Insurance out-of-pocket cost is separate. */
export const PRACTICE_FEES = [
  { label: "Phone consultation", duration: null, amount: "No charge" },
  { label: "Individual evaluation", duration: "60 minutes", amount: "$225" },
  { label: "Individual therapy", duration: "50 minutes", amount: "$175" },
  { label: "Couples evaluation", duration: "60 minutes", amount: "$275" },
  { label: "Couples therapy", duration: "50 minutes", amount: "$225" },
] as const;

export const FEE_SUMMARY =
  "phone consultation no charge; individual evaluation (60 min) $225; individual therapy (50 min) $175; couples evaluation (60 min) $275; couples therapy (50 min) $225";
