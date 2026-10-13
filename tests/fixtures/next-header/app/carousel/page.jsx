import 'server-only';
import { Carousel } from 'rk-designsystem';

const src = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300"><rect width="600" height="300" fill="red"/></svg>',
);

// Reuse the existing packed-package Next consumer and production build.
export default async function Page() {
  return (
    <main>
      <h1>Server-rendered Carousel</h1>
      <div style={{ maxWidth: 600, height: 300 }}>
        <Carousel
          aria-label="Server gallery"
          images={['First image', 'Second image', 'Third image'].map((alt) => ({ src, alt }))}
        />
      </div>
    </main>
  );
}
