
import {
  Radio as DigDirRadio,
  type RadioProps as DigDirRadioProps,
  Fieldset as DigDirFieldset,
  type FieldsetProps as DigDirFieldsetProps,
  useRadioGroup as useDigDirRadioGroup, 
} from '@digdir/designsystemet-react';


/**
 * Radio-komponent og tilhørende Fieldset/useRadioGroup fra DigDir.
 * Brukes for radioknapper.
 */
export type RadioProps = DigDirRadioProps;
export type FieldsetProps = DigDirFieldsetProps; 


export const Radio: typeof DigDirRadio = DigDirRadio;
export const Fieldset: typeof DigDirFieldset = DigDirFieldset;
export const useRadioGroup: typeof useDigDirRadioGroup = useDigDirRadioGroup; 
