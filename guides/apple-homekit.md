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
