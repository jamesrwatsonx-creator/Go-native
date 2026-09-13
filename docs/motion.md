# Motion language

Motion communicates state, orientation, and confidence—not decoration. React/Framer Motion is the web implementation direction; Android uses native Compose animation equivalents.

For a React Native client, use the published `lottie-react-native` package to render a small, versioned library of exported Lottie assets. It is ideal for the AI orb state machine, completed Path milestones, and meaningful empty states. Do not make navigation, form feedback, or accessibility-critical status depend on Lottie. Native Android should use an equivalent Compose-compatible renderer with the same source assets.

- Navigation: 180–240 ms directional transitions that retain context.
- Workspace switch: 280 ms crossfade + shared context indicator; never imply account merging.
- AI orb: low-amplitude idle breathing; changes state only when listening, preparing, awaiting approval, or completing.
- Cards/maps: 160–220 ms elevation and position transitions; respect `prefers-reduced-motion`.
- Approval actions: deliberate 300 ms confirmation with an explicit “what will happen” summary.

Avoid autoplaying large motion, parallax that impairs reading, and motion used to hide loading or uncertainty.
