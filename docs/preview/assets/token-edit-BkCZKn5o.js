var e=`/* Generated from the 반달이 CSS: only the rules the default screens use, every size and colour as a token.
   Tokens: src/sandbox/default-tokens.css (three steps: base, role, component). Do not add raw values here. */
@keyframes chat-rise {
  from {
    transform: translateY(6px);
    opacity: 0;
  }
}
@keyframes avatar-loading-out {
  to {
    opacity: 0;
  }
}
@keyframes avatar-loading-in {
  to {
    opacity: 1;
  }
}
@keyframes avatar-loading-slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(340%);
  }
}
@keyframes skeleton-pulse {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}
@keyframes backdrop-out {
  to {
    opacity: 0;
  }
}
@keyframes sheet-up {
  from {
    transform: translateY(100%);
  }
}
@keyframes sheet-down {
  to {
    transform: translateY(100%);
  }
}
@keyframes interrupt-hint-in {
  from {
    opacity: 0;
  }
}
:root {
  font-synthesis: none;
  font-size: var(--font-size-16);
  line-height: 1.5;
  font-weight: var(--font-weight-regular);
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
html, body, #root {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
html, body {
  overscroll-behavior: none;
}
button, input, select {
  font: inherit;
}
html {
  -webkit-tap-highlight-color: transparent;
}
button, a, [role="button"], summary {
  touch-action: manipulation;
}
button {
  color: inherit;
  cursor: pointer;
  border: 0;
  background: none;
  min-height: var(--size-44);
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.48;
}
button:focus-visible, a:focus-visible, select:focus-visible, input:focus-visible, summary:focus-visible {
  outline: var(--stroke-width-3) solid var(--stroke-brand);
  outline-offset: var(--space-3);
}
@media (hover: hover) and (pointer: fine) {
button:hover:not(:disabled) {
  filter: brightness(0.96);
}
}
h1, h2, h3, p {
  margin: 0;
}
h3 {
  font-size: var(--font-size-22);
  line-height: 1.35;
  font-weight: var(--font-weight-bold);
}
p + p {
  margin-top: var(--space-10);
}
svg {
  display: block;
}
.icon {
  width: var(--size-22);
  height: var(--size-22);
  flex: none;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.65;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
}
.app {
  height: 100dvh;
  max-width: var(--size-430);
  margin: 0 auto;
  grid-template-rows: auto auto minmax(0, 1fr) auto;
  isolation: isolate;
  position: relative;
  box-shadow: 0 0 80px color-mix(in srgb, var(--main-700) 9.8%, transparent);
}
.app-header {
  justify-content: space-between;
  gap: var(--space-8);
}
.brand {
  flex-direction: column;
  line-height: 1;
}
.avatar {
  align-items: center;
}
.greeting {
  text-align: center;
  font-size: var(--font-size-16);
  line-height: 1.65;
  margin-top: var(--space-18);
}
.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: none;
  gap: var(--space-8);
}
.primary, .secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--button-large-gap);
  padding: var(--button-large-padding-y) var(--button-large-padding-x);
  font-size: var(--button-large-text-size);
  line-height: var(--button-large-text-line);
}
button.primary:disabled, .v7-shell button.primary:disabled {
  border-color: var(--bg-disabled);
  background: var(--bg-disabled);
  color: var(--fg-disabled);
  opacity: 1;
}
.full-width {
  width: 100%;
}
.text-button {
  color: var(--fg-brand);
  text-decoration: underline;
  text-underline-offset: var(--space-3);
  font-size: var(--text-body-compact-size);
  line-height: var(--text-body-compact-line);
  padding: var(--space-8);
}
.course-details {
  border-top: var(--stroke-width-1) solid var(--stroke-subtle);
  padding: var(--space-10) 0;
  font-size: var(--font-size-14);
}
.course-details summary {
  cursor: pointer;
  padding: var(--space-10) 0;
  min-height: var(--size-44);
  font-weight: var(--font-weight-medium);
}
.muted {
  color: var(--fg-secondary);
  margin: var(--space-10) 0;
}
.source {
  color: var(--fg-secondary);
  font-size: var(--text-caption-size);
  line-height: var(--text-caption-line);
  margin: var(--space-8) 0;
  overflow-wrap: anywhere;
}
.footer-note {
  font-size: var(--font-size-9);
  text-align: center;
  margin-top: var(--space-10);
  color: var(--fg-secondary);
}
.chat-panel > .muted {
  flex: none;
  margin: 0 0 var(--space-10);
  font-size: var(--font-size-11);
}
.chat-log {
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
}
.batu-message, .user-message {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  margin-bottom: var(--space-12);
}
.user-message {
  margin-left: auto;
}
.suggestions {
  gap: var(--space-6);
  flex: none;
}
.suggestions button {
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--radius-full);
  min-height: var(--size-34);
  padding: var(--space-6) var(--space-10);
  font-size: var(--font-size-11);
}
.loading {
  position: absolute;
  top: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  padding: var(--space-8) var(--space-12);
  border-radius: var(--radius-20);
  background: color-mix(in srgb, var(--bg-surface) 94.12%, transparent);
  font-size: var(--font-size-12);
  z-index: 1;
  box-shadow: 0 3px 12px color-mix(in srgb, var(--main-700) 8.24%, transparent);
}
.fatal {
  padding: var(--space-32);
  max-width: var(--size-430);
  margin: auto;
}
.sr-only {
  position: absolute;
  width: var(--size-1);
  height: var(--size-1);
  padding: 0;
  margin: calc(-1 * var(--space-1));
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
dialog {
  padding: 0;
  max-height: 75dvh;
  margin: auto auto 0;
}
dialog[open] {
  display: flex;
  flex-direction: column;
}
dialog::backdrop {
  background: color-mix(in srgb, var(--bg-neutral-solid) 33.33%, transparent);
  backdrop-filter: blur(3px);
}
.modal-body {
  overflow-y: auto;
  overscroll-behavior: contain;
}
.scenario-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}
.scenario-options button {
  background: var(--bg-surface);
  box-shadow: inset 0 0 0 1px var(--stroke-subtle);
  padding: var(--space-8);
  border-radius: var(--radius-8);
  font-size: var(--font-size-12);
}
.scenario-options button[aria-pressed="true"] {
  background: var(--bg-selected);
  box-shadow: inset 0 0 0 1px var(--main-700);
}
.location-card strong {
  display: block;
  margin-bottom: var(--space-8);
}
.emergency-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-6);
  background: var(--bg-critical-solid);
  color: var(--fg-on-brand-solid);
  border-radius: var(--radius-10);
  min-height: var(--size-48);
  padding: var(--space-12) var(--space-16);
  text-decoration: none;
  font-size: var(--button-large-text-size);
  line-height: var(--button-large-text-line);
  font-weight: var(--font-weight-medium);
}
@media (min-width: 600px) {
dialog {
  margin: auto;
  border-radius: var(--radius-24);
}
}
@media (min-width: 600px) {
.app {
  border-left: var(--stroke-width-1) solid color-mix(in srgb, var(--gray-300) 31.37%, transparent);
  border-right: var(--stroke-width-1) solid color-mix(in srgb, var(--gray-300) 31.37%, transparent);
}
}
@media (min-width: 600px) {
.avatar-image img {
  object-position: center 60%;
}
}
@media (max-height: 700px) {
.app-header {
  padding-top: var(--space-8);
  padding-bottom: var(--space-4);
}
}
@media (max-height: 700px) {
.brand {
  font-size: var(--font-size-26);
}
}
@media (max-height: 700px) {
.app-footer {
  padding: var(--space-8) var(--space-16) calc(var(--space-6) + env(safe-area-inset-bottom));
}
}
@media (max-height: 700px) {
.footer-note {
  font-size: var(--font-size-8);
  margin-top: var(--space-6);
}
}
@media (max-height: 700px) {
.greeting {
  margin-top: var(--space-8);
  font-size: var(--font-size-14);
  padding: var(--space-10) var(--space-14);
}
}
@media (max-height: 700px) {
.panel-heading {
  padding: var(--space-6) var(--space-10) var(--space-4) var(--space-16);
}
}
@media (max-height: 700px) {
.panel-heading h2 {
  font-size: var(--font-size-16);
}
}
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  scroll-behavior: auto !important;
  transition: none !important;
  animation: none !important;
}
}
.source-statuses p {
  margin: var(--space-4) 0;
}
.app-header {
  padding-top: calc(var(--space-6) + env(safe-area-inset-top));
  padding-bottom: var(--space-2);
}
.footer-note {
  font-size: var(--font-size-10);
  margin-top: var(--space-4);
}
.chat-mode .context-panel {
  margin: 0 var(--space-6);
}
@media (max-height: 700px) {
.app-footer {
  padding-top: var(--space-6);
}
}
.bandali-app {
  max-width: var(--size-430);
}
.bandali-app .brand {
  font-size: var(--font-size-21);
  font-weight: var(--font-weight-bold);
  letter-spacing: -1px;
  align-items: flex-start;
}
.bandali-app .app-header > .icon-button {
  justify-self: end;
}
.bandali-app .stage {
  display: flex;
  flex-direction: column;
  position: relative;
}
.bandali-app .avatar {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  gap: var(--space-6);
}
.bandali-app .avatar-image {
  flex: 1;
  min-height: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.bandali-app .avatar-image img {
  height: 100%;
  max-height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center bottom;
}
.bandali-app .greeting {
  position: static;
  transform: none;
  flex: none;
}
.bandali-app .primary {
  box-shadow: none;
  min-height: var(--button-large-height);
}
.bandali-app .secondary {
  border: var(--stroke-width-1) solid var(--stroke-subtle);
}
.bandali-app .muted {
  font-size: var(--text-caption-size);
  line-height: var(--text-caption-line);
}
.bandali-app .footer-note {
  font-size: var(--font-size-9);
  line-height: 1.3;
  margin-top: var(--space-6);
}
dialog::backdrop {
  background: color-mix(in srgb, var(--bg-neutral-solid) 40%, transparent);
  backdrop-filter: blur(3px);
}
.bandali-app.chat-mode .context-panel {
  background: var(--bg-neutral-weak);
}
@media (max-height: 720px) {
.bandali-app .greeting {
  padding: var(--space-10) var(--space-14);
}
}
@media (max-height: 720px) {
.bandali-app .footer-note {
  font-size: var(--font-size-8);
}
}
@media (max-height: 720px) {
.bandali-app .panel-heading {
  min-height: var(--size-38);
  padding: var(--space-8) var(--space-12);
}
}
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  scroll-behavior: auto !important;
  animation: none !important;
  transition: none !important;
}
}
.bandali-app .avatar {
  margin: 0;
  justify-content: flex-end;
  overflow: hidden;
}
.bandali-app .avatar-image {
  inset: auto;
  z-index: 0;
  border-radius: 0;
}
.bandali-app .avatar-image img {
  mix-blend-mode: normal;
}
.bandali-app .greeting {
  margin: 0;
  backdrop-filter: none;
}
.home-ask input {
  width: 100%;
}
.home-ask button {
  width: var(--size-34);
  min-width: var(--size-34);
  padding: 0;
  display: grid;
  place-items: center;
  height: var(--size-44);
}
.home-ask .icon {
  width: var(--size-19);
  height: var(--size-19);
}
.bandali-app {
  width: 100%;
  grid-template-columns: minmax(0, 1fr);
}
.bandali-app .stage, .bandali-app .context-panel, .bandali-app .places-panel, .bandali-app .greeting {
  min-width: 0;
}
.bandali-app .avatar-image {
  position: relative;
}
.bandali-app .avatar-canvas {
  position: absolute;
  display: block;
  width: 100%;
  opacity: 0;
}
.bandali-app .avatar-canvas.shown {
  opacity: 1;
  transition: opacity 0.25s ease;
}
.bandali-app:not(.compact) .avatar-canvas {
  inset: auto 0 0;
  height: auto;
  aspect-ratio: 11 / 10;
  max-height: 100%;
}
@media (prefers-reduced-motion: reduce) {
.bandali-app .avatar-canvas.shown {
  transition: none;
}
}
.home-ask input:focus-visible, .place-search input:focus-visible {
  outline: none;
}
.home-ask:has(input:focus-visible), .place-search:has(input:focus-visible) {
  outline: var(--stroke-width-3) solid var(--stroke-brand);
  outline-offset: var(--space-2);
}
.bandali-app.chat-mode .avatar {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.bandali-app.chat-mode:not(.compact) .avatar-canvas {
  inset: 0 0 auto;
}
.bandali-app.chat-mode:not(.compact) .avatar-image img {
  object-position: center top;
}
.bandali-app.chat-mode .greeting {
  display: none;
}
.bandali-app.chat-mode .avatar-image {
  transition: filter 0.25s ease;
}
.bandali-app.chat-mode.chat-overflow .avatar-image {
  filter: blur(8px);
}
@media (prefers-reduced-motion: reduce) {
.bandali-app.chat-mode .avatar-image {
  transition: none;
}
}
.bandali-app .chat-stage {
  position: relative;
  flex: 1;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.bandali-app .chat-stage[hidden] {
  display: none;
}
.bandali-app .chat-panel {
  flex: 1;
}
.bandali-app .chat-log {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.bandali-app .chat-log > :first-child {
  margin-top: auto;
}
.bandali-app .chat-turn {
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
}
.bandali-app .batu-row {
  display: flex;
  align-items: flex-start;
  gap: var(--space-8);
}
.bandali-app .batu-face {
  flex: none;
  width: var(--size-34);
  height: var(--size-34);
  border-radius: var(--radius-full);
  object-fit: cover;
  object-position: 50% 8%;
  background: var(--bg-surface);
  border: var(--stroke-width-1) solid var(--white);
  box-shadow: 0 2px 6px color-mix(in srgb, var(--gray-950) 12.16%, transparent);
}
.bandali-app .chat-log .batu-message, .bandali-app .chat-log .user-message {
  margin: 0;
  animation: chat-rise 0.2s ease-out;
}
.bandali-app .chat-log .batu-message {
  max-width: none;
  border-top-left-radius: var(--radius-4);
}
.bandali-app .chat-log .user-message {
  align-self: flex-end;
  border-bottom-right-radius: var(--radius-4);
}
.bandali-app .chat-log .suggestions {
  flex-wrap: wrap;
  margin: var(--space-8) 0 0;
}
.bandali-app .chat-log .suggestions button {
  background: var(--bg-surface);
}
.bandali-app .chat-turn .nearby-results {
  margin-left: var(--space-40);
  padding: 0;
}
@media (prefers-reduced-motion: reduce) {
.bandali-app .chat-log .batu-message, .bandali-app .chat-log .user-message, .bandali-app .typing-dots span {
  animation: none;
}
}
.answer-pending {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}
.answer-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
  margin-top: var(--space-10);
}
.answer-links a {
  display: inline-flex;
  align-items: center;
  gap: var(--space-4);
  padding: 0.5rem var(--space-10);
  border: var(--stroke-width-1) solid var(--source-link-stroke);
  border-radius: var(--radius-10);
  color: var(--source-link-fg);
  background: var(--source-link-bg);
  font-size: 0.85rem;
  text-decoration: none;
}
.answer-links svg {
  width: 1em;
  height: 1em;
}
.entry-opening > .status-slot, .entry-opening > .stage > :not(.entry-skeleton), .entry-opening > .app-footer > * {
  visibility: hidden;
}
.entry-skeleton {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-10);
  padding: var(--space-8) var(--space-20) var(--space-12);
}
.v7-shell > .stage > .entry-skeleton {
  bottom: var(--suggest-h);
}
.entry-skeleton.skeleton-mode-text {
  justify-content: flex-end;
  align-items: stretch;
  padding: 0 var(--space-20) var(--space-28);
}
.skeleton-answer {
  display: flex;
  flex-direction: column;
}
.skeleton-author {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  margin-bottom: var(--space-12);
}
.skeleton-face {
  width: var(--size-28);
  height: var(--size-28);
  border-radius: var(--radius-full);
}
.skeleton-name {
  width: var(--size-42);
  height: var(--size-16);
  border-radius: var(--radius-4);
}
.skeleton-line {
  height: var(--size-16);
  margin: var(--space-3) 0;
  border-radius: var(--radius-4);
}
.skeleton-line-short {
  width: 40%;
}
.entry-opening > .app-footer > .ai-notice {
  visibility: visible;
}
.skeleton-block {
  display: block;
  flex: none;
  background: var(--gray-200);
  animation: skeleton-pulse 1.2s ease-in-out infinite alternate;
}
.entry-skeleton.skeleton-mode-avatar {
  justify-content: center;
  padding: 0;
}
.skeleton-character {
  display: block;
  flex: 0 1 auto;
  min-height: 0;
  width: var(--size-294_75);
  max-width: 100%;
  height: var(--size-349_195);
  max-height: 100%;
  object-fit: contain;
}
.answer-card {
  display: grid;
  gap: var(--space-4);
  padding: var(--space-12);
  font-size: var(--font-size-14);
  line-height: var(--font-line-22);
  color: var(--fg-neutral);
}
.answer-more {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: var(--button-small-gap);
  min-height: var(--button-small-height);
  margin: var(--space-4) var(--space-6);
  padding: var(--button-small-padding-y) var(--button-small-padding-x);
  border: 0;
  border-radius: var(--button-small-radius);
  background: var(--bg-subtle);
  color: var(--fg-brand);
  font-size: var(--button-small-text-size);
  line-height: var(--button-small-text-line);
  font-weight: var(--font-weight-medium);
}
.answer-card .answer-more {
  margin: var(--space-4) 0 0;
}
.answer-more .icon {
  width: var(--size-16);
  height: var(--size-16);
}
.answer-more[aria-expanded="true"] .icon {
  transform: rotate(180deg);
}
.answer-card .answer-links {
  margin: var(--space-4) 0 0;
}
.bandali-app .chat-panel {
  display: flex;
  flex-direction: column;
  min-height: 0;
}
.bandali-app .chat-panel > .chat-log {
  flex: 1;
}
.v7-shell .chat-log .batu-message {
  position: relative;
}
.bubble-clamp {
  position: relative;
  display: block;
}
.bubble-text.clamped {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.bubble-more {
  position: relative;
  display: inline;
  min-height: 0;
  margin: 0 0 0 var(--space-4);
  padding: 0;
  border: 0;
  border-radius: 0;
  background: none;
  box-shadow: none;
  color: var(--fg-bubble-link);
  font: inherit;
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
}
.bubble-more::before {
  content: "";
  position: absolute;
  inset: calc(-1 * var(--space-13)) calc(-1 * var(--space-4));
}
.bubble-more.overlay {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 0 0 var(--space-28);
  line-height: var(--font-line-22);
  background: linear-gradient(
    to right,
    transparent,
    var(--bg-brand-solid) 40%
  );
}
:root {
  color: var(--fg-neutral);
  background: var(--bg-page-bottom);
  -webkit-font-smoothing: antialiased;
  /* The screen's edges take the page background's first and last stops (the entry keeps its illustration's). */
  --knps-edge-top: var(--bg-page-top);
  --knps-edge-bottom: var(--bg-page-bottom);
}
body::before, body::after {
  content: "";
  position: fixed;
  right: 0;
  left: 0;
  z-index: 8;
  pointer-events: none;
}
body::before {
  top: 0;
  height: max(env(safe-area-inset-top), var(--size-1));
  background: var(--knps-edge-top);
}
body::after {
  bottom: 0;
  height: max(env(safe-area-inset-bottom), var(--size-1));
  background: var(--knps-edge-bottom);
}
:root:has(dialog[open]) {
  background: var(--knps-edge-top);
}
:root:has(dialog.alert[open]) {
  background: var(--knps-edge-bottom);
}
button:focus-visible, a:focus-visible, select:focus-visible, input:focus-visible, summary:focus-visible {
  outline-color: var(--main-600);
}
.v7-icon {
  display: inline-block;
  position: relative;
  flex: none;
  width: var(--size-24);
  height: var(--size-24);
  vertical-align: middle;
}
.v7-icon::before {
  content: "";
  position: absolute;
  inset: 0;
  background: currentColor;
  mask: var(--v7-art) center / 100% 100% no-repeat;
  -webkit-mask: var(--v7-art) center / 100% 100% no-repeat;
  pointer-events: none;
}
.v7-icon[data-icon="HeaderBack"] {
  --v7-art: url("/assets/v7/icons/HeaderBack.svg");
}
.v7-icon[data-icon="Chevron"] {
  --v7-art: url("/assets/v7/icons/Chevron.svg");
}
.v7-icon[data-icon="Mic"] {
  --v7-art: url("/assets/v7/icons/Mic.svg");
}
.v7-icon[data-icon="Volume"] {
  --v7-art: url("/assets/v7/icons/Volume.svg");
}
.v7-icon[data-icon="VolumeOff"] {
  --v7-art: url("/assets/v7/icons/VolumeOff.svg");
}
.v7-icon[data-icon="Send"] {
  --v7-art: url("/assets/v7/icons/Send.svg");
}
.v7-icon[data-icon="Close"] {
  --v7-art: url("/assets/v7/icons/Close.svg");
}
.v7-icon[data-icon="Chat"] {
  --v7-art: url("/assets/v7/icons/Chat.svg");
}
.v7-icon[data-icon="Voice"] {
  --v7-art: url("/assets/v7/icons/Voice.svg");
}
.v7-icon[data-icon="HeaderLanguage"] {
  --v7-art: url("/assets/v7/icons/HeaderLanguage.svg");
}
.v7-icon[data-icon="Voice"]::before {
  inset: auto;
  left: 2.97%;
  top: 6.55%;
  width: 90.54%;
  height: 83.33%;
}
.v7-icon[data-icon="Chat"]::before {
  inset: auto;
  left: 8.33%;
  top: 12.5%;
  width: 83.33%;
  height: 75.03%;
}
.v7-icon[data-icon="HeaderBack"]::before {
  inset: auto;
  left: 29.36%;
  top: 10.97%;
  width: 39.94%;
  height: 75%;
}
.entry-screen {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  padding: 0;
  overflow-y: auto;
  color: var(--fg-neutral);
  background: var(--bg-entry) url("/assets/v7/entry-loop-poster.jpg")
    var(--entry-backdrop-x) var(--entry-backdrop-y) /
    var(--entry-backdrop-w) var(--entry-backdrop-h) no-repeat;
}
.entry-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
}
.entry-video {
  position: absolute;
  left: var(--entry-backdrop-x);
  top: var(--entry-backdrop-y);
  display: block;
  width: var(--entry-backdrop-w);
  height: var(--entry-backdrop-h);
  object-fit: contain;
  pointer-events: none;
}
.entry-video::-webkit-media-controls {
  display: none !important;
}
.entry-video::-webkit-media-controls-panel {
  display: none !important;
}
.entry-video::-webkit-media-controls-overlay-play-button {
  display: none !important;
}
.entry-video::-webkit-media-controls-start-playback-button {
  display: none !important;
  -webkit-appearance: none;
}
.entry-video.is-blocked {
  opacity: 0;
}
.entry-heading {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  flex: none;
  padding: max(var(--space-24), env(safe-area-inset-top)) var(--space-24) var(--space-16);
}
.entry-wordmark {
  position: relative;
  display: block;
  line-height: 0;
}
.entry-beta {
  position: absolute;
  left: calc(95% + var(--space-3));
  bottom: 12%;
  padding: 0 var(--badge-padding-x);
  border-radius: var(--badge-radius);
  background: var(--gray-700);
  color: var(--fg-on-brand-solid);
  font-family: var(--knps-font-family);
  font-size: var(--font-size-10);
  line-height: var(--font-line-15);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--font-tracking-default);
  white-space: nowrap;
}
.header-beta {
  display: inline-block;
  flex: none;
  margin-right: var(--space-4);
  padding: 0 var(--badge-padding-x);
  border-radius: var(--badge-radius);
  background: var(--fg-muted);
  color: var(--fg-on-brand-solid);
  font-family: var(--knps-font-family);
  font-size: var(--font-size-10);
  line-height: var(--font-line-15);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--font-tracking-default);
  white-space: nowrap;
  vertical-align: middle;
}
.entry-wordmark img {
  display: block;
  width: var(--size-256);
  height: var(--size-100);
  max-width: 100%;
  object-fit: contain;
}
.entry-service {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-8) var(--space-14) var(--space-8) var(--space-18);
  border-radius: var(--radius-full);
  background: var(--bg-surface);
  color: var(--fg-secondary);
  font-size: var(--text-body-default-size);
  line-height: var(--text-body-default-line);
  letter-spacing: var(--font-tracking-default);
}
.entry-language {
  position: absolute;
  top: max(var(--space-7), env(safe-area-inset-top));
  right: var(--space-15);
  z-index: 2;
}
.entry-language .language-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size-44);
  height: var(--size-44);
  padding: 0;
  border-radius: var(--radius-12);
  color: var(--fg-brand);
}
.entry-language .language-button .v7-icon {
  width: var(--size-20);
  height: var(--size-20);
}
.entry-main {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0;
  padding: var(--space-8) var(--space-28) max(var(--space-24), env(safe-area-inset-bottom));
  position: relative;
  z-index: 1;
}
.entry-art {
  flex: 1 0 200px;
  min-height: var(--size-200);
}
.entry-bottom {
  position: relative;
  z-index: 1;
  flex: none;
}
.entry-conversations {
  display: grid;
}
.entry-conversations button {
  display: flex;
  align-items: center;
  width: 100%;
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--entry-button-radius);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--font-tracking-default);
  box-shadow: 0 10px 20px var(--shadow-medium);
}
.entry-conversations button > .v7-icon:last-child {
  width: var(--size-20);
  height: var(--size-22);
}
.entry-ai-notice {
  margin: var(--space-10) 0 0;
  font-size: var(--font-size-12);
  line-height: var(--font-line-18);
  letter-spacing: var(--font-tracking-default);
  text-align: center;
  color: var(--fg-secondary);
  overflow-wrap: anywhere;
}
.modal-subtitle {
  margin: var(--space-4) 0 0;
  font-size: var(--text-body-compact-size);
  line-height: var(--text-body-compact-line);
  color: var(--fg-muted);
}
.privacy-copy {
  color: var(--fg-secondary);
}
.privacy-copy h3 {
  color: var(--fg-neutral);
}
.privacy-copy .primary {
  width: 100%;
}
.v7-shell {
  display: flex;
  flex-direction: column;
  background: var(--bg-page-gradient);
  color: var(--fg-neutral);
}
.v7-shell .app-header {
  position: sticky;
  top: 0;
  z-index: 3;
  display: grid;
  align-items: center;
  min-height: calc(var(--navigation-bar-height-default) + env(safe-area-inset-top));
  padding: env(safe-area-inset-top) var(--space-16) 0;
  background: var(--bg-page-top);
}
.v7-shell .brand {
  width: var(--size-24);
  height: var(--size-44);
  margin-left: var(--space-4);
  padding: 0;
  display: grid;
  place-items: center;
}
.v7-shell .brand .v7-icon {
  width: var(--size-24);
  height: var(--size-24);
}
.v7-shell .header-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
  min-width: 0;
}
.v7-shell .header-title > strong {
  font-size: var(--text-title-section-size);
  line-height: var(--text-title-section-line);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
}
.v7-shell .language-button {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: var(--space-6);
  height: var(--size-44);
  border-radius: var(--radius-12);
  font-size: var(--text-meta-size);
  line-height: var(--text-meta-line);
  font-weight: var(--font-weight-bold);
}
.v7-shell .language-button .v7-icon {
  width: var(--size-20);
  height: var(--size-20);
}
.v7-shell .language-button.more-button {
  width: var(--size-28);
}
.v7-shell .language-button.more-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: var(--size-44);
  height: 100%;
}
.v7-shell .more-button .icon {
  width: var(--size-20);
  height: var(--size-20);
  stroke-width: 3.6;
}
.v7-shell .app-header :is(.brand, .language-button) {
  position: relative;
  isolation: isolate;
}
.v7-shell .app-header :is(.brand, .language-button)::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  width: var(--size-40);
  height: var(--size-40);
  border-radius: var(--radius-8);
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.v7-shell .app-header, .v7-shell .connection-line, .v7-shell .app-footer {
  flex: none;
}
.v7-shell .stage {
  flex: 1;
  min-height: 0;
  padding: 0 var(--space-20);
  gap: var(--space-10);
}
.v7-shell.messenger-mode .loading {
  top: var(--space-68);
}
.v7-shell .avatar-image img {
  filter: none;
}
.v7-shell .greeting {
  align-self: flex-start;
  width: auto;
  max-width: 100%;
  padding: var(--bubble-padding-y) var(--bubble-padding-x);
  border: var(--stroke-width-1) solid transparent;
  border-radius: var(--bubble-radius) var(--bubble-radius) var(--bubble-radius) var(--radius-4);
  background: var(--bubble-avatar-bg);
  color: var(--bubble-avatar-fg);
  box-shadow: 0 0 16px var(--shadow-bubble);
}
.v7-shell .greeting p {
  font-size: var(--bubble-text-size);
  line-height: var(--bubble-text-line);
  text-align: left;
}
.v7-shell .app-footer {
  padding: 0 var(--space-18) max(var(--space-16), env(safe-area-inset-bottom));
  background: var(--bg-page-bottom);
}
.v7-shell.avatar-mode .app-footer {
  background: transparent;
}
.v7-shell {
  --suggest-h: 52px;
}
.v7-shell .suggest-list {
  position: relative;
  z-index: 1;
  display: flex;
  flex: none;
  margin-top: calc(-1 * var(--suggest-h));
  gap: var(--space-8);
  padding: var(--space-8) var(--space-18);
  overflow-x: auto;
  scroll-padding-inline: var(--space-18);
  scrollbar-width: none;
}
.v7-shell .suggest-list::-webkit-scrollbar {
  display: none;
}
.v7-shell .suggest-list[data-fade-start] {
  -webkit-mask-image: linear-gradient(to right, transparent, #000 28px);
  mask-image: linear-gradient(to right, transparent, #000 28px);
}
.v7-shell .suggest-list[data-fade-end] {
  -webkit-mask-image: linear-gradient(to left, transparent, #000 28px);
  mask-image: linear-gradient(to left, transparent, #000 28px);
}
.v7-shell .suggest-list[data-fade-start][data-fade-end] {
  -webkit-mask-image: linear-gradient(to right, transparent, #000 28px, #000 calc(100% - 28px), transparent);
  mask-image: linear-gradient(to right, transparent, #000 28px, #000 calc(100% - 28px), transparent);
}
.v7-shell .suggest-list button {
  position: relative;
  flex: none;
  min-height: 0;
  padding: var(--chip-suggestion-padding-y) var(--chip-suggestion-padding-x);
  border: 0;
  border-radius: var(--chip-suggestion-radius);
  background: var(--bg-surface);
  box-shadow: inset 0 0 0 1px var(--stroke-subtle);
  color: var(--fg-brand);
  font-size: var(--text-label-default-size);
  line-height: var(--text-label-default-line);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
}
.v7-shell .suggest-list button::before {
  content: "";
  position: absolute;
  inset: calc(-1 * var(--space-4)) 0;
}
.v7-shell .conversation-controls {
  display: flex;
  align-items: center;
  gap: var(--space-10);
}
.v7-shell .mic-button, .v7-shell .send-button {
  flex: none;
  width: var(--icon-button-size);
  height: var(--icon-button-size);
  min-height: var(--icon-button-size);
  padding: 0;
  display: grid;
  place-items: center;
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--icon-button-radius);
  background: var(--bg-surface);
  color: var(--fg-neutral);
  box-shadow: none;
}
.v7-shell .mic-button .v7-icon, .v7-shell .send-button .v7-icon {
  width: var(--size-24);
  height: var(--size-24);
}
.v7-shell .mic-button.listening {
  border-color: var(--stroke-brand);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--main-700) 14.51%, transparent);
}
.v7-shell .send-button:not(:disabled) {
  background: var(--bg-brand-solid);
  border-color: var(--stroke-brand);
  color: var(--fg-on-brand-solid);
}
.v7-shell .send-button:disabled {
  opacity: 1;
  color: var(--fg-placeholder);
}
.v7-shell .home-ask, .v7-shell.messenger-mode .home-ask, .v7-shell .home-ask.sending {
  position: static;
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--input-gap);
  height: var(--input-height);
  min-height: var(--input-height);
  margin: 0;
  padding: 0 var(--input-padding-x);
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--input-radius);
  background: var(--bg-surface);
}
.v7-shell .home-ask input {
  flex: 1;
  min-width: 0;
  height: var(--size-24);
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--fg-neutral);
}
.v7-shell .home-ask input::placeholder {
  color: var(--fg-placeholder);
}
.v7-shell .home-ask .mode-switch {
  flex: none;
  width: var(--size-36);
  min-width: var(--size-36);
  height: var(--size-36);
  min-height: var(--size-36);
  padding: 0;
  display: grid;
  place-items: center;
  border-radius: var(--radius-full);
  background: var(--bg-brand-weak);
  color: var(--fg-brand);
}
.v7-shell .home-ask .mode-switch .v7-icon {
  width: var(--size-22);
  height: var(--size-22);
}
.v7-shell .footer-note, .v7-shell .ai-notice {
  font-size: var(--font-size-10);
  color: var(--fg-muted);
}
.voice-input-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
  min-height: var(--size-30);
  padding: var(--space-8) 0 var(--space-4);
  text-align: center;
  font-size: var(--text-caption-size);
  line-height: var(--text-caption-line);
  color: var(--fg-brand);
}
.voice-level {
  display: flex;
  align-items: center;
  height: var(--size-28);
  gap: var(--space-4);
}
.voice-level i {
  width: var(--size-3);
  border-radius: var(--radius-full);
  background: var(--bg-brand-solid);
  transition: height 0.1s;
}
.v7-shell.text-mode.compact .avatar, .v7-shell.messenger-mode .avatar, .v7-shell .batu-face, .v7-shell .chat-author {
  display: none;
}
.v7-shell .batu-content {
  display: block;
  min-width: 0;
}
.v7-shell .chat-panel {
  padding: 0;
}
.v7-shell.messenger-mode .chat-stage {
  padding-top: var(--space-12);
}
.v7-shell .chat-log {
  gap: var(--space-10);
  padding: var(--space-2) 0 var(--space-8);
}
.v7-shell .stage .chat-log {
  margin-inline: calc(-1 * var(--space-20));
  padding-inline: var(--space-20);
}
.v7-shell.chat-mode .chat-log {
  padding-bottom: calc(var(--space-8) + var(--suggest-h));
}
.v7-shell:not(.chat-mode):not(.compact) > .stage {
  padding-bottom: var(--suggest-h);
}
.v7-shell .chat-log .suggestions {
  display: none;
}
.v7-shell .batu-row {
  max-width: 100%;
}
.v7-shell .chat-log .batu-message, .v7-shell.messenger-mode .batu-message {
  padding: var(--bubble-padding-y) var(--bubble-padding-x);
  border: var(--stroke-width-1) solid transparent;
  border-radius: var(--bubble-radius) var(--bubble-radius) var(--bubble-radius) var(--radius-4);
  background: var(--bubble-avatar-bg);
  color: var(--bubble-avatar-fg);
  font-size: var(--bubble-text-size);
  line-height: var(--bubble-text-line);
  box-shadow: 0 0 16px var(--shadow-bubble);
  backdrop-filter: none;
}
.v7-shell .chat-log .user-message, .v7-shell.messenger-mode .user-message {
  max-width: 80%;
  padding: var(--bubble-padding-y) var(--bubble-padding-x);
  border: var(--stroke-width-1) solid transparent;
  border-radius: var(--bubble-radius) var(--bubble-radius) var(--radius-4) var(--bubble-radius);
  background: var(--bubble-user-bg);
  color: var(--bubble-user-fg);
  font-size: var(--bubble-text-size);
  line-height: var(--bubble-text-line);
  box-shadow: 0 0 16px var(--shadow-bubble);
}
.v7-shell.avatar-mode .chat-log .answer-card {
  align-self: flex-start;
  margin-left: 0;
  border: var(--stroke-width-1) solid transparent;
  border-radius: var(--radius-20) var(--radius-20) var(--radius-20) var(--radius-4);
  background: var(--bg-brand-solid);
  color: var(--fg-on-brand-solid);
  box-shadow: 0 0 16px var(--shadow-bubble);
}
.v7-shell.avatar-mode .chat-log .answer-card .answer-links a {
  border: 0;
  background: color-mix(in srgb, var(--bg-surface) 14.12%, transparent);
  color: var(--fg-on-brand-solid);
}
.v7-shell .batu-message a {
  color: var(--fg-on-brand-solid);
}
.v7-shell .batu-message .answer-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
  margin-top: var(--space-10);
}
.v7-shell .batu-message .answer-links a, .v7-shell .batu-message .answer-links button {
  display: flex;
  align-items: center;
  border: 0;
  background: color-mix(in srgb, var(--bg-surface) 14.12%, transparent);
  color: var(--fg-on-brand-solid);
  text-decoration: none;
}
.v7-shell .batu-message .answer-links button {
  justify-content: space-between;
  gap: var(--space-16);
  width: 100%;
  min-height: var(--size-44);
  padding: var(--space-10);
  border-radius: var(--radius-12);
  font-size: var(--text-label-default-size);
  line-height: var(--text-label-default-line);
  font-weight: var(--font-weight-medium);
  text-align: left;
}
.v7-shell .batu-message .answer-links .v7-icon {
  width: var(--size-16);
  height: var(--size-16);
}
.v7-shell .answer-links a {
  position: relative;
  justify-content: flex-start;
  gap: var(--button-xsmall-gap);
  min-height: var(--button-xsmall-height);
  padding: var(--button-xsmall-padding-y) var(--button-xsmall-padding-x);
  border-radius: var(--button-xsmall-radius);
  font-size: var(--button-xsmall-text-size);
  line-height: var(--button-xsmall-text-line);
  font-weight: var(--font-weight-medium);
}
.v7-shell .answer-links a::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  min-height: var(--size-44);
  transform: translateY(-50%);
}
.v7-shell .answer-links .v7-icon {
  width: var(--size-16);
  height: var(--size-16);
}
.v7-shell .answer-pending {
  color: var(--fg-on-brand-solid);
}
.v7-shell .chat-turn .nearby-results {
  margin-left: 0;
}
.v7-shell .panel-heading {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  border-bottom: 0;
}
.v7-shell .panel-heading h2 {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.v7-shell .panel-heading .icon-button {
  color: var(--fg-muted);
}
.v7-shell .panel-heading .icon-button .v7-icon {
  width: var(--size-17);
  height: var(--size-17);
}
.v7-shell .primary, .v7-shell button.primary {
  border: var(--stroke-width-1) solid var(--stroke-brand);
  border-radius: var(--button-large-radius);
  background: var(--bg-brand-solid);
  color: var(--fg-on-brand-solid);
  font-weight: var(--font-weight-medium);
}
dialog {
  width: min(var(--size-430), 100%);
  max-width: var(--size-430);
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--radius-20) var(--radius-20) 0 0;
  background: var(--bg-page-bottom);
  box-shadow: 0 12px 32px rgba(20, 51, 36, 0.11);
  color: var(--fg-neutral);
}
.v7-shell dialog > .panel-heading, dialog > .panel-heading {
  min-height: 0;
  padding: var(--layout-sheet-padding) var(--layout-sheet-padding) var(--layout-sheet-title-gap);
  border: 0;
  background: var(--bg-page-bottom);
}
.v7-shell dialog > .panel-heading h2, dialog > .panel-heading h2 {
  font-size: var(--text-title-sheet-size);
  line-height: var(--text-title-sheet-line);
  font-weight: var(--font-weight-medium);
}
.v7-shell dialog > .panel-heading .icon-button, dialog > .panel-heading .icon-button {
  width: var(--sheet-close-size);
  height: var(--sheet-close-size);
  min-height: var(--sheet-close-size);
  padding: 0;
  border-radius: var(--radius-full);
  background: transparent;
}
dialog .modal-body {
  padding: 0 var(--layout-sheet-padding) max(var(--layout-sheet-padding), env(safe-area-inset-bottom));
}
dialog:focus, dialog:focus-visible {
  outline: none;
}
.park-options, .language-options {
  display: flex;
  flex-direction: column;
  gap: var(--option-row-gap);
}
.park-options > button, .language-options > button {
  display: flex;
  align-items: center;
  gap: var(--option-row-content-gap);
  min-height: var(--option-row-height);
  padding: var(--option-row-padding-y) var(--option-row-padding-x);
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--option-row-radius);
  background: var(--bg-surface);
  text-align: left;
}
.language-options > button[aria-pressed="true"] {
  border-color: var(--stroke-brand);
  background: var(--bg-selected);
}
.park-options > button > span:not(.park-option-icon), .language-options > button > span {
  flex: 1;
  display: grid;
}
.park-options strong, .language-options strong {
  font-size: var(--text-body-compact-size);
  line-height: var(--text-body-compact-line);
  font-weight: var(--font-weight-bold);
}
.park-options small, .language-options small {
  font-size: var(--text-caption-size);
  line-height: var(--text-caption-line);
  color: var(--fg-muted);
}
.park-options > button > .icon, .language-options > button > .icon {
  width: var(--size-20);
  height: var(--size-20);
  color: var(--fg-brand);
}
.language-options .muted {
  margin: 0 var(--space-4);
  font-size: var(--font-size-12);
  color: var(--fg-muted);
}
.more-options > button {
  min-height: var(--list-row-height);
}
.more-options > button > .icon {
  color: var(--fg-muted);
}
.settings-options > button {
  min-height: var(--list-row-height);
}
.settings-options > button > .icon {
  color: var(--fg-muted);
}
.settings-options .toggle {
  display: block;
  flex: none;
  position: relative;
  width: var(--toggle-width);
  height: var(--toggle-height);
  border-radius: var(--radius-full);
  background: var(--toggle-off-bg);
  transition: background-color 0.2s ease;
}
.settings-options .toggle::after {
  content: "";
  position: absolute;
  /* 가은 11/03: the knob in the middle of the track's height, and its on place from the tokens. */
  top: 50%;
  left: var(--toggle-inset);
  translate: 0 -50%;
  width: var(--toggle-knob);
  height: var(--toggle-knob);
  border-radius: var(--radius-full);
  background: var(--bg-surface);
  box-shadow: 0 1px 2px var(--shadow-bubble);
  transition: left 0.2s ease;
}
.settings-options > [aria-checked="true"] > .toggle {
  background: var(--bg-brand-solid);
}
.settings-options > [aria-checked="true"] > .toggle::after {
  left: calc(100% - var(--toggle-inset) - var(--toggle-knob));
  translate: 0 -50%;
}
@media (min-width: 600px) {
.entry-screen, .v7-shell {
  max-width: var(--size-390);
  height: min(var(--size-844), calc(100dvh - var(--size-48)));
  min-height: 0;
  margin: var(--space-24) auto;
  border-radius: var(--radius-24);
  overflow: hidden;
}
}
@media (min-width: 600px) {
.entry-screen {
  overflow-y: auto;
}
}
@media (min-width: 600px) and (max-height: 500px) {
.entry-screen, .v7-shell {
  height: 100dvh;
  margin: 0 auto;
  border-radius: 0;
}
}
@media (max-width: 359px) {
.entry-main {
  padding-inline: var(--space-20);
}
}
@media (max-width: 359px) {
.entry-conversations button {
  padding-inline: var(--space-16);
}
}
@media (max-width: 359px) {
.entry-wordmark img {
  width: var(--size-240);
  height: var(--size-96);
}
}
@media (max-width: 359px) {
.v7-shell .app-header {
  grid-template-columns: 44px 1fr 56px;
  padding-inline: var(--space-10);
}
}
@media (max-width: 359px) {
.v7-shell .conversation-controls {
  gap: var(--space-6);
}
}
@media (prefers-reduced-motion: reduce) {
.entry-video {
  display: none;
}
}
@media (prefers-reduced-motion: reduce) {
.voice-level i {
  transition: none;
}
}
.v7-shell .home-ask input:focus-visible {
  outline: none;
}
.v7-shell .home-ask:focus-within {
  border-color: var(--stroke-brand);
}
/* 가은 11/03: focus is the 1px brand border alone, by tap or keyboard (no ring). */
.v7-shell .home-ask:has(input:focus-visible) {
  outline: none;
}
.v7-shell .chat-turn .nearby-results {
  padding: var(--space-14) var(--space-16);
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--radius-16);
  background: var(--bg-surface);
  box-shadow: 0 4px 16px var(--shadow-soft);
}
dialog.sheet {
  width: min(var(--sheet-max-width), 100%);
  max-width: var(--sheet-max-width);
  max-height: min(75dvh, calc(100dvh - var(--size-24)));
  margin: auto auto 0;
  border-bottom: 0;
  border-radius: var(--sheet-radius) var(--sheet-radius) 0 0;
}
dialog.sheet .modal-body {
  padding: var(--space-14) var(--space-24) max(var(--space-18), env(safe-area-inset-bottom));
}
dialog .modal-body, dialog.sheet .modal-body {
  padding-top: 0;
}
dialog.alert {
  width: min(var(--dialog-max-width), calc(100% - var(--size-40)));
  margin: auto;
  border-bottom: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--dialog-radius);
}
dialog.alert .alert-actions {
  display: flex;
  gap: var(--dialog-button-gap);
}
dialog.alert .panel-heading h2 {
  font-size: var(--text-body-default-size);
  line-height: var(--text-body-default-line);
}
dialog.alert .modal-body > p {
  margin: 0 0 var(--space-16);
  font-size: var(--text-body-compact-size);
  line-height: var(--text-body-compact-line);
}
dialog.alert .alert-actions > button {
  flex: 1;
  min-width: 0;
  min-height: var(--button-large-height);
  padding: var(--button-large-padding-y) var(--button-large-padding-x);
  border-radius: var(--button-large-radius);
  font-size: var(--button-large-text-size);
  line-height: var(--button-large-text-line);
  font-weight: var(--font-weight-medium);
}
dialog.alert .alert-actions > .secondary {
  border-color: var(--stroke-subtle);
  background: var(--bg-surface);
  color: var(--fg-neutral);
}
dialog.slide {
  animation: sheet-up 240ms ease-out;
}
dialog.slide.leaving {
  animation: sheet-down 200ms ease-out forwards;
}
dialog.slide.leaving::backdrop {
  animation: backdrop-out 200ms ease-out forwards;
}
.modal-later {
  display: block;
  min-height: var(--size-44);
  margin: var(--space-4) auto 0;
  padding: 0 var(--space-12);
  border: 0;
  background: none;
  color: var(--fg-muted);
  font-size: var(--text-caption-size);
  line-height: var(--text-caption-line);
  text-underline-offset: var(--space-2);
}
dialog > .panel-heading .modal-back {
  margin-left: calc(-1 * var(--space-9));
}
dialog > .panel-heading:has(> .modal-back) > h2 {
  flex: 1;
}
dialog .modal-body:has(> .location-card) > p {
  margin: 0 0 var(--space-12);
  font-size: var(--text-body-compact-size);
  line-height: var(--text-body-compact-line);
  color: var(--fg-secondary);
}
dialog .modal-body:has(> .location-card) > p.muted {
  font-size: var(--text-meta-size);
  line-height: var(--text-meta-line);
  color: var(--fg-muted);
}
dialog .modal-body > .emergency-link {
  margin: 0 0 var(--space-16);
}
dialog .location-card {
  margin: var(--space-4) 0 var(--space-16);
  padding: var(--space-12) var(--space-16);
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--radius-16);
  background: var(--bg-surface);
  font-size: var(--text-meta-size);
  line-height: var(--text-meta-line);
}
dialog .location-card strong {
  margin: 0;
  font-size: var(--text-body-compact-size);
  line-height: var(--text-body-compact-line);
  font-weight: var(--font-weight-bold);
  color: var(--fg-neutral);
}
dialog .location-card p {
  margin: var(--space-4) 0 0;
  color: var(--fg-secondary);
}
dialog .location-card p.source {
  color: var(--fg-muted);
}
dialog .modal-body:has(> .location-card) > button.primary, dialog .privacy-copy > button.primary {
  min-height: var(--button-large-height);
  padding: var(--button-large-padding-y) var(--button-large-padding-x);
  border-radius: var(--button-large-radius);
  font-size: var(--button-large-text-size);
  line-height: var(--button-large-text-line);
  font-weight: var(--font-weight-medium);
}
dialog .modal-body:has(> .location-card) > .text-button {
  display: block;
  min-height: var(--size-44);
  margin: var(--space-4) auto 0;
  padding: 0 var(--space-12);
  font-size: var(--text-body-compact-size);
  line-height: var(--text-body-compact-line);
  color: var(--fg-muted);
  text-underline-offset: var(--space-2);
}
dialog .privacy-copy {
  font-size: var(--text-body-compact-size);
  line-height: var(--text-body-compact-line);
}
dialog .privacy-copy h3 {
  margin: var(--space-20) 0 var(--space-4);
  font-size: var(--text-body-compact-size);
  line-height: var(--text-body-compact-line);
  font-weight: var(--font-weight-bold);
}
dialog .privacy-copy h3:first-child {
  margin-top: 0;
}
dialog .privacy-copy p {
  margin: 0;
}
dialog .privacy-copy p:last-of-type {
  margin-top: var(--space-16);
  color: var(--fg-muted);
}
dialog .privacy-copy > button.primary {
  margin-top: var(--space-24);
}
@media (min-width: 600px) {
dialog.sheet {
  margin: auto auto 0;
  border-radius: var(--sheet-radius) var(--sheet-radius) 0 0;
}
}
@media (min-width: 600px) {
dialog.slide:not(.sheet) {
  animation: none;
}
}
@media (prefers-reduced-motion: reduce) {
dialog.slide, dialog.slide.leaving {
  animation: none;
}
}
.v7-shell .rating {
  max-width: 100%;
  color: var(--fg-neutral);
  font-size: var(--text-caption-size);
  line-height: var(--text-caption-line);
}
.v7-shell .rating-row {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0 var(--space-2) 0 var(--space-12);
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--radius-full);
  background: color-mix(in srgb, var(--bg-surface) 85%, transparent);
}
.v7-shell .rating-prompt {
  margin-right: var(--space-2);
  color: var(--fg-secondary);
}
.v7-shell .rating-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--size-44);
  height: var(--size-36);
  padding: 0;
  border: 0;
  border-radius: var(--radius-full);
  background: transparent;
  color: var(--fg-brand);
}
@media (hover: hover) and (pointer: fine) {
.v7-shell .rating-button:hover {
  background: color-mix(in srgb, var(--bg-brand-solid) 8%, transparent);
}
}
.v7-shell .rating-thanks {
  display: inline-block;
  margin: 0;
  padding: var(--space-6) var(--space-12);
  border-radius: var(--radius-full);
  background: color-mix(in srgb, var(--bg-surface) 85%, transparent);
  color: var(--fg-secondary);
}
.v7-shell .rating-form {
  width: min(var(--size-340), 100%);
  padding: var(--space-12) var(--space-14);
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--radius-16);
  background: var(--bg-surface);
  color: var(--fg-neutral);
  font-size: var(--text-meta-size);
  line-height: var(--text-meta-line);
  box-shadow: 0 0 16px var(--shadow-bubble);
}
/* 가은 11/03: the reasons are the design system's radio chips (as 의견 양식), not the browser's radios. */
.v7-shell .rating-form fieldset {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
  margin: 0;
  padding: 0;
  border: 0;
}
/* 가은 11/03: the field titles 14/20 bold, the chips 14/20, the box 16/22, the hint 12/16; 8 inside a field, 14 between
   fields as 의견 양식. */
.v7-shell .rating-form legend {
  margin-bottom: var(--space-8);
  padding: 0;
  font-size: var(--text-label-default-size);
  line-height: var(--text-label-default-line);
  font-weight: var(--font-weight-bold);
}
.v7-shell .rating-reason {
  display: inline-flex;
  align-items: center;
  font-size: var(--text-body-compact-size);
  line-height: var(--text-body-compact-line);
  min-height: var(--radio-chip-height);
  padding: 0 var(--radio-chip-padding-x);
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--radio-chip-radius);
  cursor: pointer;
}
.v7-shell .rating-reason:has(input:checked) {
  border-color: var(--stroke-brand);
  background: var(--bg-selected);
  font-weight: var(--font-weight-bold);
}
.v7-shell .rating-reason input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.v7-shell .rating-comment {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  margin-top: var(--space-14);
}
.v7-shell .rating-comment > span {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  font-size: var(--text-label-default-size);
  line-height: var(--text-label-default-line);
  font-weight: var(--font-weight-bold);
}
/* The header's BETA badge, for 「선택」. */
.v7-shell .rating-optional {
  padding: 0 var(--badge-padding-x);
  border-radius: var(--badge-radius);
  background: var(--fg-muted);
  color: var(--fg-on-brand-solid);
  font-size: var(--font-size-10);
  line-height: var(--font-line-15);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--font-tracking-default);
}
/* 가은 11/03: the box as 의견 양식's. */
.v7-shell .rating-comment textarea {
  width: 100%;
  padding: var(--space-10) var(--space-12);
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--radius-12);
  color: inherit;
  font: inherit;
  font-size: var(--text-body-default-size);
  line-height: var(--text-body-default-line);
  resize: vertical;
}
.v7-shell .rating-hint {
  margin: var(--space-6) 0 0;
  color: var(--fg-muted);
  font-size: var(--text-caption-size);
  line-height: var(--text-caption-line);
}
.v7-shell .rating-error {
  margin: var(--space-6) 0 0;
  color: var(--fg-danger);
}
.v7-shell .rating-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-8);
  margin-top: var(--space-14);
}
/* 가은 11/03: Action Button Small (h32 · 8/12 · 13/16 · 500 · r8). */
.v7-shell .rating-actions button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--button-small-gap);
  min-height: var(--button-small-height);
  padding: var(--button-small-padding-y) var(--button-small-padding-x);
  /* The line inside, so the button stays 32. */
  border: 0;
  box-shadow: inset 0 0 0 var(--stroke-width-1) var(--stroke-subtle);
  border-radius: var(--button-small-radius);
  background: var(--bg-surface);
  color: var(--fg-neutral);
  font-size: var(--button-small-text-size);
  line-height: var(--button-small-text-line);
  font-weight: var(--font-weight-medium);
}
.v7-shell .rating-actions button[type="submit"] {
  box-shadow: none;
  background: var(--bg-brand-solid);
  color: var(--fg-on-brand-solid);
}
.v7-shell .rating-actions button[type="submit"]:disabled {
  background: var(--bg-disabled);
  color: var(--fg-disabled);
}
.entry-conversations {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-12);
}
.entry-conversations button, .entry-conversations .entry-avatar {
  flex-direction: column;
  justify-content: center;
  gap: var(--space-4);
  min-width: 0;
  min-height: var(--entry-button-height);
  padding: var(--space-12) var(--space-8);
  border-color: var(--stroke-brand);
  background: var(--bg-brand-solid);
  color: var(--fg-on-brand-solid);
  font-size: var(--text-body-compact-size);
  line-height: var(--text-body-compact-line);
}
.entry-conversations button span {
  flex: none;
  text-align: center;
  white-space: nowrap;
}
.entry-conversations button > .v7-icon:first-child {
  width: var(--size-24);
  height: var(--size-24);
}
.entry-conversations button > .v7-icon:last-child {
  display: none;
}
.v7-shell .brand, .v7-shell .language-button, .v7-shell .park-picker, .v7-shell .park-picker .v7-icon {
  color: var(--fg-brand);
}
.v7-shell.messenger-mode .chat-log {
  gap: var(--space-20);
  padding-top: var(--space-2);
  -webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - var(--suggest-h) - 8px), transparent calc(100% - var(--suggest-h) + 8px));
  mask-image: linear-gradient(to bottom, #000 calc(100% - var(--suggest-h) - 8px), transparent calc(100% - var(--suggest-h) + 8px));
}
.v7-shell.messenger-mode .loading {
  top: var(--space-8);
}
.answer-author {
  display: none;
}
.v7-shell.messenger-mode .answer-author {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  margin-bottom: var(--space-12);
  color: var(--fg-neutral);
}
.answer-author > span {
  position: relative;
  display: block;
  flex: none;
  width: var(--size-28);
  height: var(--size-28);
  overflow: hidden;
  border-radius: var(--radius-full);
}
.answer-author img {
  position: absolute;
  left: -5.13%;
  top: -30.54%;
  width: 107.55%;
  height: 176.48%;
  max-width: none;
}
.answer-author strong {
  font-size: var(--text-label-default-size);
  font-weight: var(--font-weight-medium);
  line-height: var(--text-label-default-line);
}
.v7-shell.messenger-mode .batu-row, .v7-shell.messenger-mode .batu-content {
  width: 100%;
}
.v7-shell.messenger-mode .batu-message {
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  color: var(--fg-neutral);
}
.v7-shell.messenger-mode .batu-message a {
  color: var(--fg-brand);
}
.v7-shell.messenger-mode .batu-message .answer-links a, .v7-shell.messenger-mode .batu-message .answer-links button {
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  background: var(--bg-surface);
  color: var(--fg-brand);
}
.v7-shell.messenger-mode .batu-message .answer-links a {
  border: 0;
  box-shadow: inset 0 0 0 1px var(--stroke-subtle);
}
.v7-shell.messenger-mode .answer-pending {
  color: var(--fg-secondary);
}
.v7-shell.messenger-mode .typing-dots span {
  background: var(--bg-brand-solid);
}
.v7-shell .panel-action .primary {
  justify-content: center;
  min-height: var(--button-large-height);
  padding: var(--space-11) var(--button-large-padding-x);
  border-radius: var(--button-large-radius);
  font-size: var(--button-large-text-size);
  line-height: var(--button-large-text-line);
}
.v7-shell details > summary {
  color: var(--fg-brand);
}
.v7-shell .brand, .v7-shell .park-picker, .v7-shell .quick-actions button, .v7-shell .panel-heading .icon-button, .v7-shell .map-controls button {
  position: relative;
}
.v7-shell .brand::after, .v7-shell .answer-more::after, .v7-shell .park-picker::after, .v7-shell .quick-actions button::after, .v7-shell .panel-heading .icon-button::after, .v7-shell .map-controls button::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  min-width: var(--size-44);
  min-height: var(--size-44);
  transform: translate(-50%, -50%);
  background: transparent;
}
.v7-shell .app-header > .brand::after {
  left: auto;
  right: 0;
  transform: translateY(-50%);
}
.v7-shell .language-button {
  width: var(--size-44);
  justify-content: center;
  padding: 0;
}
.v7-shell .home-ask input, .v7-shell input[type="text"], .v7-shell input[type="search"], .v7-shell input:not([type]), .v7-shell textarea {
  font-size: var(--font-size-16);
}
.v7-shell .conversation-controls > .mode-switch {
  flex: none;
  width: var(--icon-button-size);
  min-width: var(--icon-button-size);
  height: var(--icon-button-size);
  min-height: var(--icon-button-size);
  padding: 0;
  display: grid;
  place-items: center;
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--icon-button-radius);
  background: var(--bg-brand-weak);
  color: var(--fg-brand);
}
.v7-shell .conversation-controls > .mode-switch .v7-icon {
  width: var(--size-24);
  height: var(--size-24);
}
.v7-shell .conversation-controls.voice-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-12);
}
.v7-shell .voice-controls .v7-icon {
  width: var(--size-20);
  height: var(--size-20);
}
.v7-shell .voice-controls > .sound-toggle {
  flex: none;
  width: var(--icon-button-size);
  height: var(--icon-button-size);
  min-height: var(--icon-button-size);
  padding: 0;
  display: grid;
  place-items: center;
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--icon-button-radius);
  background: var(--bg-surface);
  color: var(--fg-brand);
  box-shadow: none;
}
.v7-shell .voice-controls > .sound-toggle[aria-pressed="false"] {
  color: var(--fg-placeholder);
}
.v7-shell .voice-controls .mic-button {
  width: var(--voice-mic-size);
  height: var(--voice-mic-size);
  min-height: var(--voice-mic-size);
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  background: var(--bg-surface);
  color: var(--fg-brand);
}
.v7-shell .voice-controls .mic-button.on, .v7-shell .voice-controls .mic-button.speaking {
  background: var(--bg-brand-solid) padding-box;
  color: var(--fg-on-brand-solid);
}
.v7-shell .voice-controls .mic-button.on {
  border: calc(var(--mic-level, 0) * var(--voice-mic-ring-max)) solid var(--voice-mic-ring-color);
  transition: border-width 0.08s linear,
    transform 100ms ease-out,
    background-color 100ms ease-out;
}
.v7-shell .voice-controls .mic-button.speaking {
  border: 0;
}
.v7-shell .voice-controls .mic-button .stop-glyph, .v7-shell .answer-stop .stop-glyph {
  width: var(--size-16);
  height: var(--size-16);
  border-radius: var(--radius-2);
  background: var(--bg-surface);
}
@media (prefers-reduced-motion: reduce) {
.v7-shell .voice-controls .mic-button.on {
  transition: none;
}
}
.v7-shell .voice-controls > .mode-switch {
  border: 0;
  background: var(--bg-brand-weak);
}
.v7-shell .app-footer > .ai-notice, .v7-shell .app-footer > .footer-note {
  box-sizing: border-box;
  width: 100%;
  min-height: var(--size-20);
  padding: var(--space-2) 0;
  margin-top: var(--space-4);
  margin-bottom: 0;
  line-height: var(--font-line-16);
  text-align: center;
}
.v7-shell .app-footer:has(> .conversation-controls:not(.voice-controls)) > :is(.ai-notice, .footer-note) {
  margin-top: var(--space-12);
}
.ai-notice-link {
  white-space: nowrap;
  color: inherit;
  text-decoration: underline dotted;
  text-underline-offset: var(--space-2);
}
.v7-shell .app-footer:has(> .voice-controls), .v7-shell .app-footer:has(> .conversation-controls) {
  padding-bottom: max(var(--space-4), env(safe-area-inset-bottom));
}
.feedback-sheet {
  display: grid;
  gap: var(--space-14);
}
.feedback-categories {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
  margin: 0;
  padding: 0;
  border: 0;
}
.feedback-categories legend {
  margin-bottom: var(--space-8);
  font-weight: var(--font-weight-bold);
}
.feedback-categories label {
  display: inline-flex;
  align-items: center;
  min-height: var(--radio-chip-height);
  padding: 0 var(--radio-chip-padding-x);
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--radio-chip-radius);
  cursor: pointer;
}
.feedback-categories label.selected {
  border-color: var(--stroke-brand);
  background: var(--bg-selected);
  font-weight: var(--font-weight-bold);
}
.feedback-categories input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.feedback-categories label:focus-within {
  outline: var(--stroke-width-2) solid var(--stroke-brand);
  outline-offset: var(--space-2);
}
.feedback-text {
  display: grid;
  gap: var(--space-6);
  font-weight: var(--font-weight-bold);
}
.feedback-text textarea {
  width: 100%;
  min-height: var(--size-120);
  padding: var(--space-10) var(--space-12);
  border: var(--stroke-width-1) solid var(--stroke-subtle);
  border-radius: var(--radius-12);
  font: inherit;
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-regular);
  resize: vertical;
}
.feedback-text small {
  justify-self: end;
  font-weight: var(--font-weight-regular);
  color: var(--fg-muted);
  font-variant-numeric: tabular-nums;
}
.feedback-notice {
  margin: 0;
  font-size: var(--font-size-13);
  color: var(--fg-muted);
}
.feedback-error {
  margin: 0;
  color: var(--fg-error);
}
.feedback-receipt {
  font-size: var(--font-size-20);
  letter-spacing: var(--font-tracking-default);
}
.mic-check {
  display: grid;
  gap: var(--space-8);
}
.mic-check p {
  margin: 0;
  line-height: 1.5;
}
.mic-check-actions {
  display: grid;
  gap: var(--space-8);
  margin-top: var(--space-8);
}
.v7-shell .app-header {
  grid-template-columns: minmax(max-content, 1fr) minmax(0, auto) minmax(max-content, 1fr);
}
html:lang(en) .v7-shell .app-header {
  column-gap: var(--space-4);
  padding-inline: var(--space-10);
}
html:lang(en) .v7-shell .header-title {
  gap: var(--space-4);
}
html:lang(en) .v7-shell .park-picker {
  padding-inline: var(--space-6);
}
.v7-shell .app-header > .brand {
  justify-self: start;
}
.v7-shell .header-actions {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 0;
}
.v7-shell .status-slot {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--size-28);
  padding: 0 var(--space-16);
}
.v7-shell .status-slot .voice-input-status {
  max-width: 100%;
  min-height: 0;
  padding: 0;
  gap: var(--space-6);
  font-size: var(--text-caption-size);
  font-weight: var(--font-weight-medium);
  line-height: var(--text-caption-line);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.v7-shell .status-slot.needs-action {
  flex-wrap: wrap;
  height: auto;
  min-height: var(--size-28);
  padding-top: var(--space-4);
  padding-bottom: var(--space-4);
  gap: var(--space-4) var(--space-8);
}
.v7-shell .status-slot.needs-action .voice-input-status {
  white-space: normal;
}
.v7-shell .status-slot .voice-level {
  height: var(--size-16);
}
.v7-shell .status-slot .voice-level i {
  max-height: var(--size-16);
}
.v7-shell .status-slot .interrupt-hint {
  animation: interrupt-hint-in 0.25s ease-out;
}
.v7-shell .stage.interruptible {
  cursor: pointer;
}
@media (prefers-reduced-motion: reduce) {
.v7-shell .status-slot .interrupt-hint {
  animation: none;
}
}
.v7-shell .location-chip-row {
  flex: none;
  display: flex;
  justify-content: center;
  padding: 0 var(--space-16) var(--space-4);
}
.v7-shell .location-chip-row.location-status {
  position: relative;
  z-index: 5;
  align-items: flex-start;
  height: 0;
  padding-bottom: 0;
  overflow: visible;
}
.v7-shell .location-chip {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-6);
  max-width: 100%;
  min-height: var(--size-28);
  padding: var(--space-6) var(--space-12);
  border: 0;
  border-radius: var(--radius-full);
  font-size: var(--button-xsmall-text-size);
  line-height: var(--button-xsmall-text-line);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--font-tracking-default);
  white-space: nowrap;
}
.v7-shell .location-chip > span:not([aria-hidden]) {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
button.location-chip::before {
  content: "";
  position: absolute;
  inset: calc(-1 * var(--space-10)) 0;
}
.v7-shell .location-chip > i {
  flex: none;
  width: var(--size-8);
  height: var(--size-8);
  border-radius: var(--radius-full);
  background: currentColor;
}
.v7-shell .location-chip u {
  font-weight: var(--font-weight-bold);
  text-underline-offset: var(--space-2);
}
.v7-shell .location-chip.off {
  background: var(--bg-danger-weak);
  color: var(--fg-danger);
  box-shadow: inset 0 0 0 1px var(--stroke-danger-weak);
}
.bandali-app.comeback-open .suggest-list, .bandali-app.comeback-open .greeting {
  display: none;
}
.bandali-app.comeback-open .stage {
  padding-bottom: calc(var(--comeback-h, 0) + var(--space-16));
}
.bandali-app.chat-mode.comeback-open .avatar {
  bottom: calc(var(--comeback-h, 0) + var(--space-16));
}
:where( .primary, .entry-conversations button, .instruction-action, .navigation-handoff, .facility-start, .v7-shell .send-button, .v7-shell .mic-button, .end-button, .navigation-links button, .suggest-list button, .park-options > button, .language-options button, .settings-list button, .map-controls button, .sound-toggle, .mode-switch, .v7-shell .quick-actions button, .answer-more, .text-button, .icon-button, .layer-heading button, .language-button, .v7-shell .park-picker, .v7-shell .rating-button, .help-button ) {
  transition: transform 100ms ease-out,
    background-color 100ms ease-out;
}
:where( .primary, .entry-conversations button, .instruction-action, .navigation-handoff, .facility-start, .v7-shell .send-button, .v7-shell .mic-button, .end-button, .navigation-links button, .suggest-list button, .park-options > button, .language-options button, .settings-list button, .map-controls button, .sound-toggle, .mode-switch, .v7-shell .quick-actions button, .answer-more, .text-button, .icon-button, .layer-heading button, .language-button, .v7-shell .park-picker, .v7-shell .rating-button, .help-button ):active:not(:disabled) {
  transform: scale(0.97);
}
.primary:active:not(:disabled), .entry-conversations button:active:not(:disabled), .v7-shell .send-button:active:not(:disabled), .v7-shell .v4-navigation .navigation-instruction .instruction-action:active:not(:disabled), .v7-shell .v4-navigation .navigation-instruction .navigation-handoff:active, .facility-start:active:not(:disabled) {
  border-color: var(--main-800);
  background-color: var(--main-800);
  filter: none;
}
.v7-shell .v4-navigation .navigation-links button:active:not(:disabled), .v7-shell .suggest-list button:active:not(:disabled), .map-controls button:active:not(:disabled), .v7-shell .voice-controls > .sound-toggle:active:not(:disabled), .v7-shell .voice-controls .mic-button:active:not(:disabled) {
  background-color: var(--bg-neutral-weak);
  filter: none;
}
.v7-shell .voice-controls .mic-button.on:active:not(:disabled), .v7-shell .voice-controls .mic-button.speaking:active:not(:disabled) {
  background-color: var(--main-800);
}
.text-button:active:not(:disabled), .v7-shell .v4-navigation .layer-heading button:active:not(:disabled) {
  border-radius: var(--radius-8);
  background-color: var(--bg-subtle);
  filter: none;
}
.icon-button:active:not(:disabled), .v7-shell .icon-button:active:not(:disabled), .v7-shell .quick-actions button:active:not(:disabled), .language-button:active:not(:disabled), .v7-shell .park-picker:active:not(:disabled), .v7-shell .rating-button:active:not(:disabled) {
  background-color: var(--bg-subtle);
  filter: none;
}
.v7-shell .mode-switch:active:not(:disabled), .v7-shell .v4-navigation .navigation-links button[aria-pressed="true"]:active:not(:disabled), .v7-shell .quick-actions button[aria-pressed="true"]:active:not(:disabled) {
  background-color: var(--bg-brand-weak-pressed);
  filter: none;
}
.answer-more:active:not(:disabled) {
  background-color: var(--gray-200);
  filter: none;
}
@media (prefers-reduced-motion: reduce) {
:where( .primary, .entry-conversations button, .instruction-action, .navigation-handoff, .facility-start, .v7-shell .send-button, .v7-shell .mic-button, .end-button, .navigation-links button, .suggest-list button, .park-options > button, .language-options button, .settings-list button, .map-controls button, .sound-toggle, .mode-switch, .v7-shell .quick-actions button, .answer-more, .text-button, .icon-button, .layer-heading button, .language-button, .v7-shell .park-picker, .v7-shell .rating-button, .help-button ):active:not(:disabled) {
  transform: none;
}
}
button {
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}
.v7-shell .app-header :is(.brand, .language-button)::before {
  background-color: transparent;
  transition: background-color 100ms ease-out;
}
.v7-shell .app-header :is(.brand, .language-button):active:not(:disabled)::before {
  background-color: var(--bg-selected);
}
.v7-shell .app-header .language-button:active:not(:disabled) {
  background-color: transparent;
}
.v7-shell .app-header .brand {
  transition: transform 100ms ease-out;
}
.v7-shell .app-header .brand:active:not(:disabled) {
  transform: scale(0.97);
  filter: none;
}
dialog .modal-body > .sheet-large {
  min-height: var(--button-large-height);
  padding: var(--button-large-padding-y) var(--button-large-padding-x);
  border-radius: var(--button-large-radius);
  font-size: var(--button-large-text-size);
  line-height: var(--button-large-text-line);
  font-weight: var(--font-weight-medium);
}
dialog .modal-body > .daylight-why {
  margin: 0;
  color: var(--fg-neutral);
  font-size: var(--text-body-compact-size);
  line-height: var(--text-body-compact-line);
}
dialog .modal-body > .daylight-check {
  margin: var(--space-4) 0 var(--space-16);
  color: var(--fg-muted);
  font-size: var(--text-meta-size);
  line-height: var(--text-meta-line);
}
.v7-icon[data-icon="PanelChevron"] {
  --v7-art: url("/assets/v7/icons/PanelChevron.svg");
}
.v7-icon[data-icon="Walk"] {
  --v7-art: url("/assets/v7/icons/Walk.svg");
}
.v7-icon[data-icon="Pin"] {
  --v7-art: url("/assets/v7/icons/Pin-native.png");
}
.v7-icon[data-icon="Sun"] {
  --v7-art: url("/assets/v7/icons/Sun.svg");
}
.v7-icon[data-icon="MicOff"] {
  --v7-art: url("/assets/v7/icons/MicOff.svg");
}
.v7-icon[data-icon="Arrow"] {
  --v7-art: url("/assets/v7/icons/Arrow.svg");
}
.v7-icon[data-icon="Mountain"] {
  --v7-art: url("/assets/v7/icons/Mountain.svg");
}
.v7-icon[data-icon="Mountain16"] {
  --v7-art: url("/assets/v7/icons/Mountain16.svg");
}
.v7-icon[data-icon="Toilet"] {
  --v7-art: url("/assets/v7/icons/Toilet.svg");
}
.v7-icon[data-icon="Parking"] {
  --v7-art: url("/assets/v7/icons/Parking.svg");
}
.v7-icon[data-icon="Shelter"] {
  --v7-art: url("/assets/v7/icons/Shelter.svg");
}
.v7-icon[data-icon="RestAreaLeaf"] {
  --v7-art: url("/assets/v7/icons/RestAreaLeaf.svg");
}
.v7-icon[data-icon="Locate"] {
  --v7-art: url("/assets/v7/icons/Locate.svg");
}
.v7-icon[data-icon="FAQ"] {
  --v7-art: url("/assets/v7/icons/FAQ.svg");
}
.v7-icon[data-icon="SourceLink"] {
  --v7-art: url("/assets/v7/icons/SourceLink.svg");
}
.v7-icon[data-icon="Warning"] {
  --v7-art: url("/assets/v7/icons/Warning.svg");
}
.v7-icon[data-icon="ScenarioWarning"] {
  --v7-art: url("/assets/v7/icons/ScenarioWarning.svg");
}
.v7-icon[data-icon="WeatherSunny"] {
  --v7-art: url("/assets/v7/weather/sunny.svg");
}
.v7-icon[data-icon="WeatherCloudy"] {
  --v7-art: url("/assets/v7/weather/cloudy.svg");
}
.v7-icon[data-icon="WeatherOvercast"] {
  --v7-art: url("/assets/v7/weather/overcast.svg");
}
.v7-icon[data-icon="WeatherLightRain"] {
  --v7-art: url("/assets/v7/weather/light-rain.svg");
}
.v7-icon[data-icon="WeatherHeavyRain"] {
  --v7-art: url("/assets/v7/weather/heavy-rain.svg");
}
.v7-icon[data-icon="WeatherUnknown"] {
  --v7-art: url("/assets/v7/weather/unknown.svg");
}
/* 가은 11/03: never a second outline. A part with its own line shows focus by that line, stroke/brand 1px; a ring only
   where there is no line (icon buttons, links). */
:is(.entry-conversations button, .conversation-controls:not(.voice-controls) .mode-switch, .sound-toggle, .mic-button:not(.on), .send-button, .language-options button, .feedback-categories label, .feedback-text textarea, .rating-form textarea, .rating-reason, .rating-button, .primary, .secondary):is(:focus-visible, :focus-within) {
  outline: none;
  border-color: var(--stroke-brand);
}
.suggest-list button:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 var(--stroke-width-1) var(--stroke-brand);
}
.v7-shell .rating-actions button:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 var(--stroke-width-1) var(--stroke-brand);
}
`,t=`/* Three steps, as the design system's token rule: 1 base values, 2 roles, 3 components. The screens use 2 and 3;
   a base value appears on a screen only where no role is named yet. Values are 반달이's as they were. */
:root {
  /* 1. Base values */
  --font-line-14: 14px;
  --font-line-15: 15px;
  --font-line-16: 16px;
  --font-line-18: 18px;
  --font-line-20: 20px;
  --font-line-22: 22px;
  --font-line-26: 26px;
  --font-line-40: 40px;
  --font-size-10: 10px;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-size-13: 13px;
  --font-size-14: 14px;
  --font-size-16: 16px;
  --font-size-18: 18px;
  --font-size-20: 20px;
  --font-size-21: 21px;
  --font-size-22: 22px;
  --font-size-26: 26px;
  --font-size-28: 28px;
  --font-size-8: 8px;
  --font-size-9: 9px;
  --font-tracking-default: -0.02em;
  --font-weight-bold: 700;
  --font-weight-medium: 500;
  --font-weight-regular: 400;
  --gray-50: #f7f8f9;
  --gray-100: #eef0f2;
  --gray-200: #dfe1e6;
  --gray-300: #c8cbd1;
  --gray-400: #a8abb3;
  --gray-500: #80838c;
  --gray-600: #5c5f6b;
  --gray-700: #414452;
  --gray-800: #2a2d3b;
  --gray-900: #1a1c29;
  --gray-950: #11151c;
  --main-50: #f5fcf9;
  --main-100: #e1faf8;
  --main-200: #c5e5f0;
  --main-300: #9dbfe0;
  --main-400: #5c86cc;
  --main-500: #1139ad;
  --main-600: #061a94;
  --main-700: #161770;
  --main-800: #211d52;
  --main-900: #221f3d;
  --sub-50: #fef9fa;
  --sub-100: #f9ecef;
  --sub-200: #f1d7dc;
  --sub-300: #e3b6c0;
  --sub-400: #cf909e;
  --sub-500: #b9687a;
  --sub-600: #985564;
  --sub-700: #76434e;
  --sub-800: #553038;
  --sub-900: #371f25;
  --radius-10: 10px;
  --radius-12: 12px;
  --radius-16: 16px;
  --radius-2: 2px;
  --radius-20: 20px;
  --radius-24: 24px;
  --radius-4: 4px;
  --radius-8: 8px;
  --radius-full: 9999px;
  --size-1: 1px;
  --size-100: 100px;
  --size-120: 120px;
  --size-16: 16px;
  --size-17: 17px;
  --size-18: 18px;
  --size-19: 19px;
  --size-20: 20px;
  --size-200: 200px;
  --size-22: 22px;
  --size-24: 24px;
  --size-240: 240px;
  --size-256: 256px;
  --size-28: 28px;
  --size-294_75: 294.75px;
  --size-3: 3px;
  --size-30: 30px;
  --size-32: 32px;
  --size-34: 34px;
  --size-340: 340px;
  --size-349_195: 349.195px;
  --size-36: 36px;
  --size-38: 38px;
  --size-390: 390px;
  --size-40: 40px;
  --size-42: 42px;
  --size-430: 430px;
  --size-44: 44px;
  --size-48: 48px;
  --size-60: 60px;
  --size-64: 64px;
  --size-72: 72px;
  --size-8: 8px;
  --size-844: 844px;
  --size-88: 88px;
  --size-96: 96px;
  --space-1: 1px;
  --space-10: 10px;
  --space-11: 11px;
  --space-12: 12px;
  --space-13: 13px;
  --space-14: 14px;
  --space-15: 15px;
  --space-16: 16px;
  --space-18: 18px;
  --space-2: 2px;
  --space-20: 20px;
  --space-24: 24px;
  --space-28: 28px;
  --space-3: 3px;
  --space-32: 32px;
  --space-4: 4px;
  --space-40: 40px;
  --space-6: 6px;
  --space-68: 68px;
  --space-7: 7px;
  --space-8: 8px;
  --space-9: 9px;
  --stroke-width-1: 1px;
  --stroke-width-2: 2px;
  --stroke-width-3: 3px;
  --white: #ffffff;
  /* 2. Roles */
  --bg-brand-solid: var(--main-700);
  --bg-brand-weak: var(--main-100);
  --bg-brand-weak-pressed: var(--main-200);
  --bg-critical-solid: #a73141;
  --bg-danger-weak: #fff8fa;
  --bg-disabled: var(--gray-100);
  --bg-entry: #f6faec;
  --bg-neutral-solid: var(--gray-950);
  --bg-neutral-weak: var(--gray-50);
  --bg-page-bottom: var(--gray-50);
  --bg-page-middle: #e1faef;
  --bg-page-top: var(--main-100);
  /* The design system's page background: top main/100, middle from it (H −22), bottom gray/50, at 12·32·64%. */
  --bg-page-gradient: linear-gradient(to bottom, var(--bg-page-top) 12%, var(--bg-page-middle) 32%, var(--bg-page-bottom) 64%);
  --bg-selected: var(--main-50);
  --bg-subtle: var(--gray-100);
  --bg-surface: var(--white);
  --fg-brand: var(--main-700);
  --fg-bubble-link: var(--main-200);
  --fg-danger: #b23f35;
  --fg-disabled: var(--gray-500);
  --fg-error: #a3321f;
  --fg-muted: #626f6c;
  --fg-neutral: var(--gray-950);
  --fg-on-brand-solid: var(--white);
  --fg-placeholder: var(--gray-400);
  --fg-secondary: var(--gray-700);
  --layout-sheet-padding: var(--space-24);
  --layout-sheet-title-gap: var(--space-20);
  --shadow-bubble: rgba(27, 42, 33, 0.12);
  --shadow-medium: #1b2a2114;
  --shadow-soft: #1b2a210a;
  --source-link-bg: #f5faf7;
  --source-link-fg: #246249;
  --source-link-stroke: #c7dcd1;
  --stroke-brand: var(--main-700);
  --stroke-danger-weak: #eadce4;
  --stroke-input: #c9d3cf;
  --stroke-subtle: var(--gray-100);
  --text-body-compact-line: var(--font-line-20);
  --text-body-compact-size: var(--font-size-14);
  --text-body-default-line: var(--font-line-22);
  --text-body-default-size: var(--font-size-16);
  --text-caption-line: var(--font-line-16);
  --text-caption-size: var(--font-size-12);
  --text-label-default-line: var(--font-line-20);
  --text-label-default-size: var(--font-size-14);
  --text-meta-line: var(--font-line-18);
  --text-meta-size: var(--font-size-13);
  --text-title-section-line: var(--font-line-26);
  --text-title-section-size: var(--font-size-18);
  --text-title-sheet-line: var(--font-line-22);
  --text-title-sheet-size: var(--font-size-16);
  /* 3. Components */
  --bubble-avatar-bg: var(--bg-brand-solid);
  --bubble-avatar-fg: var(--fg-on-brand-solid);
  --bubble-padding-x: var(--space-16);
  --bubble-padding-y: var(--space-8);
  --bubble-radius: var(--radius-20);
  --bubble-text-line: var(--font-line-22);
  --bubble-text-size: var(--font-size-14);
  --bubble-user-bg: var(--bg-surface);
  --bubble-user-fg: var(--fg-neutral);
  --button-large-gap: var(--space-6);
  --button-large-height: var(--size-48);
  --button-large-padding-x: var(--space-16);
  --button-large-padding-y: var(--space-12);
  --button-large-radius: var(--radius-10);
  --button-large-text-line: var(--font-line-20);
  --button-large-text-size: var(--font-size-16);
  --button-small-text-line: var(--font-line-16);
  --button-small-text-size: var(--font-size-13);
  --button-xsmall-text-line: var(--font-line-14);
  --button-xsmall-text-size: var(--font-size-12);
  --chip-suggestion-padding-x: var(--space-14);
  --chip-suggestion-padding-y: var(--space-8);
  --chip-suggestion-radius: var(--radius-full);
  --dialog-button-gap: var(--space-10);
  --dialog-max-width: var(--size-430);
  --dialog-radius: var(--radius-20);
  --navigation-bar-height-default: 56px;
  --sheet-close-size: var(--size-38);
  --sheet-max-width: var(--size-430);
  --sheet-radius: var(--radius-20);
  --toggle-height: var(--size-24);
  --toggle-inset: var(--space-2);
  --toggle-knob: var(--size-20);
  --toggle-off-bg: var(--gray-300);
  --toggle-width: var(--size-40);
  --badge-padding-x: var(--space-6);
  --badge-radius: var(--radius-full);
  --button-small-gap: var(--space-4);
  --button-small-height: var(--size-32);
  --button-small-padding-x: var(--space-12);
  --button-small-padding-y: var(--space-8);
  --button-small-radius: var(--radius-8);
  --button-xsmall-gap: var(--space-2);
  --button-xsmall-height: var(--size-28);
  --button-xsmall-padding-x: var(--space-12);
  --button-xsmall-padding-y: var(--space-6);
  --button-xsmall-radius: var(--radius-full);
  --callout-gap: var(--space-4);
  --callout-padding-x: var(--space-12);
  --callout-padding-y: var(--space-8);
  --callout-radius: var(--radius-12);
  --entry-button-height: var(--size-88);
  --entry-button-radius: var(--radius-20);
  --icon-button-radius: var(--radius-full);
  --icon-button-size: var(--size-48);
  --input-gap: var(--space-6);
  --input-height: var(--size-48);
  --input-padding-x: var(--space-14);
  --input-radius: var(--radius-full);
  --list-row-height: var(--size-60);
  --option-row-content-gap: var(--space-12);
  --option-row-gap: var(--space-10);
  --option-row-height: var(--size-72);
  --option-row-padding-x: var(--space-16);
  --option-row-padding-y: var(--space-12);
  --option-row-radius: var(--radius-16);
  --radio-chip-height: var(--size-40);
  --radio-chip-padding-x: var(--space-14);
  --radio-chip-radius: var(--radius-20);
  --voice-mic-size: var(--size-64);
  /* While recording, the outline grows with the voice: 0 in silence to the max at the loudest (가은 11/03: main-200 25%). */
  --voice-mic-ring-max: var(--size-8);
  --voice-mic-ring-color: color-mix(in srgb, var(--main-200) 25%, transparent);
}
`,n={};for(let[,e,r]of t.matchAll(/(--[\w-]+):\s*([^;]+);/g))n[e]=r.trim();var r={};for(let[,n]of(e+t).matchAll(/var\((--[\w-]+)\)/g))r[n]=(r[n]??0)+1;var i=[];function a(e,t){let n=0;for(;;){let r=e.indexOf(`{`,n);if(r<0)return;let o=e.slice(n,r).replace(/\/\*[\s\S]*?\*\//g,``).trim(),s=1,c=r+1;for(;s;)e[c]===`{`&&(s+=1),e[c]===`}`&&--s,c+=1;let l=e.slice(r+1,c-1);o.startsWith(`@media`)?a(l,o.slice(6).trim()):o.startsWith(`@supports`)?a(l,t):o.startsWith(`@`)||i.push({selectors:o.split(/,(?![^(]*\))/).map(e=>e.trim()),media:t,decls:[...l.matchAll(/([\w-]+):\s*([^;]+);/g)].map(e=>[e[1],e[2].trim()]),order:i.length}),n=c}}a(e.slice(e.indexOf(`*/`)+2),null);var o=/::|:(hover|active|focus)/;function s(e){let t=(e.match(/#[\w-]+/g)??[]).length,n=(e.match(/\.[\w-]+|\[[^\]]+\]|:(?!:)[\w-]+/g)??[]).length,r=(e.replace(/[.#:\[][^\s>+~]*/g,` `).match(/\b[a-z][\w-]*/g)??[]).length;return t*1e4+n*100+r}var c=`width.height.min-width.min-height.max-width.padding.padding-top.padding-right.padding-bottom.padding-left.margin.margin-top.margin-right.margin-bottom.margin-left.gap.top.right.bottom.left.font-size.line-height.font-weight.letter-spacing.color.background.background-color.border.border-color.border-radius`.split(`.`),l=[`color`,`font-size`,`line-height`,`font-weight`,`letter-spacing`];function u(e){let t=new Map;for(let n of i){if(n.media&&!matchMedia(n.media).matches)continue;let r=-1;for(let t of n.selectors)if(!o.test(t))try{e.matches(t)&&(r=Math.max(r,s(t)))}catch{}if(r<0)continue;let i=r*1e4+n.order;for(let[e,r]of n.decls){let n=t.get(e);(!n||i>=n.rank)&&t.set(e,{value:r,rank:i})}}return t}function d(e){if(e instanceof HTMLElement)return{width:e.offsetWidth,height:e.offsetHeight};let t=e.getBoundingClientRect();return{width:Math.round(t.width),height:Math.round(t.height)}}function f(e){let t=[],r=e;for(;r&&t.length<6;){let e=(document.documentElement.style.getPropertyValue(r)||n[r]||``).trim();if(!e)break;t.push({name:r,value:e}),r=e.match(/^var\((--[\w-]+)\)$/)?.[1]}return t}function p(e){let t=u(e);for(let n of l)for(let r=e.parentElement;r&&!t.has(n);r=r.parentElement){let e=u(r).get(n);e&&t.set(n,e)}let r=getComputedStyle(e),i=c.flatMap(e=>{let i=t.get(e);if(!i)return[];let a=[...new Set([...i.value.matchAll(/var\((--[\w-]+)\)/g)].map(e=>e[1]))].filter(e=>n[e]!==void 0);return a.length?[{prop:e,computed:r.getPropertyValue(e===`background`?`background-color`:e),tokens:a.map(e=>({name:e,steps:f(e)}))}]:[]}),a=d(e);return{label:L(e),width:a.width,height:a.height,hasParent:e.parentElement!==document.body,rows:i}}var m=e=>parent.postMessage(e,location.origin),h=!1,g=null,_=e=>{let t=document.createElement(`div`);t.style.cssText=`position:fixed;display:none;z-index:2147483646;pointer-events:none;box-sizing:border-box;border:2px solid ${e}`;let n=document.createElement(`span`);return n.style.cssText=`position:absolute;left:-2px;top:-18px;padding:0 4px;background:${e};color:#fff;font:500 11px/16px system-ui;white-space:nowrap`,t.append(n),t},v=_(`#2f6bff`),y=_(`#ff2d9b`);function b(e,t){if(!h||!t){e.style.display=`none`;return}(document.querySelector(`dialog[open]`)??document.body).append(e);let n=t.getBoundingClientRect();Object.assign(e.style,{display:`block`,left:`${n.left}px`,top:`${n.top}px`,width:`${n.width}px`,height:`${n.height}px`});let r=e.firstElementChild,i=d(t);r.textContent=`${i.width} × ${i.height}`,r.style.top=n.top<20?`${n.height}px`:`-18px`}var x=document.createElement(`div`);x.dataset.overlay=``,x.style.cssText=`position:fixed;inset:0;z-index:2147483644;cursor:crosshair;background:transparent`;var S=(e,t)=>document.elementsFromPoint(e,t).find(e=>e!==x&&!e.closest(`[data-overlay], .sr-only`))??null;x.addEventListener(`pointermove`,e=>b(v,S(e.clientX,e.clientY))),x.addEventListener(`pointerleave`,()=>b(v,null)),x.addEventListener(`click`,e=>H(S(e.clientX,e.clientY))),x.addEventListener(`wheel`,e=>{for(let t=S(e.clientX,e.clientY);t;t=t.parentElement)if(t.scrollHeight>t.clientHeight+1&&/auto|scroll/.test(getComputedStyle(t).overflowY)){t.scrollTop+=e.deltaY;return}},{passive:!0});function C(){if(!h){x.remove();return}let e=document.querySelector(`dialog[open]`)??document.body;x.parentElement!==e&&e.append(x)}setInterval(C,300);var w={},T=[],E=document.createElement(`div`);E.dataset.overlay=``,E.style.cssText=`position:fixed;inset:0;z-index:2147483645;pointer-events:none`;function D(e){let t=new Set([e]);for(let e=!0;e;){e=!1;for(let[r,i]of Object.entries(n))!t.has(r)&&[...t].some(e=>i.includes(`var(${e})`))&&(t.add(r),e=!0)}return t}function O(e){if(E.replaceChildren(),E.remove(),!e)return;let t=[...D(e)],n=new Set;for(let e of i)if((!e.media||matchMedia(e.media).matches)&&e.decls.some(([,e])=>t.some(t=>e.includes(`var(${t})`)))){for(let t of e.selectors)if(!o.test(t))try{document.querySelectorAll(t).forEach(e=>n.add(e))}catch{}}let r=0;for(let e of n){let t=e.getBoundingClientRect();if(!t.width||!t.height||t.bottom<0||t.top>innerHeight)continue;r+=1;let n=document.createElement(`div`);n.style.cssText=`position:fixed;left:${t.left}px;top:${t.top}px;width:${t.width}px;height:${t.height}px;box-sizing:border-box;border:1.5px solid #12a150;background:#12a15022`,E.append(n)}(document.querySelector(`dialog[open]`)??document.body).append(E),m({kind:`token-where`,name:e,count:r})}function k(e){let t=`var(${e})`,r=Object.keys(n).filter(e=>n[e].includes(t)),a=new Set,o=[];for(let e of i)for(let[n,r]of e.decls)if(r.includes(t))for(let t of e.selectors){let e=`${t}|${n}`;a.has(e)||(a.add(e),o.push({selector:t,prop:n}))}return{tokens:r,places:o}}var A=e=>e.replace(/:not\(:disabled\)|::[-\w]+|:(hover|active|focus-visible|focus-within|focus|disabled)\b/g,``).trim();async function j(e){for(let t=0;t<30;t+=1){let t=[...document.querySelectorAll(A(e))].find(e=>e.getBoundingClientRect().width>0);if(t){t.scrollIntoView({block:`center`}),H(t);return}await new Promise(e=>setTimeout(e,150))}m({kind:`select-missed`})}var M=document.createElement(`div`);M.dataset.overlay=``,M.style.cssText=`position:fixed;inset:0;z-index:2147483646;pointer-events:none`;var N={size:`#2f6bff40`,padding:`#12a15055`,margin:`#ff8a0055`,gap:`#8a4dff55`,text:`#ffc40066`,fill:`#2f6bff33`,line:`#ff2d9b`};function P(e,t,n,r,i,a=``){if(n<=0||r<=0)return;let o=document.createElement(`div`);o.style.cssText=`position:fixed;left:${e}px;top:${t}px;width:${n}px;height:${r}px;background:${i};${a}`,M.append(o)}function F(e){if(M.replaceChildren(),M.remove(),!e||!g)return;let t=g,n=t.getBoundingClientRect(),r=getComputedStyle(t),i=e=>parseFloat(r.getPropertyValue(e))||0,a=(e,t)=>e===t?[`top`,`right`,`bottom`,`left`]:e.startsWith(`${t}-`)?[e.slice(t.length+1)]:[];for(let o of e){for(let e of a(o,`padding`)){let t=i(`padding-${e}`);e===`top`&&P(n.left,n.top,n.width,t,N.padding),e===`bottom`&&P(n.left,n.bottom-t,n.width,t,N.padding),e===`left`&&P(n.left,n.top,t,n.height,N.padding),e===`right`&&P(n.right-t,n.top,t,n.height,N.padding)}for(let e of a(o,`margin`)){let t=Math.max(0,i(`margin-${e}`));e===`top`&&P(n.left,n.top-t,n.width,t,N.margin),e===`bottom`&&P(n.left,n.bottom,n.width,t,N.margin),e===`left`&&P(n.left-t,n.top,t,n.height,N.margin),e===`right`&&P(n.right,n.top,t,n.height,N.margin)}if(o===`gap`){let e=[...t.children].map(e=>e.getBoundingClientRect()).filter(e=>e.width&&e.height);e.slice(1).forEach((t,r)=>{let i=e[r];t.left>=i.right?P(i.right,n.top,t.left-i.right,n.height,N.gap):t.top>=i.bottom&&P(n.left,i.bottom,n.width,t.top-i.bottom,N.gap)})}if(/^(min-|max-)?(width|height)$/.test(o)&&P(n.left,n.top,n.width,n.height,N.size),[`background`,`background-color`].includes(o)&&P(n.left,n.top,n.width,n.height,N.fill),[`top`,`right`,`bottom`,`left`].includes(o)){let e=t.offsetParent?.getBoundingClientRect()??{left:0,top:0,right:innerWidth,bottom:innerHeight};o===`top`&&P(n.left,e.top,n.width,n.top-e.top,N.margin),o===`bottom`&&P(n.left,n.bottom,n.width,e.bottom-n.bottom,N.margin),o===`left`&&P(e.left,n.top,n.left-e.left,n.height,N.margin),o===`right`&&P(n.right,n.top,e.right-n.right,n.height,N.margin)}if([`color`,`font-size`,`line-height`,`font-weight`,`letter-spacing`].includes(o)){let e=document.createRange();e.selectNodeContents(t);for(let t of e.getClientRects())P(t.left,t.top,t.width,t.height,N.text)}(o===`border-radius`||o.startsWith(`border`))&&P(n.left,n.top,n.width,n.height,`transparent`,`box-sizing:border-box;border:2px solid ${N.line};border-radius:${r.borderTopLeftRadius}`)}(document.querySelector(`dialog[open]`)??document.body).append(M)}var I=[[`entry-screen`,`대기화면`],[`entry-heading`,`제목 영역`],[`entry-wordmark`,`서비스 이름`],[`entry-service`,`안내 문구`],[`entry-language`,`언어 버튼 영역`],[`entry-conversations`,`시작 버튼`],[`entry-avatar`,`아바타 음성 대화`],[`entry-bottom`,`하단 영역`],[`entry-ai-notice`,`AI 고지`],[`entry-backdrop`,`배경 영상`],[`app-header`,`상단바`],[`brand`,`뒤로 버튼`],[`header-title`,`제목`],[`header-actions`,`상단바 버튼`],[`more-button`,`더보기 버튼`],[`language-button`,`언어 버튼`],[`stage`,`화면 영역`],[`avatar-image`,`아바타 이미지`],[`avatar`,`아바타`],[`greeting`,`말풍선`],[`chat-log`,`대화 목록`],[`batu-message`,`아바타 답변`],[`user-message`,`사용자 말풍선`],[`answer-author`,`답변 프로필`],[`suggest-list`,`추천 칩`],[`app-footer`,`하단 영역`],[`voice-controls`,`음성 버튼`],[`sound-toggle`,`스피커 버튼`],[`mic-button`,`마이크 버튼`],[`mode-switch`,`대화 전환 버튼`],[`conversation-controls`,`입력 영역`],[`home-ask`,`입력창`],[`send-button`,`보내기 버튼`],[`ai-notice`,`AI 고지`],[`footer-note`,`AI 고지`],[`panel-heading`,`시트 제목`],[`modal-body`,`시트 내용`],[`settings-options`,`설정 목록`],[`more-options`,`더보기 목록`],[`language-options`,`언어 목록`],[`toggle`,`토글`],[`alert-actions`,`버튼 쌍`],[`primary`,`주요 버튼`],[`secondary`,`보조 버튼`]],L=e=>{if(e.tagName===`DIALOG`)return e.classList.contains(`alert`)?`다이얼로그`:`바텀시트`;let t=I.find(([t])=>e.classList.contains(t));if(t)return t[1];let n=e.children.length?``:(e.textContent??``).trim().slice(0,18);if(n)return`“${n}”`;let r=e.tagName.toLowerCase();return{button:`버튼`,a:`링크`,img:`이미지`,i:`아이콘`,svg:`아이콘`,canvas:`아바타 3D`,input:`입력칸`,video:`영상`}[r]??(String(e.className).trim().split(/\s+/)[0]||r)},R=[],z=``;function B(){R=[];let e=[],t=(n,r,i,a)=>{if(n===v||n===y||[`SCRIPT`,`STYLE`,`SOURCE`,`TEMPLATE`].includes(n.tagName)||n.classList.contains(`sr-only`)||n.dataset?.overlay!==void 0)return;let o=getComputedStyle(n);if(o.display===`none`||o.visibility===`hidden`)return;let s=n.getBoundingClientRect(),c=n.tagName===`svg`?[]:[...n.children];if(n.tagName===`DIV`&&!n.className&&c.length===1||!s.width&&!s.height){c.forEach((e,n)=>t(e,r,`${i}.${n}`,a));return}let l=R.push(n)-1;e.push({id:l,name:L(n),depth:r,path:i,parent:a}),c.forEach((e,n)=>t(e,r+1,`${i}.${n}`,l))},n=document.getElementById(`root`);n&&[...n.children].forEach((e,n)=>t(e,0,String(n),null));let r=g?R.indexOf(g):-1,i=JSON.stringify({nodes:e,selected:r});i!==z&&(z=i,m({kind:`token-tree`,nodes:e,selected:r}))}var V=0;new MutationObserver(()=>{clearTimeout(V),V=window.setTimeout(B,300)}).observe(document.body,{subtree:!0,childList:!0,attributes:!0,attributeFilter:[`class`,`open`]}),setInterval(()=>h&&g&&b(y,g),200);function H(e){g=e,b(y,g),g&&m({kind:`token-pick`,...p(g)}),B()}function U(){try{return JSON.parse(localStorage.getItem(`gg-palette-live`)??`{}`)}catch{return{}}}var W={};function G(e){W=e;let t={...w,...U(),...e},n=document.documentElement.style;for(let e of T)n.removeProperty(e);T=Object.keys(t);for(let[e,r]of Object.entries(t))n.setProperty(e,r)}addEventListener(`storage`,e=>{e.key===`gg-palette-live`&&G(W)}),addEventListener(`message`,e=>{if(e.origin!==location.origin)return;let t=e.data;t?.kind===`token-mode`&&(h=t.on,h||(g=null),C(),b(v,null),b(y,g)),t?.kind===`token-parent`&&g?.parentElement&&H(g.parentElement),t?.kind===`token-show`&&O(t.name),t?.kind===`area-show`&&F(t.props),t?.kind===`token-usage`&&m({kind:`token-usage`,name:t.name,...k(t.name)}),t?.kind===`select-selector`&&j(t.selector),t?.kind===`layer-select`&&H(R[t.id]??null),t?.kind===`layer-hover`&&b(v,t.id===null?null:R[t.id]??null),t?.kind===`token-committed`&&(w={...w,...t.edits}),t?.kind===`token-apply`&&(G(t.edits),g&&(b(y,g),m({kind:`token-pick`,...p(g)})))});var K=await fetch(`../tokens.json`).then(e=>e.ok?e.json():{}).catch(()=>({}));w=Object.fromEntries(Object.entries(K).filter(([e,t])=>n[e]!==t)),G({}),m({kind:`token-ready`,defs:{...n,...K,...U()},uses:r}),setTimeout(B,300);