import { Suspense } from "react";

type SuspenseWrapperProps = {
  children?: React.ReactNode;
  element?: React.ReactNode;
};

const SuspenseWrapper = ({
  children,
  element,
}: SuspenseWrapperProps): React.ReactNode => {
  if (element) {
    return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
  }
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default SuspenseWrapper;
