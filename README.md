Below is a detailed mapping of the user onboarding journey, broken down into each key step along with the necessary actions, fields, UI elements, and supporting information:

## Step 1: User Verification / Sign Up

**Objective:**
Securely register the user and verify their identity.

**Details:**

### Account Creation

**Fields:**
- Email address (or phone number)
- Password (with strength indicator)

**UI Elements:**
- Clean, minimal sign-up form
- Social login options (if applicable)

**Validation:**
- Real-time validation for email format
- Password strength meter with guidelines

**Action:**
- User submits form and then receives an OTP/email link.

### Verification Process

**Method:**
- OTP verification via SMS/email link confirmation

**UI/UX:**
- Simple screen with input field for OTP
- Timer indicating expiration (if using OTP)

**Feedback:**
- Success message upon correct input or an option to resend the code.

## Step 2: Personal Details Collection

**Objective:**
Gather essential personal and demographic information.

**Details:**

### Fields to Collect

- Date of Birth
- Country of Origin
- Country of Residence
- City of Residence
- Gender
- (Optional: Preferred Language, Current Education Level)

**UI Elements:**
- Progressive form design (multiple screens or a scrollable form)
- Dropdown selectors for country and city (pre-populated lists)
- Date-picker for birth date

**Validation & Guidance:**
- Field hints (e.g., “Select your city from the list”)
- Mark mandatory fields with an asterisk
- Inline error messages for missing/incorrect data

**User Action:**
- Fill out the form and click “Next” to proceed.

## Step 3: Onboarding Instructions / Welcome Screen

**Objective:**
Introduce the platform’s value proposition and outline the registration process.

**Details:**

### Content

- Welcome message that explains what FundMyFuture offers (both financing and job matching)
- Brief overview of the multi-step registration process
- Clear instructions on what to expect next

**UI Elements:**
- Engaging visuals or a short introductory video
- Progress indicator showing “Step 3 of X”
- “Get Started” or “Next” button

**Additional Feature:**
- Option to access a quick tour or FAQ section

## Step 4: Role Selection & Tailored Registration

**Objective:**
Customize the registration experience based on the user’s role (e.g., student, graduate, or SME).

**Details:**

### Role Selection

**Screen:**
- A clear menu or card layout where users select their role (e.g., “Student/Graduate” or “SME/Employer”)

**UI Elements:**
- Visual icons representing each role
- Brief description of what each role entails

### Tailored Registration Process for Students/Graduates

#### Financial Details

**Fields:**
- Funding requirements, scholarship details, current financial status
- Option to link to any existing financial aid applications

**UI Elements:**
- Clear input fields with contextual help (e.g., “How much funding do you need?”)

#### Assessments (Optional)

**Types:**
- Sponsorship Essay
- Values and Motivation Essay
- English Proficiency Test

**UI Elements:**
- Separate sections for each assessment
- Markers to show which assessments are optional and what benefits they offer (like increased visibility)

#### Additional Information

**Sections:**
- Humanitarian Status (if applicable)
- Diversity & Inclusion information

**UI Elements:**
- Checkbox or radio buttons for eligibility questions

### Tailored Registration for SMEs/Employers

**Fields:**
- Company details (name, size, industry)
- Hiring needs (role, job description, duration)

**UI Elements:**
- Business-specific forms with dynamic fields based on industry

**Validation:**
- Ensure company details are verified (possibly with a business email domain check)

**User Action:**
- Complete the role-specific fields and click “Continue.”

## Step 5: AI-Powered Application Support (FMF Application Support GPT)

**Objective:**
Assist users throughout the onboarding process using an AI helper.

**Details:**

### Features

- Persistent chat widget available on every onboarding screen
- Contextual suggestions: e.g., “Need help with your sponsorship essay?”
- Real-time error detection and guidance (e.g., "This field seems incomplete, please check.")

**UI Elements:**
- A small “Help” icon/button visible on each screen
- Chat interface that can be minimized or expanded
- Quick links to FAQs and tips

**User Action:**
- Users can click on the help button to ask questions or receive hints as they progress.

## Step 6: Review & Approval

**Objective:**
Allow users to verify their information before final submission.

**Details:**

### Review Screen

- Display a summary of all the information provided in previous steps
- Editable sections: Users can click “Edit” to modify any incorrect information

**UI Elements:**
- A clear summary layout with grouped sections (Personal Details, Role Details, Assessments, etc.)
- Progress bar showing completion status

**User Action:**
- Confirm the details by clicking “Submit”
- Option to “Save and Continue Later” if needed

## Step 7: Congratulations / Onboarding Complete

**Objective:**
Celebrate the completion of onboarding and inform users of the next steps.

**Details:**

### Content

- Personalized congratulatory message (e.g., “Congratulations, [Name]! You’re all set to start your journey with FundMyFuture.”)
- Clear outline of what happens next (e.g., application review, upcoming notifications)
- Next steps (e.g., access the dashboard, explore financing options, or check job matches)

**UI Elements:**
- An inspirational visual or animation
- Buttons to “Go to Dashboard” or “Explore Opportunities”
- A progress summary or “Your journey so far” overview

**User Action:**
- Click a button to be redirected to the main platform dashboard

## Additional Considerations

### Progress Indicator

- At every stage, a progress bar or step indicator should be visible to help users know how far they’ve come and what remains.

### Mobile Optimization

- Ensure that all steps are fully responsive and easily navigable on mobile devices, given the likely high mobile usage in Kenya.

### Data Security Assurance

- Reminders on each page that user data is secure, building trust with clear, simple privacy notices.

### Feedback Option

- Include a small “Feedback” button or survey link at the end of the process to collect insights on the onboarding experience.

This detailed mapping should give you a strong blueprint for designing an effective, user-friendly onboarding journey. Feel free to adjust or expand any steps based on user feedback during prototyping!