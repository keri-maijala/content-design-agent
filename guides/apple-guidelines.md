# Apple Design and Content Guidelines
**Source:** developer.apple.com/design/human-interface-guidelines

This guide consolidates Apple's publicly available design and content guidelines across three domains: Human Interface Guidelines (iOS), HomeKit, and Privacy. Each section is maintained separately and combined here for agent use.

---

# Apple Human Interface Guidelines — iOS
**Source:** developer.apple.com/design/human-interface-guidelines/designing-for-ios

---

## Core Design Themes

### Deference
The UI helps users understand and interact with the content, but never competes with it.
- Take advantage of the whole screen. Let content extend to edges.
- Reconsider visual indicators of physicality and realism. Bezels, gradients, and drop shadows can overpower content.
- Let translucent UI elements hint at the content behind them.

### Clarity
Text is legible at every size, icons are precise and lucid, adornments are subtle, sharpened focus on functionality.
- Use plenty of negative space. Makes content more noticeable and easier to understand.
- Let color simplify the UI. A key color highlights important state and indicates interactivity.
- Ensure legibility using system fonts. Use Dynamic Type so apps respond to user text-size choices.
- Embrace borderless buttons. Use context, color, and call-to-action title to indicate interactivity.

### Depth
Visual layers and realistic motion impart vitality and heighten understanding.
- Use distinct layers to convey hierarchy and position.
- Translucent backgrounds provide context and help users see more content is available.
- Use enhanced transitions to give users a sense of hierarchy as they navigate.

---

## Design Principles

### Aesthetic Integrity
Represents how well an app's appearance and behavior integrates with its function. An app helping people perform a serious task should keep decorative elements subtle and unobtrusive.

### Consistency
Pays attention to standards and paradigms people are comfortable with. Check:
- Is the app consistent with iOS standards? Uses system-provided controls correctly?
- Is the app consistent within itself? Uniform terminology and style?
- Are the same icons always meaning the same thing?

### Direct Manipulation
People are more engaged when they directly manipulate onscreen objects instead of using separate controls.

### Feedback
Acknowledge people's actions, show results, and update on progress. List items and controls should highlight briefly when tapped. Avoid unnecessary alerts.

### Metaphors
Virtual objects and actions that are metaphors for familiar experiences help users quickly grasp how to use an app.

### User Control
People — not apps — should initiate and control actions. An app can suggest a course of action or warn about dangerous consequences, but shouldn't take decision-making away from users.

---

## Layout

- Give tappable controls a hit target of about 44 x 44 points.
- Place principal items in the upper half of the screen and near the left side (in left-to-right cultures).
- Use visual weight and balance to show relative importance of onscreen elements.
- Use alignment to ease scanning and communicate groupings or hierarchy.
- Avoid inconsistent appearances — elements with similar functions should look similar.
- Be prepared for changes in text size (Dynamic Type).

---

## Navigation

Three main styles:
1. **Hierarchical** — users make one choice per screen until destination (e.g., Settings, Mail).
2. **Flat** — users navigate directly from one primary category to another (e.g., Music, App Store).
3. **Content/experience-driven** — navigation defined by content or experience (e.g., books, games).

- Use a navigation bar to traverse a hierarchy of data.
- Use a tab bar to display several peer categories (supports flat architecture).
- Use a page control when each screen represents an individual instance of the same type.
- In general, give users one path to each screen.

---

## Modal Contexts

Consider creating a modal context only when:
- It's critical to get the user's attention.
- A self-contained task must be completed or abandoned.

Always provide an obvious and safe way to exit a modal task. Reserve alerts for delivering essential, ideally actionable, information.

---

## Interactivity and Feedback

### Standard Gestures
- Tap: press or select a control or item
- Drag: scroll or pan
- Flick: scroll or pan quickly
- Swipe: return to previous screen, reveal hidden view, or reveal Delete button
- Double tap: zoom in and center
- Pinch: zoom in or out
- Touch and hold: magnified view for cursor positioning
- Shake: initiate undo or redo

Avoid associating different actions with standard gestures. Don't create custom gestures that invoke the same actions as standard gestures.

### Interactive Elements
- A key color gives strong visual indicator of interactivity.
- Back button uses several cues: location, back-pointing chevron, title describing previous screen, key color.
- In content areas, add button border or background only if necessary to distinguish from surrounding content.

### Feedback
- Integrate status and other relevant feedback information into your UI.
- Avoid unnecessary alerts.

---

## Animation

Appropriate animation can:
- Communicate status and provide feedback.
- Enhance the sense of direct manipulation.
- Help people visualize the results of their actions.

Add animation cautiously. Use motion effects with purpose and restraint. Custom animation should be comparable to built-in animations. Strive for realism and credibility.

---

## Branding

- Incorporate brand assets in a refined, unobtrusive way. People don't want to feel they're watching an advertisement.
- Don't take space away from the content people care about.
- Resist displaying your logo throughout the app — mobile screens are small.
- Use custom icons, colors, and fonts to create a distinctive UI.

---

## Color and Typography

### Color
- Color helps indicate interactivity, impart vitality, and provide visual continuity.
- Choose a key color to indicate interactivity and state.
- Avoid using the same color in both interactive and noninteractive elements.
- Pay attention to color contrasts — at least 50% contrast between distinguishable colors.
- Be aware of color blindness. Don't use red/green as the only way to distinguish states.
- Take bar translucency into account when using custom bar tint.

### Typography
- Text must be legible above all. Adopt Dynamic Type.
- Text should never be smaller than 11 points.
- Use a single font throughout your app — mixing fonts looks fragmented.
- Headline and body styles use the same font size; headline uses heavier weight.
- Text always uses regular or medium weight — not light or bold.

---

## Terminology and Wording

- Use terminology your users understand. Match audience expertise.
- Use a tone that's informal and friendly, but not too familiar. Avoid stilted, overly formal, or falsely jovial tone.
- Think like a newspaper editor — watch for redundant or unnecessary words.
- Give controls short labels or use well-understood icons.
- Take care to be accurate when describing dates — account for user's locale.
- Correct all spelling, grammatical, and punctuation errors.
- Keep all-capital words to a minimum.

---

## Starting and Stopping

- Start instantly. Present useful content immediately.
- Don't tell people to reboot or restart their devices.
- Avoid displaying a splash screen or startup experience.
- Avoid asking for setup information upfront — focus on needs of 80% of users.
- Delay login requirement as long as possible.
- Think carefully before providing an onboarding experience. Good app design should not require it.
- Avoid asking users to rate your app too soon.
- Restore state when app restarts so users can continue where they left off.
- Never display a Close or Quit option — iOS apps don't have these.
- Never quit an iOS app programmatically (users interpret this as a crash).

---

## Icons and Graphics

- App icon is important part of brand — unique, uncluttered, engaging, memorable.
- Use built-in icons as much as possible — users already know what they mean.
- Support the Retina display — supply @2x assets for all artwork.
- Display photos and graphics in their original aspect ratio; don't scale greater than 100%.
- Don't use images that replicate Apple products in your designs.

---

## Integrating with iOS

- Use standard UI elements correctly. Standard elements receive automatic iOS updates; custom ones don't.
- Don't mix UI element styles from different iOS versions.
- Don't use system-defined buttons and icons to mean something else.
- Respond to changes in device orientation — maintain focus on primary content.
- Downplay file and document handling — users shouldn't have to think about the file system.
- Avoid sending users to Settings — they have to switch away from your app.

---

## UI Element Categories (UIKit)

- **Bars:** status bar, navigation bar, toolbar, tab bar, search bar
- **Content views:** collection view, table view, scroll view, map view, image view
- **Controls:** button, slider, switch, segmented control, date picker, text field
- **Temporary views:** alert, action sheet, modal view

---

## From Concept to Product

1. List all features users might like (brainstorm freely).
2. Determine who your users are.
3. Filter feature list through the audience definition.
4. Create an app definition statement: concise declaration of main purpose and intended audience.
5. Prototype and iterate — test on device before committing engineering resources.

Tailor customization to the task. Always have a reason for customization. Avoid increasing cognitive burden with unfamiliar elements. Be internally consistent — the more custom your UI, the more important internal consistency becomes.


---

# Apple Human Interface Guidelines — HomeKit
**Source:** developer.apple.com/design/human-interface-guidelines/homekit

---

## Overview

Your iOS, tvOS, or watchOS app can integrate with HomeKit (and by extension the Home app) to provide a custom or accessory-specific experience. Use cases include:

- Helping people set up, name, and organize their accessories
- Allowing fine-grained accessory configuration and control
- Providing access to custom accessory features
- Showing people how to create powerful, hands-free automations
- Providing support

---

## Terminology and Layout

HomeKit models the home as a hierarchy of objects and defines a vocabulary of terms. It's crucial for your app to use the terminology and object model that HomeKit defines, so that you reinforce people's understanding and make home automation feel approachable.

### Key terms

| Term | Definition |
|---|---|
| **Home** | A physical home, office, or other location. One person might have multiple homes. |
| **Room** | A physical room in a home. Simply a name with meaning to people, such as Bedroom or Office. |
| **Accessory** | A physical, connected home accessory — a ceiling fan, lamp, lock, or camera. |
| **Category** | A type of accessory, such as thermostat, fan, or light. |
| **Service** | A controllable feature of an accessory (e.g. the switch on a connected light). **Do not use the word "service" in the UI** — use descriptive names instead, such as "garage door opener" or "ceiling fan light." |
| **Characteristic** | A controllable attribute of a service (e.g. speed, brightness). **Do not use the word "characteristic" in the UI** — use descriptive terms instead. |
| **Service group** | A group of accessory services controlled as a unit (e.g. "reading lamps"). |
| **Action** | The changing of a service's characteristic, such as adjusting fan speed or light brightness. |
| **Scene** | A group of actions that control one or more services. Example: a "Movie Time" scene that lowers shades and dims lights. **Note:** The HomeKit API uses the term "action set" — in your UI, always use the term "scene." |
| **Automation** | Causes accessories to react to situations — location changes, time of day, another accessory's state, or a sensor detection. |
| **Zone** | An area containing multiple rooms, such as upstairs or downstairs. Setting up a zone is optional. |

---

## Layout and Organization Rules

- **Acknowledge the hierarchical model.** Even if your app doesn't organize accessories by rooms and zones, reference the HomeKit model when helping people set up or control accessories. People need to know where accessories are located so they can use Siri and HomePod.
- **Make HomeKit details easy to find.** If your app's organization is based on accessories, don't hide zone or room information in a hard-to-discover settings screen. Surface it in an accessory detail view.
- **Recognize that people can have more than one home.** Even if your app doesn't support multiple homes per user, consider providing relevant home information in an accessory detail view.
- **Don't present duplicate home settings.** Always defer to the settings people made in the Home app. Don't ask people to set up all or parts of their homes again or show a duplicate settings view.

---

## Setup

- **Use the system-provided setup flow.** It lets people name accessories, join networks, pair with HomeKit, assign room and service categories, and designate favorites in just a few steps.
- **Provide context to explain why you need access to Home data.** Example purpose string: *"Lets you control this accessory with the Apple Home app and Siri across your Apple devices."*
- **Don't require people to create an account or supply personal information upfront.** Defer to HomeKit for any information you might need. If your app provides additional services that require an account (such as cloud services), make account setup optional and offer it after initial HomeKit setup.
- **Honor people's setup choices.** When people choose to use HomeKit to set up your accessory, don't force them to set up other platforms during the HomeKit setup flow.
- **Always begin with the system-provided setup flow.** After basic functionality is available, offer a custom post-setup experience that highlights the unique features of your accessory.

---

## Naming

### Naming rules for services

Check that names people provide follow HomeKit naming rules. If people enter a name that breaks one or more rules, briefly explain the problem and suggest alternative names.

**Rules:**
- Use only alphanumeric, space, and apostrophe characters
- Start and end with an alphabetic or numeric character
- Don't include emojis

**Examples:**

| ✅ Correct | ❌ Incorrect |
|---|---|
| Reading lamp | 📚 lamp |
| 2nd garage door | #2 garage door |

### Additional naming guidance

- **Suggest service names that suit your accessory.** If your app detects a suboptimal name for Siri voice controls, recommend alternatives. Never suggest company names or model numbers as service names.
- **Help people avoid including location information in names.** "Kitchen light" in a service name can cause unpredictable results when controlling by voice. Your app can detect these names and help people fix them — for example, by removing the room from the service name and encouraging people to assign the accessory to that room instead.

---

## Siri Interactions

HomeKit supports powerful, hands-free control using voice commands.

- **Present example voice commands during setup.** As soon as people complete setup of a new accessory, use the service name they chose in a few example Siri phrases and encourage people to try them out.
- **Teach people about more complex Siri commands after setup.** Help people learn throughout the app, not just during onboarding. For example, in a scene detail view: *You can say "Hey Siri, set 'Movie Time.'"*
- **Recommend zones and service groups where they make sense.** If people might benefit from context-specific voice commands (e.g. "Siri, turn off the upstairs lights"), suggest these interactions and help people set them up.

### Example Siri phrases and what they mean

| Phrase | Siri understands |
|---|---|
| "Turn on the floor lamp" | Service (floor lamp) |
| "Show me the entryway camera" | Service (entryway camera) |
| "Turn on the light" | Accessory category (light) |
| "Turn off the living room light" | Room (living room) + Accessory category (light) |
| "Make the living room a little bit brighter" | Room + Brightness characteristic |
| "Turn on the recessed lights" | Service group (recessed lights) |
| "Turn off the lights upstairs" | Accessory category (lights) + Zone (upstairs) |
| "Dim the lights in the bedroom and nursery" | Accessory category + Brightness characteristic + Rooms |
| "Run Good night" | Scene (Good night) |
| "Is someone in the living room?" | Occupancy detection characteristic |
| "Did I leave the garage door open?" | Accessory category + Open characteristic |
| "It's dark in here" | Current home and room via HomePod + implied accessory category |

### Shortcuts guidance

- **Offer shortcuts only for accessory-specific functionality that HomeKit doesn't already support.** Don't offer shortcuts that duplicate HomeKit functionality — it confuses people.
- **If your app supports both HomeKit and shortcuts, clearly explain the difference.** Never encourage people to create a shortcut for a scene or action that HomeKit already supports.

---

## Custom Functionality

- **Be clear about what people can do in your app vs. when they might want to use the Home app.** For example, if your app supports only lights, guide people to set up a scene that includes your accessory's actions, then suggest they open the Home app to add other HomeKit-compatible accessories to the scene.
- **Defer to HomeKit if your database differs from the HomeKit database.** Automatically reflect changes made in the Home app or in other third-party HomeKit apps.
- **Ask permission before updating the HomeKit database when people make changes in your app.** Never overwrite HomeKit database settings without a person's explicit direction.
- **If conflicts arise, present them visually.** Show both names or settings side by side so people have a clear picture of the choice they need to confirm.

---

## Cameras

- **Don't block camera images.** You can supplement camera content with useful features (such as alerts), but don't cover portions of the camera's images with other content.
- **Show a microphone button only if the camera supports bidirectional audio.** A nonfunctioning microphone button wastes display space and risks confusing people.

---

## HomeKit Icon Usage

Use the HomeKit icon in setup or instructional communications related to HomeKit technology.

### Icon styles

| Style | When to use |
|---|---|
| **Black** | On white or light backgrounds when other technology icons appear in black |
| **White** | On black or dark backgrounds when other technology icons appear in white |
| **Custom color** | When other technology icons appear in the same color |

### Icon rules

- **Use only Apple-provided icons.** Don't create your own HomeKit or Home app icon design or attempt to mimic Apple-provided designs.
- **Position the HomeKit icon consistently with other technology icons.** When other technology icons are contained within shapes, treat the HomeKit icon the same way.
- **Use the HomeKit icon noninteractively.** Don't use the icon and the name HomeKit in custom interactive elements or buttons.
- **Don't use the HomeKit icon within text or as a replacement for the word HomeKit.**

**Correct icon + text placement:**
> ✅ [HomeKit icon] Lights set with HomeKit.

**Incorrect:**
> ❌ Lights set with [HomeKit icon] HomeKit.
> ❌ Lights set with [HomeKit icon].

---

## Referring to HomeKit in Text

### Capitalization and format

- **HomeKit** is one word, uppercase H and uppercase K, followed by lowercase letters.
- **Apple Home** is two words, uppercase A and uppercase H, followed by lowercase letters.
- If your layout uses all-uppercase type, HomeKit or Apple Home can be set in all uppercase to match the style.

### Framing rules

- **Don't use HomeKit as a descriptor.** Use terms like "works with," "use," "supports," or "compatible."

| ✅ Correct | ❌ Incorrect |
|---|---|
| [Brand] lightbulbs work with HomeKit. | HomeKit lightbulbs. |
| HomeKit-enabled thermostat. | |
| You can use HomeKit with [App Name]. | |

- **Don't suggest that HomeKit is performing an action.**

| ✅ Correct | ❌ Incorrect |
|---|---|
| Back door is unlocked with HomeKit. | HomeKit unlocked the back door. |

- **Use "Apple Home" when referring to the app specifically.** On first mention in body copy, use the full name "Apple Home." Subsequent mentions can refer to "the Home app."

| ✅ Correct | ❌ Incorrect |
|---|---|
| Open the Apple Home app. | Open Home. |
| Open the Apple Home app. Your accessory and room will now appear in the Home app. | |

- **Use "HomeKit" (not "Apple Home") for setup, configuration, and instruction copy.** Example: *Open HomeKit settings.*
- **Use "Apple HomeKit" if desired.** Example: *Compatible with Apple HomeKit.*

### Apple trademark rules

- Use Apple product names in singular form only — never make them possessive.
- Don't translate Apple, Apple Home, HomeKit, or any other Apple trademark.
- Don't use category descriptors. Say "iPad," not "tablet."
- Don't indicate any kind of sponsorship, partnership, or endorsement from Apple.
- Attribute Apple, HomeKit, and all other Apple trademarks with correct credit lines wherever legal information appears in your app.
- Refer to Apple devices and operating systems only in technical specifications or compatibility descriptions.

| ✅ Correct | ❌ Incorrect |
|---|---|
| Use HomeKit to turn on your lights from your iPhone or iPad. | Use HomeKit to turn on your lights from your iOS devices. |

- **Emphasize your app over HomeKit.** Make references to HomeKit or Apple Home less prominent than your app name or main identity.


---

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

---

# Apple Style Guide
**Source:** Apple Style Guide, June 2026

This section covers editorial and terminology guidelines relevant to UI copy, product naming, and content design. Sections covering print layout, figure captions, developer documentation conventions, and publishing logistics have been omitted.

---

## Voice and Tone

- Use active voice and short sentences.
- Use "you/your" — not "users" or "customers."
- No exclamation marks in product copy. OK occasionally in promotional text or dialogue.
- Contractions are encouraged as part of Apple's informal voice: aren't, can't, didn't, doesn't, you're, it's, we've, here's, let's, that's, there's, what's.
- Don't form contractions from nouns or proper nouns (avoid "Apple's going to…"; prefer "Apple is going to…").
- Don't confuse it's (contraction for "it is") with its (possessive pronoun).

---

## Capitalization

Two styles used at Apple:
- **Sentence-style:** Only the first word and proper nouns are capitalized.
- **Title-style:** Capitalize the first and last word, nouns, pronouns, verbs, adjectives, adverbs, and conjunctions (except coordinating conjunctions). Capitalize prepositions of five or more letters, and prepositions that are part of a phrasal verb (e.g., Start Up, Turn On, Log In).

**Don't capitalize in title style:**
- Articles (a, an, the) unless first word or after a colon
- Coordinating conjunctions (and, but, or, nor, for, yet, so)
- "to" in infinitives
- "as" regardless of part of speech
- Words that always start lowercase (iPad, macOS)
- Prepositions of four letters or fewer (at, by, for, from, in, into, of, off, on, onto, out, over, to, up, with) — except when part of a phrasal verb

**Exception:** Capitalize the second word in a hyphenated compound (except Built-in and Plug-in): High-Level Events, 64-Bit Addressing.

In general, capitalize the names of onscreen elements exactly as they appear onscreen.

---

## Punctuation

### Commas
- Use a serial comma before "and" or "or" in a list of three or more items.
- Use a comma between the day of the month and the year: June 8, 2026.
- When using the full date, follow the year with a comma: on June 8, 2026, at 10:00 a.m.
- If giving only the month and year, don't use commas: in June 2026 at WWDC.

### Colons
- Capitalize the first word after a colon if it begins a complete sentence.
- Precede every list with a colon, whether the introductory text is a complete thought or partial thought.

### Apostrophes
- Use the curly apostrophe (Option-Shift-Right Bracket) except in code font and units of measure.

### Dashes
- **Em dash (—):** Sets off a word or phrase that interrupts or changes direction. Close up with adjacent words (no spaces). Generate with Option-Shift-Hyphen.
- **En dash (–):** Use between numbers in a range (bits 3–17), in compound adjectives where one element is two words (Grammy Award–winning), and as a minus sign. Generate with Option-Hyphen.

### Ellipsis
- Use the ellipsis character (Option-Semicolon). Don't include ellipsis when referencing a menu item or button name in text: "Choose File > Print" not "Choose File > Print…"

### Quotation Marks
- Use curly quotes. Don't use quotation marks around button names that use title-style capitalization. Do use them around button names that use sentence-style capitalization: Click the "Position on screen" button.

---

## Dates and Times

- Use cardinal numbers in dates that include the month: August 12.
- Use ordinal numbers in dates without the month: the 12th. Use full-size letters, not superscript.
- Spell out days and months in text. Use numerals for the year except at the start of a sentence.
- Don't use slashes in dates (not 3/5/22) — American and European usage differ.
- a.m. and p.m.: note periods, use a space before the abbreviation: 8:30 a.m.

---

## Numbers

- Spell out cardinal numbers one through nine in body text. Use numerals for 10 and above.
- Use numerals — regardless of size — when expressing numbers as numbers or as units of measure: "the number 4 appears," "up to 5 computers."
- Spell out ordinal numbers zero through nine: second, third. Use numerals for 10th and above.
- Always spell out a number that begins a sentence, or rewrite to avoid it.
- Use numerals for battery life: up to 8 hours of battery life.
- Fractions: spell out those with a denominator of 10 or lower in body text: one-fifth. Use numerals for others: 1/20.
- Dimensions: use "by" not "x" — 8.5 by 11 inches. If you use x, use it consistently.

---

## Abbreviations and Acronyms

- Spell out on first occurrence if the audience may be unfamiliar with it. Put the abbreviation in parentheses after the spelled-out form.
- File types: all caps (JPEG, PDF, MP3). Filename extensions: lowercase (.jpg, .pdf, .mp3).
- Don't use periods in abbreviations except for nonmetric units of measure and a.m., p.m., and U.S.
- Don't add an apostrophe before s when forming the plural of an abbreviation: CDs, ISPs.
- Avoid Latin abbreviations: use "for example" not e.g., "that is" not i.e., "and so on" not etc.
- Use the article a or an with an abbreviation based on pronunciation: a SAN, an FAQ.

---

## UI Elements and Actions

### Buttons
- Write button names exactly as they appear onscreen.
- Buttons with title-style capitalization: no quotation marks — Tap Add to Favorites.
- Buttons with sentence-style capitalization: use quotation marks — Click the "Position on screen" button.
- Buttons with all caps or all lowercase onscreen: write in title-style capitalization.

### Menus
- Use **choose** for menu items, not "select."
- Format: Choose [Menu] > [Item] > [Submenu item]. Example: Choose Edit > Find > Find Next.
- A menu item is **in** a menu, not on or under it.
- Use **item** or **option** for non-command menu items (such as font names in a pop-up menu).

### Checkboxes
- Don't say "click a checkbox" — it's ambiguous. Say: Select the [Name] checkbox / Deselect the [Name] checkbox.
- A checkbox is **selected** or **unselected** — not checked/unchecked.

### Pop-up Menus
- Format: Click the [Name] pop-up menu, and then choose [Option].

### Shortcut Menus
- Format: Control-click [item], and then choose [Command] from the shortcut menu.
- In user materials, use "shortcut menu" not "contextual menu." You can reference contextual menu parenthetically on first use.

### Dialogs
- Use **dialog** not "dialog box."
- In user materials, don't use the term "sheet" or "popover" — describe what the user must select or do.

### Alerts
- Use **alert** generically. Avoid "error message" in user materials; use "message," "alert," or "alert message."

---

## Interaction Verbs

| Use | Don't use |
|---|---|
| Tap (touch) | Hit, touch (as verb), click (for touch) |
| Click (mouse/trackpad) | Hit, click on |
| Press (mechanical button) | Depress, hit |
| Press and hold (mechanical) | Hold down |
| Touch and hold (touchscreen) | Long press |
| Choose (menu items) | Select (for menus) |
| Select (files, text, checkboxes) | Click (for selection) |
| Drag | Click and drag, move, put |
| Enter (text by any method) | Input |
| Type (pressing keys to produce characters) | — |
| Turn on / Turn off | Enable / Disable, activate / deactivate |
| Sign in | Log in |
| Set up (verb) | Setup (verb) |

- Never use "Click" in touch contexts — use "Tap."
- Never say "drag your finger" — just say "drag."
- Don't use "allow" when you can make the reader the subject: "You can create a database" not "FileMaker Pro allows you to create a database."
- Don't use "let" excessively — restructure to focus on what the user does.
- Use "appear" not "display" when items become visible: "The dialog appears" not "The dialog displays."

---

## Inclusive Language

- Don't use "man" or compound words including man to refer to people in general: use "staff," "workforce," "work hours," "artistry," "unstaffed."
- Don't use blacklist/whitelist — use deny list/allow list, reject list/accept list, or similar.
- Don't use master/slave — use primary/secondary, primary/replica, host/client, or active/standby.
- Don't use black box/white box — use closed/open, opaque/transparent, or other alternatives.
- Don't use black hat/white hat hacker — use malicious/unethical hacker or approved/ethical hacker.
- Don't use "grandfathered" — use "legacy," "exempt," "preexisting," or rewrite with "you can keep."
- Don't use "dummy" for placeholder content — use placeholder, sample, test, or stub.
- Don't use "kill" to stop an app or process — use force quit, terminate, end, stop, halt, or cancel.
- Don't use "abort" in user materials — use exit, stop, or quit as appropriate.
- Don't use "sanity check" — use review, verify, or validate.

### Disability Language
- Use person-first or identity-first language as appropriate. Ask individuals their preference.
- Use "blind" or "low vision" not "visually impaired."
- Use "deaf," "hard of hearing," or "deaf or hard of hearing" not "hearing impaired."
- Capitalize "Deaf" and "Deafblind" when referring to cultural identity.
- Use "disability" not "impairment" in general references.
- Don't use "differently abled," "special needs," or "special abilities."

---

## Apple Product Names and Terminology

### General Rules
- Don't abbreviate any Apple product or service name.
- Don't use Apple product names in the plural or possessive form: "Mac computers" not "Macs"; "your Mac computer's screen" not "your Mac's screen."
- In text, don't use the Apple logo symbol (⌘) in place of the word Apple or as part of a product name.

### Specific Products

**Apple Account** (formerly Apple ID)
- People sign in **to** their Apple Account — not "with."
- Don't use "iCloud account," "iTunes Store account," or "App Store account."

**Apple TV 4K**
- Space before 4K. Don't use "Apple TV" alone to refer to the hardware device.
- Don't abbreviate as ATV 4K.

**HomePod**
- One word, capital H and P. If referring to more than one, use "HomePod speakers."
- **HomePod mini** — lowercase m.

**HomeKit** — one word, capital H and K.

**AirPods**
- Don't use "the" with AirPods in general references. OK to use "your AirPods."
- Use numbers to refer to models: AirPods Pro 2, not AirPods Pro (2nd generation).
- Avoid singular "AirPod" — rewrite to avoid.

**Apple Watch**
- Don't use "the" with Apple Watch in general references.
- Always use full model names: Apple Watch Ultra, not Ultra.
- Can use "watch" (lowercase) when context is clear; never "Watch."

**iPhone / iPad**
- Don't use "the" in general references.
- Don't use "phone" as shorthand for iPhone.
- Don't use iPad in the plural form; use "iPad devices."

**Mac**
- Don't use "the" with Mac in general references.
- Don't use "machine," "CPU," or "PC" to refer to a Mac.
- Use "Mac computers" not "Macs."

**Apple Intelligence** — Don't abbreviate as AI.

**Apple Vision Pro**
- Always use full name. Don't call it a headset.
- Users put on and take off Apple Vision Pro; they wear it.

**macOS / iOS / iPadOS / tvOS / visionOS / watchOS**
- No article needed: "In macOS…" not "In the macOS…"
- Features are **in** macOS, not **on** macOS.

**iMessage** — Use to refer to the service. Users send "a message," not "an iMessage."

**AirPlay / AirDrop / FaceTime** — Don't use as verbs.

**CarPlay** — Don't use as a verb. CarPlay Dashboard takes "the"; CarPlay Home does not.

**App Store** — Apps are available in, on, or from the App Store. Precede with an article.

---

## Common Terminology

| Use | Don't use |
|---|---|
| email | e-mail |
| internet | Internet (except in proper names like Internet Protocol) |
| website | web site |
| app | application (in most contexts) |
| dialog | dialog box |
| sign in | log in |
| set up (v.) | setup (v.) |
| turn on / turn off | enable / disable, activate / deactivate |
| select | highlight, check (for checkboxes) |
| choose | select (for menu items) |
| appear | display (when items become visible) |
| laptop | notebook computer |
| display | monitor (for Apple displays) |
| shortcut menu | contextual menu (in user materials) |
| press and hold | hold down |
| touch and hold | long press (in user materials) |
| a.m. / p.m. | am / pm |
| country or region | country |

---

## Formatting Specifics

### Lists
- Precede all lists with a colon.
- All list items start with a capital letter.
- Fragments and items completing a main clause: no period. Complete sentences: end with a period.
- All bulleted items in a single list should be parallel.
- Use numbered lists for sequential steps. Each step should be a complete sentence with closing punctuation.

### Units of Measure
- Spell out units in body text; abbreviate in tables and specs.
- Hyphenate when used as compound adjective before a noun: 27-inch screen, 500 GB hard disk (no hyphen with abbreviations).
- Use "by" not "x" for dimensions in body text.

### Trademarks
- All Apple trademarks mentioned in a document must receive a credit line on the copyright page.
- Don't include trademark symbols (™, ®) in cross-references to document titles.

---

## Words to Avoid in User Materials

| Avoid | Use instead |
|---|---|
| abort | exit, stop, quit |
| activate / deactivate | turn on / turn off |
| allow (when user can be subject) | rewrite: "You can…" |
| click on | click |
| desire / desired | want / the [item] you want |
| due to | because of, caused by |
| enable / disable | turn on / turn off |
| error message | message, alert |
| grandfathered | legacy, exempt, preexisting |
| hang | not responding |
| highlight (v.) | select |
| hit (a key) | press |
| kill | force quit, terminate, stop |
| launch | open (in user materials) |
| mount / unmount | open, make available |
| once (meaning "after") | after |
| since (meaning "because") | because |
| utilize | use |

