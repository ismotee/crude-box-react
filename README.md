# Introduction

crude-box is framework agnostic and simplistic data management system. Crude-box-react is interface between crude-box and react.

# Installation

```
npm install crude-box crude-box-react
```

# Example

crude.js

```
import CrudeBox from "crude-box";

export const crude = new CrudeBox();
export const store = {
  test: crude.create("some data"),
  test2: crude.create("some other data"),
};
```

App.js

```
import React from "react";
import subscribe from "crude-box-react";
import { crude, store } from "./crude";

function App() {
  return (
    <>
      <div onClick={() => crude.update(store.test, "new value")}>
        {crude.read(store.test)}
      </div>
      <div onClick={() => crude.update(store.test2, "new value")}>
        {crude.read(store.test2)}
      </div>
    </>
  );
}

export default subscribe(crude, [store.test, store.test2])(App);
```

# State of the project
The project is postponed in to the indefinite future.
