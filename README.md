# Norah's Sunshine World ☀️

Welcome to Norah's Sunshine World, a premium, interactive single-page website built to showcase Norah's bright personality, her love for her dog **Luna**, and her favorite hobbies!

## Features Built-In

1. **Warm Sunshine Design**: Custom CSS typography, gradients, glassmorphism card details, and pulsing elements.
2. **Interactive Guestbook**: A persistent local message board where visitors can type messages. Clicking "Send Sunshine" triggers a cascading flow of rising suns!
3. **Luna's Petting Counter**: A section for her Bernese Mountain Dog, Luna. Click the button to "Pet Luna" to increase the petting tally and trigger a shower of hearts and paws!
4. **Drawing Canvas (Sketchpad)**: A drawing board right inside the card where visitors (or Norah!) can choose colors and sketch using a mouse or touch screens.
5. **Synthesized Music Box**: An interactive audio visualizer widget. Click it to activate the visualizer bars and synthesize a happy C-Pentatonic chime melody using the browser's built-in **Web Audio API** (no external files needed!).
6. **Sailing Wave Motion**: Animated waves that sway dynamically in the sailing section.
7. **Gliding Skating Emoji**: A retro skating wheel emoji that spins on hover.
8. **Polaroid Lightbox Gallery**: Clicking on any of the polaroid frames opens a fullscreen lightbox view of the image.

---

## How to Run the Website

Since the website is built with clean vanilla HTML, CSS, and JavaScript, you can open it instantly:

1. **Option A (Instant)**: Open the `/Users/Rob/.gemini/antigravity/scratch/norah-website` folder and double-click `index.html` to open it in your web browser.
2. **Option B (Recommended for best performance)**: Run our custom Node.js server. Open your terminal in this directory and run:
   ```bash
   node server.js
   ```
   Then open your browser and navigate to `http://localhost:8081`.

---

## How to Add & Share Your Own Pictures

You can find the picture folder at: `/Users/Rob/.gemini/antigravity/scratch/norah-website/content/`

Currently, we have pre-populated this folder with the actual pictures of Norah and Luna you shared. If you want to update or share new pictures:

1. **Easy Way (Zero Code)**:
   Simply drop your new files into the `content/` folder and rename them to match the existing filenames:
   - `norah_window.jpg` (Hero/About section photo)
   - `luna_and_norah.jpg` (Photo of Norah hugging Luna)
   - `norah_posing.jpg` (Outdoors pose photo)
   - `norah_sailing_sunny.jpg` (Sailing on a sunny day)
   - `norah_sailing_cloudy.jpg` (Sailing on a cloudy day)
   - `norah_horse_close.jpg` (Horse riding close up)
   - `norah_horse_riding.jpg` (Horse riding in the arena)
   - `norah_karate_stance1.jpg` (Karate stance 1)
   - `norah_karate_stance2.jpg` (Karate stance 2)

2. **Advanced Way (Adding More Photos)**:
   - Place any new photo in the `content/` folder (e.g., `content/beach_fun.jpg`).
   - Open `index.html` and search for the `<div class="gallery-grid" id="gallery-grid">` section (around line 260).
   - Add a new block copy-pasted from an existing one:
     ```html
     <div class="gallery-item" data-src="content/beach_fun.jpg">
       <div class="polaroid-frame">
         <img src="content/beach_fun.jpg" alt="Beach Fun" loading="lazy">
         <div class="polaroid-caption">Fun at the beach! 🏖️</div>
       </div>
     </div>
     ```
   - Refresh the page and your new photo will automatically appear in the rotating grid and have the full click-to-zoom Lightbox functionality!
