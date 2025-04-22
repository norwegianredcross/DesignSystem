import {
  Skeleton as DigDirSkeleton,
  type SkeletonProps as DigDirSkeletonProps,
} from '@digdir/designsystemet-react';

// Directly export the type from Digdir
export type SkeletonProps = DigDirSkeletonProps;

// Directly export the component from Digdir
export const SkeletonLoader = DigDirSkeleton;

// Optional: If you still want a consistent display name
// Skeleton.displayName = 'Skeleton'; // Usually not needed
