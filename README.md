# 📍 RN Places API App

This is a **React Native** app using Google Maps and Places APIs for searching and displaying location information. It supports both **Android** and **iOS** platforms.

## ✨ Features

- 🔍 **Places Search**

  - Responsive search using the **Google Places API**
  - Provides real-time **autocomplete suggestions** as the user types

- 🗺️ **Display on Map**

  - Displays the selected place on a **Google Map**
  - Shows place **Name and Address**
  - Shows place **Ratings and Reviews**

- 🧠 **Search History with MMKV + Redux Toolkit**

  - Keeps a record of all searched places
  - Displays history in a list format
  - **Persists data locally** using [`react-native-mmkv`](https://github.com/mrousavy/react-native-mmkv) for high-performance storage
  - Uses [`@reduxjs/toolkit`](https://redux-toolkit.js.org/) for centralized state management

- ♻️ **Select from History**
  - Allows users to re-select a previously searched location
  - Automatically **navigates and highlights** the location on the map

---

> ⚠️ Make sure you've completed the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) before proceeding.

---

## 🚀 Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/AwaisAliKolachi/rn-places-api-app-with-map.git
cd rn-places-api-app-with-map
```

### 2. Install dependencies

```sh
# Using npm
npm install

# OR using Yarn
yarn
```

### 3. Install CocoaPods (iOS only)

```sh
npx pod-install
```

This command runs `pod install` under the `ios` directory for you.

---

## 🔑 Set Up Your Google API Key

You need to replace placeholder values of `YOUR_API_KEY` in several files.

### 🔧 Replace in these files:

1. **Root `.env` file**  
   Example:

   ```env
   API_KEY=YOUR_API_KEY
   ```

2. **Android:**

   - `android/app/src/main/AndroidManifest.xml`
     ```xml
     <meta-data
       android:name="com.google.android.geo.API_KEY"
       android:value="YOUR_API_KEY" />
     ```
   - `android/app/src/main/res/values/google_maps_api.xml`
     ```xml
     <resources>
        <string name="google_maps_key" templateMergeStrategy="preserve" translatable="false">YOUR_API_KEY</string>
     </resources>
     ```

3. **iOS:**
   - `ios\GooglePlaceSearchWithMap\AppDelegate.swift`
     ```swift
     GMSServices.provideAPIKey("YOUR_API_KEY")
     ```

---

## ✅ Enable Required APIs

Make sure the following **Google Cloud APIs** are **enabled** for your API Key:

- Maps SDK for Android
- Maps SDK for iOS
- Maps JavaScript API
- Places API

Enable them via: [Google Cloud Console](https://console.cloud.google.com/apis/library)

---

## 📱 Running the App

With everything installed and your API Key configured, you can now run the app.

### Start Metro bundler (in one terminal)

```sh
npm start
# OR
yarn start
```

### Run Android (in a second terminal)

```sh
npm run android
# OR
yarn android
```

### Run iOS (in a second terminal)

```sh
npm run ios
# OR
yarn ios
```

> 💡 You can also run the app directly via **Android Studio** or **Xcode**.

---

## ✨ License

MIT © [Awais Ali Kolachi](https://github.com/AwaisAliKolachi)
