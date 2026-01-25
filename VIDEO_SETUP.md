# Video Background Setup

## Overview
The dashboard hero section now supports background videos, just like Netflix. The video will automatically play, loop, and fall back to the static image if the video fails to load. Includes a mute/unmute button that appears on hover, positioned like Netflix's interface.

## How to Add Your Video

### 1. Video File Requirements
- **Format**: MP4 (recommended), WebM, or OGG
- **Resolution**: 1920x1080 or higher
- **Duration**: 10-30 seconds (will loop automatically)
- **File Size**: Keep under 10MB for optimal web performance
- **Aspect Ratio**: 16:9 recommended

### 2. File Placement
1. Navigate to `src/assets/videos/`
2. Replace `hero-background.mp4.txt` with your actual video file
3. Name it `hero-background.mp4`

### 3. Video Optimization Tips
- **Compress your video** using tools like HandBrake or FFmpeg
- **Use H.264 codec** for maximum compatibility
- **Consider creating multiple versions** for different screen sizes
- **Test on different devices** to ensure smooth playback

### 4. Customization Options

#### Change Video File
Edit `src/app/features/dashboard/dashboard.component.ts`:
```typescript
private getHeroVideoUrl(): string | null {
  return 'assets/videos/your-video-name.mp4';
}
```

#### Dynamic Video Selection
You can make the video selection dynamic based on content or profile:
```typescript
private getHeroVideoUrl(): string | null {
  if (this.selectedProfile?.id === 'developer') {
    return 'assets/videos/developer-hero.mp4';
  }
  return 'assets/videos/default-hero.mp4';
}
```

#### Disable Video on Mobile
The video is automatically disabled on screens smaller than 480px to save bandwidth. To change this, modify the CSS in `dashboard.component.scss`.

### 5. Fallback Behavior
- If video fails to load → falls back to static image
- If autoplay is blocked → falls back to static image
- On mobile devices (≤480px) → uses static image only

### 6. Video Controls
- **Mute/Unmute Button**: Appears on hover in bottom-right corner
- **Visual Feedback**: Button changes color when muted (red) vs unmuted (dark)
- **Accessibility**: Proper ARIA labels for screen readers
- **Mobile**: Controls hidden on small screens (video disabled)

### 7. Performance Considerations
- Video is muted by default (required for autoplay)
- Video loops automatically
- Video doesn't interfere with user interactions
- Optimized for smooth playback
- Controls only appear on hover to reduce visual clutter

## Testing
1. Add your video file
2. Run `ng serve`
3. Navigate to the dashboard
4. The video should start playing automatically in the background
5. Test on different devices and browsers

## Troubleshooting
- **Video not playing**: Check browser console for errors
- **Video too large**: Compress the video file
- **Autoplay blocked**: This is normal - the image fallback will show
- **Performance issues**: Reduce video resolution or file size
