## Student Information

- *Name*: Fardowso Nuur Aadan
- *Class ID*: C1210074
- *Class Name*: CA211

---



# Calculate Total Target

This project contains a function `calculateTotalTarget` that calculates the total sales or productivity target based on working days, excluding Fridays, between two given dates.

## Project Description

The function computes the monthly and total target by:
1. Counting the working days in each month between a given `startDate` and `endDate`, excluding Fridays.
2. Evenly distributing the provided `totalAnnualTarget` across the months.
3. Returning the monthly target per month and the total target for the period specified.

## Instructions to Run the Code

1. Clone this repository to your local machine.
2. Navigate to the directory and open a terminal.
3. Run the script using Node.js:
   ```bash
   node calculateTarget.js
   ```
4. The script will output the results in JSON format.

## Function Explanation

The function `calculateTotalTarget` takes three arguments:
- `startDate`: The start date for the target calculation period (e.g., '2024-01-01').
- `endDate`: The end date for the target calculation period (e.g., '2024-03-31').
- `totalAnnualTarget`: The total target to be achieved in a year, which will be evenly distributed across the months.

The function then:
1. Loops through the date range, counting the days that are not Fridays.
2. Distributes the target across months that have workdays.
3. Returns the total and monthly targets in a formatted JSON structure.

## Example Usage

Here’s an example of how to call the function within the script:

```javascript
console.log(calculateTotalTarget('2024-01-01', '2024-03-31', 5220));
```

This will output:

```json
{
  "daysWorkedExcludingFridays": [21, 20, 21],
  "monthlyTargets": [435, 435, 435],
  "totalTarget": 1305
}
```

## Assumptions and Limitations

- The target is evenly distributed across all months with working days.
- Fridays are considered non-working days.
- Only the number of working days in each month is considered for target distribution, without accounting for holidays or weekends other than Fridays.

---

This structure covers all required sections from the guidelines. You can upload the project to GitHub and share the link as part of your submission.
