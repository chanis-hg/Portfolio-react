from pathlib import Path
import base64
import mimetypes

images = {
    "img_capability_interface":
        "src/assets/capabilities/capability-interface.webp.jpg",

    "img_capability_backend":
        "src/assets/capabilities/capability-backend.webp.jpg",

    "img_capability_design":
        "src/assets/capabilities/capability-design.webp.gif",

    "img_capability_photography":
        "src/assets/capabilities/capability-photography.webp.jpg",
}


output = []

for variable, filepath in images.items():
    path = Path(filepath)

    if not path.exists():
        raise FileNotFoundError(f"Image introuvable : {path}")

    mime_type = mimetypes.guess_type(path.name)[0] or "image/webp"
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")

    output.append(
        f'export const {variable} = "data:{mime_type};base64,{encoded}";'
    )

Path("capabilities-images.js").write_text(
    "\n\n".join(output) + "\n",
    encoding="utf-8",
)

print("Fichier capabilities-images.js créé avec succès.")
