# 🚀 Simple React Native Segmented Controller for Android & iOS

[![Build Status](https://travis-ci.com/Seishin/react-native-ui-segmented-controller.svg?token=pkqXMMFqxb7ui46CxL6b&branch=master)](https://travis-ci.com/Seishin/react-native-ui-segmented-controller)

React Native component inspired by the iOS native UISegmentedControlIOS.
Works on Android & iOS.

At this moment, the component is really basic and not much customizable.

<br />

## Demo

<img src="https://github.com/Seishin/react-native-ui-segmented-controller/raw/master/Example/screenshots/demo.gif" width="400" />

<br />
<br />

## Installation

```shell
yarn add react-native-ui-segmented-controller
```

### Then install these two packages

```shell
yarn add react-native-gesture-handler react-native-reanimated
```

⚠️ You need to configure the <a href="https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html">react-native-gesture-handler</a> and <a href="https://software-mansion.github.io/react-native-reanimated/getting-started.html">react-native-reanimated</a> native libs.

<br />

## Usage

```javascript
import React from "react";
import { SegmentedController, SegmentedItem } from "react-native-ui-segmented-controller";

const App = () => {
  return (
    <>
      <SegmentedController>
        <SegmentedItem title="Blue" />
        <SegmentedItem title="Red" />
      </SegmentedController>
    </>
  );
};
```

<br />

## Props

| Name              | Description                               | Default       | Type     |
| ----------------- | ----------------------------------------- | ------------- | -------- |
| onSegmentSelected | Callback function when a item is selected | (index) => {} | function |

<br />
<br />

## 👏 How to Contribute

Anyone who wants to contribute is free to fork and make pull requests! :)

## LICENSE

```
Copyright (c) 2019 Atanas Dimitrov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
