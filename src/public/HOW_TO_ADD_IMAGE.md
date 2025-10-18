# How to Add Nikhil's Image to the Website

## Quick Steps:

### Method 1: Upload to Imgur (Easiest)
1. Go to **imgur.com**
2. Click "New post" or drag your image file (`Nikhil.jpg`) onto the page
3. After upload, **right-click the image** and select "Copy image address"
4. The URL should look like: `https://i.imgur.com/abc123.jpg`
5. **Replace line 46 in `/components/About.tsx`**:
   ```tsx
   src="https://i.imgur.com/YOUR_IMAGE_ID.jpg"
   ```

### Method 2: GitHub Upload
1. Create a GitHub repository or use an existing one
2. Upload your image file to the repo
3. Get the raw file URL (should end with .jpg)
4. Use that URL in the src attribute

### Method 3: Google Drive (Public Link)
1. Upload to Google Drive
2. Set sharing to "Anyone with the link can view"
3. Get shareable link and modify it for direct access

## Current Status
- The website currently uses a placeholder professional headshot
- Once you add your hosted image URL, Nikhil's actual photo will appear
- The image appears in the About section of the website

## Need Help?
If you're having trouble with any of these methods, let me know and I can help you troubleshoot!