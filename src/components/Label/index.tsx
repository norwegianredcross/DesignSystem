import { forwardRef, type LabelHTMLAttributes } from 'react';

// The external dependency '@digdir/designsystemet-react' could not be resolved in this environment.
// This version uses a standard HTML <label> element to ensure the component is functional here.

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  // You can add any additional custom props here if needed
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  return <label ref={ref} {...props} />;
});

Label.displayName = 'Label';

