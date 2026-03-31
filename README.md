# Discord Quest Helper

---

**Supported Quest Task Types:**
- **`WATCH_VIDEO`**  
- **`PLAY_ON_DESKTOP`**  
- **`STREAM_ON_DESKTOP`**  
- **`PLAY_ACTIVITY`**  
- **`WATCH_VIDEO_ON_MOBILE`**  

**Other Features:**
> - **Auto detects active, incomplete quests.**
> - **Executes quests sequentially.**  
> - **Logs progress in real-time in the console.**  

---

## Usage

**Enable DevTools (Windows)**

- **1. Quit Discord completely (App).**
---
- **2. Press `Win + R` and open:**
```
%AppData%\discord
```
---
- **3. Open `settings.json`.**
---
- **4. Replace the contents with:**

```json
{
  "IS_MAXIMIZED": true,
  "IS_MINIMIZED": false,
  "WINDOW_BOUNDS": {
    "x": 112,
    "y": 60,
    "width": 1284,
    "height": 724
  },
  "DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true,
  "MIN_WIDTH": 940,
  "MIN_HEIGHT": 500,
  "chromiumSwitches": {},
  "openH264Enabled": true,
  "BACKGROUND_COLOR": "#121214",
  "audioSubsystem": "experimental",
  "offloadAdmControls": true
}
```
---
- **5. Save the file and reopen Discord (App).**
**Press `Ctrl + Shift + I` to open DevTools.**
---
- **6. Open Developer Tools**
**Press `Ctrl + Shift + I`**
---
- **7. Paste the script**
**Go to the Console tab**
**Paste the code from `Source/index.js`**
- **If paste is blocked:**
**Type:**
**`allow pasting`**
**Paste the script again**
---
- **8. Wait**
**The script will start automatically**
**Progress will show in the console**
**Wait until the quest is completed**
