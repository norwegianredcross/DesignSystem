import { useId } from 'react';
import { Button } from '../Button';
import { Field } from '../Field';
import { Label } from '../Label';
import { ValidationMessage } from '../ValidationMessage';
import { EXPERIMENTAL_FileUpload, type FileUploadProps } from './index';
import styles from './examples.module.css';

type ExampleProps = {
  multiple?: boolean;
  disabled?: boolean;
  error?: string;
  uploadProps?: FileUploadProps;
};

export function UploadExample({ multiple, disabled, error, uploadProps }: ExampleProps) {
  const id = useId();
  return (
    <form className={styles.example} action="/upload" method="post" encType="multipart/form-data">
      <Field>
        <Label htmlFor={id}>Vedlegg</Label>
        <EXPERIMENTAL_FileUpload {...uploadProps}>
          <Field.Description id={`${id}-action`}>
            {multiple ? 'Velg eller slipp filer her' : 'Velg eller slipp en fil her'}
          </Field.Description>
          <Field.Description id={`${id}-help`}>PDF, maks 5 MB per fil.</Field.Description>
          <Button asChild variant="secondary" disabled={disabled}>
            <span>{multiple ? 'Velg filer' : 'Velg fil'}</span>
          </Button>
          <input
            // Field may connect descriptions before React hydrates this native input.
            suppressHydrationWarning
            id={id}
            name="attachments"
            type="file"
            accept="application/pdf"
            multiple={multiple}
            disabled={disabled}
            aria-invalid={error ? true : undefined}
          />
        </EXPERIMENTAL_FileUpload>
        {error && <ValidationMessage id={`${id}-error`}>{error}</ValidationMessage>}
      </Field>
      <div>
        <Button type="reset" variant="secondary" disabled={disabled}>
          Tilbakestill
        </Button>
      </div>
    </form>
  );
}
