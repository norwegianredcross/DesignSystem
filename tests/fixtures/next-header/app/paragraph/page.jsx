import 'server-only';
import { Paragraph } from '@norwegianredcross/designsystem';

export default function Page() {
  return <main>
    <h1>Server-rendered paragraphs</h1>
    {['xs', 'sm', 'md', 'lg', 'xl'].flatMap(size =>
      ['default', 'short', 'long'].flatMap(variant =>
        ['regular', 'medium', 'bold'].flatMap(weight =>
          [false, true].map(italic => {
            const label = `${size}-${variant}-${weight}-${italic}`;
            return <Paragraph key={label} data-size={size} variant={variant} weight={weight} italic={italic}>{label}</Paragraph>;
          })
        )
      )
    )}
  </main>;
}
