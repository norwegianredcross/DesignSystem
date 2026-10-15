import { EXPERIMENTAL_FileUpload as DigdirFileUpload } from '@digdir/designsystemet-react';

export type { FileUploadProps } from '@digdir/designsystemet-react';

/**
 * Experimental Digdir file-upload container. Provide a labelled native file input.
 * Uses Digdir's appearance unchanged. Selected-file feedback is consumer-owned.
 * Upload handling and server validation belong to the consumer application.
 * @experimental
 */
export const EXPERIMENTAL_FileUpload: typeof DigdirFileUpload = DigdirFileUpload;
