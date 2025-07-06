# 📍 RN Places API App

This is a **React Native** app using Google Maps and Places APIs for searching and displaying location information. It supports both **Android** and **iOS** platforms.

> ⚠️ Make sure you've completed the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) before proceeding.

---

## 🚀 Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/AwaisAliKolachi/rn-places-api-app.git
cd rn-places-api-app
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
   GOOGLE_API_KEY=YOUR_API_KEY
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
     <string name="google_maps_key">YOUR_API_KEY</string>
     ```

3. **iOS:**
   - `ios/RNPlacesApiApp/AppDelegate.swift` _(Replace with actual app name if different)_
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
