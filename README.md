# Employee Dashboard Project - Intern Onboarding

Welcome to the Employee Dashboard project! This README contains all the information you need to get started. Please follow these instructions carefully and feel free to ask questions if you get stuck.

---

## Project Overview

This project is a small part of our larger HRMS/Grievance system. Your task is to build the Employee Dashboard using the tools and practices outlined below. The goal is to assess your ability to implement effective UI/UX design and utilize the technologies we use in our main project.

## Optional: Figma Design
Before you start coding, You could layout your plans for the dashboard using figma or any other design tool. This will help you visualize the layout and design of the dashboard and will be seen as plus points for your submission.

---

## Tools and Technologies

1. **Next.js**: React framework for building the application.
2. **ShadCN UI**: Component library for building reusable and accessible UI components.
3. **CSS Theme**: Use the theme and colors defined in `globals.css` (provided in this project).

---

## Getting Started

### 1. Clone the Repository

```bash
$ git clone <repository-url>
$ cd <repository-folder>
```

### 2. Install Dependencies

Make sure you have Node.js (v18 or higher) installed. Then run:

```bash
$ npm install
```

### 3. Run the Development Server

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Directory Structure

- **`/app/Employee`**: Please work in this directory  
- **`/app/page_name`**: Contains the main pages of the project.
- **`/components`**: Contains reusable UI components. You will use ShadCN UI to build new components here.
- **`/styles/globals.css`**: Defines the global theme and colors for the project.

---

## Design Guidelines

### 1. UI/UX Practices

- Maintain a consistent and clean design.
- Ensure responsiveness for different screen sizes.
- Prioritize accessibility (e.g., ARIA labels, keyboard navigation).
- Follow the modern design trends (minimalism, proper spacing, readable fonts).

### 2. Color and Theme

Use the colors and styles defined in `globals.css`. This ensures consistency with our existing project.

### 3. ShadCN UI

- Use ShadCN components effectively to avoid building components from scratch.
- Refer to the [ShadCN UI Documentation](https://ui.shadcn.com/docs/components/accordion) for guidance.

---

## Task Outline

### Employee Dashboard Features

1. **Dashboard Overview**:
   - Display a welcome message.
   - Create placeholder cards for features such as attendance, leaves, and notifications.

2. **Layout and Design**:
   - Use a responsive layout.
   - Ensure proper use of components like `Card`, `Button`, `Input`, etc., from ShadCN UI.

3. **UI Interactivity**:
   - Implement interactions, such as buttons for navigation or toggling visibility of elements.
   - Use animations or transitions to enhance the user experience.
   - Implement a dark mode toggle button.
   - Make sure to use the toast component for notifications.
   - Also make sure to use the modal component for any popups.
   - Kudos and points for using the Tooltip component as well

---

## Helpful Commands

- **Run the development server**: `npm run dev`
- **Add a new ShadCN component**:

  ```bash
  npx shadcn@latest add <component-name>
  ```

---

## Expectations

1. Submit your progress regularly through Git commits.
2. Write clean and readable code.
3. Document your thought process in commit messages.
4. Ask questions if you are unsure about anything.
5. We need a complete and thorought implmentation of the dashboard.
6. Make sure to use the components provided by ShadCN UI.
7. Make sure to use the colors and theme defined in `globals.css`.
8. Be creative and showcase your design skills.

---

# HRMS Employee View UI Guide

## 1. Dashboard (Overview Stats)
The dashboard serves as the central hub for employees, providing quick access to key information.

### Widgets & Features:
- **Header Section:**
  - Welcome message (e.g., “Welcome, [Employee Name]”)
  - Current date and time
  - Profile photo with quick access to settings or logout
- **Key Metrics Overview (Cards):**
  - **Attendance Status:** Display today’s attendance (e.g., "Present," "Absent," or "On Leave").
  - **Hours Worked This Month:** Total hours logged vs. required hours.
  - **Pending Payroll:** Highlight the status of the latest salary/payslip (e.g., "Paid," "Pending").
  - **Grievances:** Number of open grievances with a direct link to the Grievance module.
- **Calendar Widget:**
  - Upcoming holidays, leaves, or deadlines.
  - Mark attendance records directly on the calendar for quick access.
- **Notifications Area:**
  - Alerts for missing attendance, updated payslips, or grievance resolutions.
- **Quick Links:**
  - Shortcut buttons to modules (e.g., Attendance, Payroll, Grievances).

### User Flow:
1. Employee logs in and lands on the dashboard.
2. Reviews today’s attendance status, payroll highlights, and grievance updates.
3. Navigates to other modules using quick links or notification prompts.

---

## 2. Attendance Module
The attendance module allows employees to view their attendance records and analyze their working hours.

### Widgets & Features:
- **Attendance Overview (Header):**
  - Total days worked this month.
  - Total overtime hours.
  - Leave status (e.g., "3 leaves used out of 15").
- **Calendar View:**
  - A detailed calendar with attendance color codes (e.g., green for "Present," red for "Absent," yellow for "On Leave").
  - Hovering over a day shows details (e.g., clock-in/out times, overtime).
- **Attendance History Table:**
  - **Columns:** Date, Status, Clock-in Time, Clock-out Time, Overtime Hours.
  - **Filters:** Month/year selection, specific statuses (e.g., "Only Overtime Days").
  - **Search Bar:** Find attendance for a specific date.
- **Overtime Tracking Section:**
  - Line chart or bar chart showing daily/weekly/monthly overtime trends.
  - Breakdown of overtime hours vs. regular hours worked.
- **Action Buttons:**
  - **Request Correction:** Allow employees to submit attendance correction requests (e.g., "Forgot to clock in").
  - **Apply for Leave:** Redirects to a leave application form.

### User Flow:
1. Employee checks the current month’s attendance summary on the calendar.
2. Filters the history to review overtime details or analyze patterns.
3. Submits a correction request if a discrepancy is noticed.

---

## 3. Payroll Module
The payroll module focuses on financial transparency and easy access to payment-related information.

### Widgets & Features:
- **Payroll Summary (Header):**
  - Last paid salary date and amount.
  - Upcoming payroll schedule (e.g., "Next salary on January 31").
  - Tax deductions summary (e.g., "10% deducted for tax").
- **Payslip Generator:**
  - **Download Payslip Button:** Provides a PDF version of payslips.
  - **Detailed Payslip Preview:**
    - **Sections:** Earnings (basic salary, bonuses), Deductions (taxes, loan repayments), Net Pay.
- **Payment History Table:**
  - **Columns:** Month, Gross Pay, Deductions, Net Pay, Status (Paid/Unpaid).
  - **Filters:** Year selection, status (e.g., "Unpaid months").
- **Tax and Bonus Info Section:**
  - Tax deduction trends for the year (displayed via a bar graph).
  - Bonus breakdown (e.g., yearly bonuses or performance-based bonuses).
- **Action Buttons:**
  - **Raise Payroll Query:** Link to submit queries related to salary discrepancies.
  - **Request Advance Salary:** Optional feature for employees to request salary advances.

### User Flow:
1. Employee views the latest payroll summary and downloads their payslip.
2. Reviews payment history and filters for unpaid months if necessary.
3. Raises a query for missing or incorrect payments.

---

## 4. Grievances Module
The grievances module should enable employees to track and manage their complaints seamlessly.

### Widgets & Features:
- **Grievance Overview (Header):**
  - Number of active/open grievances.
  - Average resolution time (e.g., "7 days").
- **Grievance History Table:**
  - **Columns:** Grievance ID, Subject, Status (Open/In Progress/Resolved), Submission Date, Last Update.
  - **Filters:** Status, date range, priority level.
  - Sorting by last updated or submission date.
- **Grievance Details Page:**
  - **Detailed View for a Selected Grievance:**
    - **Subject:** Grievance title.
    - **Description:** Full grievance description.
    - **Status Timeline:** Graphical representation of status changes (e.g., Open → In Progress → Resolved).
    - **Comments Section:** Interactive area for employee and HR/admin communication.
- **Raise New Grievance Form:**
  - **Fields:** Subject, Description, Priority Level (Low/Medium/High), Upload Attachments (if any).
  - Confirmation message on successful submission.
- **Action Buttons:**
  - **Edit Grievance:** Employees can update grievance details if allowed.
  - **Close Grievance:** Employees can close resolved grievances.

### User Flow:
1. Employee reviews the status of active grievances on the overview page.
2. Opens a specific grievance to check updates or communicate with HR.
3. Submits a new grievance or updates an existing one if necessary.

---

## General UI/UX Recommendations for All Modules:
1. **Responsive Design:** Ensure the layout is optimized for mobile and desktop views.
2. **Consistent Navigation:** Use a sticky sidebar or top navigation bar for easy switching between modules.
3. **Interactive Elements:**
   - Hover effects on tables and charts.
   - Animations for loading or updating data.
4. **Search and Filter Functionality:**
   - Global search bar for quick access to data across modules.
5. **Error Handling and Notifications:**
   - Clear error messages for failed actions (e.g., “Could not submit grievance. Try again later.”).
   - Success notifications for completed actions.
6. **Accessibility Features:**
   - Text resizing and color contrast options.
   - Screen reader compatibility.

---

## Potential Scenarios to Consider:
- **Attendance:** Employee notices a missing clock-in and submits a correction request.
- **Payroll:** An employee sees a lower-than-expected salary and raises a payroll query.
- **Grievance:** An employee follows up on a long-pending grievance and requests escalation.
- **Dashboard:** The employee quickly navigates to their pending grievances via a notification alert.

This guide ensures your Employee View UI is functional, intuitive, and addresses real-world employee needs.


## Resources

1. [Next.js Documentation](https://nextjs.org/docs)
2. [ShadCN UI Documentation](https://shadcn.dev/)
3. [CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS)

---

## Notes

- This is your opportunity to showcase your understanding of UI/UX design and frontend development skills.
- Don’t hesitate to explore and experiment, but ensure consistency with the provided theme and practices.

Good luck, and happy coding! 🎉

Regards Talha.

