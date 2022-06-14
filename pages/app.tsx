import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AppComponent = dynamic<{}>(
  () => import("@/app/App").then((mod) => mod.App),
  {
    ssr: false,
  }
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  
  return !isLoading && <AppComponent />;
};
export default App;
