import 'server-only';
import {
  EXPERIMENTAL_FileUpload,
  Field,
  Label,
  FieldDescription,
  Button,
} from '@norwegianredcross/designsystem';

export default function FileUploadPage() {
  return (
    <main>
      <h1>FileUpload from a server page</h1>
      <form method="post" action="/upload" encType="multipart/form-data">
        <Field>
          <Label htmlFor="attachment">Attachment</Label>
          <EXPERIMENTAL_FileUpload>
            <FieldDescription id="attachment-help">Choose a PDF file.</FieldDescription>
            <Button asChild variant="secondary">
              <span>Choose file</span>
            </Button>
            <input
              id="attachment"
              name="attachment"
              type="file"
              accept="application/pdf"
              suppressHydrationWarning
            />
          </EXPERIMENTAL_FileUpload>
        </Field>
        <Button type="reset">Reset</Button>
      </form>
    </main>
  );
}
