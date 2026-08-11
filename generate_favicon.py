import sys
from PIL import Image, ImageOps

def make_favicon():
    img_path = "public/logo.jpg"
    out_path = "src/app/icon.png"
    
    try:
        img = Image.open(img_path)
        # Create a white background square canvas
        size = max(img.width, img.height)
        # add a small padding (e.g. 10%)
        size = int(size * 1.1)
        
        # Create a new image with white background
        new_img = Image.new("RGB", (size, size), (255, 255, 255))
        
        # Paste the original logo in the center
        paste_x = (size - img.width) // 2
        paste_y = (size - img.height) // 2
        new_img.paste(img, (paste_x, paste_y))
        
        # Resize to standard favicon size (e.g., 256x256) for crispness
        new_img = new_img.resize((256, 256), Image.Resampling.LANCZOS)
        
        new_img.save(out_path)
        print(f"Successfully generated favicon at {out_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    make_favicon()
