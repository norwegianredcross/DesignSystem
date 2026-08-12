import { forwardRef, ReactNode } from 'react';
import {
  Alert as DigDirAlert,
  type AlertProps as DigDirAlertProps,
} from '@digdir/designsystemet-react';
import { Heading } from '../Heading';

/**
 * Alert-komponent for å vise viktige meldinger til brukeren.
 * Utvider DigDir sin Alert med en synlig tittel.
 */
export interface AlertProps extends DigDirAlertProps {
  children?: ReactNode;
  /**
   * Synlig tittel øverst i varselet. Uten `titleLevel` rendres den som
   * visuelt fremhevet tekst (ikke en overskrift), slik at dokumentets
   * overskriftsrekkefølge ikke brytes.
   */
  title?: string;
  /**
   * Semantisk overskriftsnivå (2–6) for tittelen. Angi nivået som passer
   * inn i sidens overskriftshierarki der varselet vises.
   */
  titleLevel?: 2 | 3 | 4 | 5 | 6;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { title, titleLevel, children, ...rest } = props;

  return (
    <DigDirAlert ref={ref} {...rest}>
      {title &&
        (titleLevel ? (
          <Heading level={titleLevel} data-size="2xs" style={{ marginBottom: 'var(--ds-size-1)' }}>
            {title}
          </Heading>
        ) : (
          <p className="ds-heading" data-size="2xs" style={{ marginBottom: 'var(--ds-size-1)' }}>
            {title}
          </p>
        ))}
      {children}
    </DigDirAlert>
  );
});

Alert.displayName = 'Alert';
