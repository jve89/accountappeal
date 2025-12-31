import { Suspense } from "react";
import LimitReachedClient from "./LimitReachedClient";

export default function LimitReachedPage() {
  return (
    <Suspense fallback={null}>
      <LimitReachedClient />
    </Suspense>
  );
}
