import { Suspense, SuspenseProps } from "react";
import { Route } from "wouter";

type SuspendedRouteProps = SuspenseProps & React.ComponentPropsWithoutRef<typeof Route>

export const SuspendedRoute = (props: SuspendedRouteProps) => {
  const {fallback, ...routeProps} = props;
  return (
    <Suspense fallback={fallback}>
      <Route {...routeProps} />
    </Suspense>
  )
}