import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const App = () => {
  return (
    <>
      <h1 className="h1">Next Admin Template</h1>

      <div className="flex gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Shadcn ui </CardTitle>
          </CardHeader>
          <CardContent>
            <p>无需安装，所有组件直接复制粘贴</p>
          </CardContent>
          <CardFooter>Ctrl+c/v</CardFooter>
        </Card>
      </div>
      <ul>
        <li>shadcn ui</li>
      </ul>
    </>
  );
};

export default App;
