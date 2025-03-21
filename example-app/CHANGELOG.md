# Red Cross Design System - Change Log

## Login Page Redesign

### 2025-03-21

#### Token Updates
- Updated primary color token in the GitHub repository
- Login button color now reflects the new primary color value
- The design system automatically applies token changes throughout the application

#### Initial Implementation
- Integrated Digdir design system components into the login page
- Created custom Red Cross tokens in `redcross-tokens.css` to match the Red Cross design specifications
- Updated the main.jsx file to import the custom tokens after the design system imports
- Implemented the login page layout with proper styling and components

#### Layout Adjustments
- Made the login page expand to fill the screen while maintaining content width
- Fixed truncation issues in the VippsSection by adjusting height properties
- Ensured the main element expands to full width
- Set specific maximum widths for content sections:
  - VippsSection: 480px (left column with VIPPS login information)
  - LoginOptions: 350px (right column with login form and buttons)

#### Styling Improvements
- Added proper spacing and alignment between elements
- Implemented responsive design for different screen sizes
- Applied Red Cross design tokens for colors, typography, and spacing
- Added box shadows and border radius according to design specifications

#### Future Enhancements
- Further refinement of responsive behavior on smaller screens
- Accessibility improvements
- Additional form validation
