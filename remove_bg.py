from PIL import Image

def remove_white_bg_with_antialias(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    new_data = []
    for r, g, b, a in data:
        # Calculate how close the pixel is to pure white
        # Pure white is 255, 255, 255.
        # Average brightness:
        brightness = (r + g + b) / 3.0
        
        if brightness > 240:
            # Pure white -> transparent
            new_data.append((r, g, b, 0))
        elif brightness > 200:
            # Near white (anti-aliasing edges) -> semi-transparent
            # The closer to 255, the lower the alpha.
            # Map 200->255 to alpha 255->0
            alpha = int(255 * (255 - brightness) / 55.0)
            new_data.append((r, g, b, alpha))
        else:
            # Dark colors unchanged
            new_data.append((r, g, b, 255))

    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_white_bg_with_antialias("src/assets/rms_logo_new.png", "src/assets/rms_logo_new.png")
    print("Background successfully removed!")
