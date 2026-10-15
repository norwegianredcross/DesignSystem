import { createElement as h } from 'react';
import { EXPERIMENTAL_FileUpload } from '../../src/components/FileUpload';
import { Field, FieldDescription } from '../../src/components/Field';
import { Button } from '../../src/components/Button';
import { Label } from '../../src/components/Label';

export function renderFileUpload(multiple = false, disabled = false) {
  return h(
    'main',
    null,
    h('h1', null, 'FileUpload baseline'),
    h(
      'form',
      { method: 'post', action: '/upload', encType: 'multipart/form-data' },
      h(
        Field,
        null,
        h(Label, { htmlFor: 'attachment' }, 'Attachment'),
        h(
          EXPERIMENTAL_FileUpload,
          null,
          h(FieldDescription, { id: 'attachment-help' }, 'Choose a PDF file.'),
          h(Button, { asChild: true, variant: 'secondary' }, h('span', null, 'Choose file')),
          h('input', {
            id: 'attachment',
            type: 'file',
            name: 'attachment',
            required: true,
            multiple,
            disabled,
            accept: 'application/pdf',
          })
        )
      ),
      h('button', { type: 'submit' }, 'Upload'),
      h('button', { type: 'reset' }, 'Reset')
    )
  );
}
