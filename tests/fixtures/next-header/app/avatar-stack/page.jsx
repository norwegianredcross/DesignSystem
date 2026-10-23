import 'server-only';
import { EXPERIMENTAL_AvatarStack, Avatar } from '@norwegianredcross/designsystem';

export default function AvatarStackPage() {
  return (
    <main>
      <h1>AvatarStack from a server page</h1>
      <EXPERIMENTAL_AvatarStack aria-label="Participants">
        <li>
          <Avatar asChild aria-label="Ola Nordmann">
            <a href="/about/">ON</a>
          </Avatar>
        </li>
        <li>
          <Avatar asChild aria-label="Kari Hansen">
            <a href="/about/">KH</a>
          </Avatar>
        </li>
        <li>+5 participants</li>
      </EXPERIMENTAL_AvatarStack>
    </main>
  );
}
