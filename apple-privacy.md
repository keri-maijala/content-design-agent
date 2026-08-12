# Apple Human Interface Guidelines — Privacy
**Source:** developer.apple.com/design/human-interface-guidelines/privacy

---

## Overview

Privacy is paramount. It's critical to be transparent about the privacy-related data and resources you require, and essential to protect the data people allow you to access. People use their devices in very personal ways and expect apps to help them preserve their privacy.

When you submit a new or updated app, you must provide details about your privacy practices and the privacy-relevant data you collect so the App Store can display the information on your product page. People use these privacy details to make an informed decision before they download your app.

---

## Best Practices

- **Request access only to data you actually need.** Asking for more data than a feature needs — or asking for data before a person shows interest in the feature — makes it hard for people to trust your app. Make permission requests as specific as possible.
- **Be transparent about how your app collects and uses data.** People are less likely to share data if they don't understand exactly how you plan to use it. Always respect people's choices to use system features like Hide My Email and Mail Privacy Protection.
- **Process data on the device where possible.** For example, use the Apple Neural Engine and custom CreateML models to process data on-device, avoiding lengthy and potentially risky round trips to a remote server.
- **Adopt system-defined privacy protections and follow security best practices.** For example, use CloudKit to provide encryption and key management for additional data types like strings, numbers, and dates.

---

## Requesting Permission

### What requires permission

- Personal data — location, health, financial, contact, and other personally identifying information
- User-generated content — emails, messages, calendar data, contacts, gameplay information, Apple Music activity, HomeKit data, and audio, video, and photo content
- Protected resources — Bluetooth peripherals, home automation features, Wi-Fi connections, and local networks
- Device capabilities — camera and microphone
- In a visionOS app running in a Full Space — ARKit data such as hand tracking, plane estimation, image anchoring, and world tracking
- The device's advertising identifier, which supports app tracking

### Timing rules

- **Request permission only when your app clearly needs access.** Wait to request permission until people actually use a feature that requires access.
- **Avoid requesting permission at launch unless the data or resource is required for your app to function.** People are less likely to be bothered by a launch-time request when the reason is obvious — for example, a navigation app needing location access.

### Writing purpose strings

The standard alert displays your copy (called a purpose string or usage description string) after your app name and before the buttons people use to grant or deny permission.

**Guidelines:**
- Write a brief, complete sentence
- Be straightforward, specific, and easy to understand
- Use sentence case
- Avoid passive voice
- End with a period

| | Example | Notes |
|---|---|---|
| ✅ | The app records during the night to detect snoring sounds. | Active sentence. Clearly describes how and why the app collects the data. |
| ❌ | Microphone access is needed for a better experience. | Passive sentence. Vague, undefined justification. |
| ❌ | Turn on microphone access. | Imperative sentence. Provides no justification. |

---

## Pre-Alert Screens

If it's essential to provide additional context before a system alert appears, you can display a custom screen. The following guidelines apply to any custom view displayed before system alerts that request permission to access protected data and resources (camera, microphone, location, contacts, calendar, tracking).

### Rules

- **Include only one button, and make it clear that it opens the system alert.** Use a term like "Continue" or "Next" — not "Allow" — to title the button. Using "Allow" can look similar to the alert's own allow button and cause people to grant permission unintentionally.
- **Don't include additional actions.** Don't provide a way for people to leave the screen without viewing the system alert.

| ❌ Don't include | Why |
|---|---|
| A Cancel button | Lets people exit without seeing the system alert |
| A Close button | Same problem — diverts people from making a choice |
| Two buttons of any kind | Creates confusion about which leads to the system alert |

---

## Tracking Requests

App tracking is a sensitive issue. If you want to perform app tracking as soon as people launch your app, you must display the system-provided alert before you collect any tracking data.

**Never precede the system alert with a custom screen that could confuse or mislead people.** People sometimes tap quickly to dismiss alerts. Custom screens that take advantage of this to influence choices will result in App Store rejection.

### Prohibited designs (will cause rejection)

| Pattern | Description |
|---|---|
| **Incentives** | Offering rewards (e.g. "$100 credit") for granting tracking permission |
| **Imitation requests** | Displaying a screen that looks like a permission request before the real one |
| **Alert images** | Showing an image of the alert within your custom screen |
| **Alert annotation** | Annotating the screen that appears behind the real alert |

> You can't offer people compensation for granting permission, and you can't withhold functionality, content, or make your app unusable until people allow tracking.

---

## Location Button

In iOS, iPadOS, and watchOS, Core Location provides a location button that gives people a way to grant temporary, one-time authorization to access their location at the moment a task needs it.

- The first time a person taps a location button, the system displays a standard alert explaining how the button limits location access.
- After that, tapping the button gives one-time permission — no repeat confirmation needed.
- If your app has no authorization status, tapping the button has the same effect as choosing "Allow Once" in the standard alert.
- If people previously chose "While Using the App," tapping the location button doesn't change that status.

### When to use it

- When people often grant "Allow Once" permission — the location button streamlines repeated location sharing without repeated alerts.
- For specific, task-based features: attaching location to a message, finding a store, identifying a plant or building.

### Customization options

You can customize the location button to match your UI:

| Attribute | Options |
|---|---|
| Title | System-provided options, e.g. "Current Location" or "Share My Current Location" |
| Glyph | Filled or outlined location indicator |
| Colors | Background color, title color, glyph color |
| Corner radius | Adjustable |

**You cannot customize other visual attributes.** The system warns you about low-contrast color combinations or excessive translucency — fix these before shipping. You're also responsible for ensuring button text fits at all accessibility text sizes and when translated into other languages.

> If the system identifies consistent problems with your customized location button, it won't give your app access to device location when people tap it.

---

## Protecting Data

### Authentication

- **Avoid relying solely on passwords.** Where possible, use passkeys. If you continue using passwords, require two-factor authentication and augment with biometric identification (Face ID, Optic ID, or Touch ID).
- **Avoid inventing custom authentication schemes.** Prefer system-provided features like passkeys, Sign in with Apple, or Password AutoFill.

### Storage

- **Store sensitive information in a keychain.** A keychain provides a secure, predictable experience when handling private information.
- **Never store passwords or other secure content in plain-text files.** Even with file permissions, sensitive information is much safer in an encrypted keychain.

---

## Platform Considerations

### macOS

- **Sign your app with a valid Developer ID.** If distributing outside the App Store, signing identifies you as an Apple developer and confirms your app is safe to use.
- **Protect people's data with app sandboxing.** All apps submitted to the Mac App Store require sandboxing.
- **Avoid making assumptions about who is signed in.** Because of fast user switching, multiple people may be active on the same system.

### visionOS

- By default, visionOS uses ARKit algorithms for features like persistence, world mapping, segmentation, matting, and environment lighting — always running, automatically benefiting apps in the Shared Space.
- **ARKit doesn't send data to apps in the Shared Space.** To access ARKit APIs, your app must open a Full Space. Features like Plane Estimation, Scene Reconstruction, Image Anchoring, and Hand Tracking require explicit permission.
- **User input is private by design.** The system displays hover effects when people look at interactive components — without exposing where they're looking before they tap.
- **Developer access to device cameras works differently in visionOS.** The back camera provides blank input and is available only as a compatibility convenience. The front camera provides input for spatial Personas only after people grant permission. If your iOS or iPadOS app includes a feature that needs camera access, remove it or replace it with an option for people to import content instead.
